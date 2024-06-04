
import { InferenceSession, Tensor } from 'onnxruntime-web';

import ndarray from 'ndarray'
import ops from 'ndarray-ops'
// const ndarray = require('ndarray')
// const ops = require('ndarray-ops')
import fs from 'fs'
import jimp from 'jimp'
var text = fs.readFileSync("classes.txt").toString('utf-8');
const classes = text.split("\r\n");


var path = 'https://farm2.staticflickr.com/1533/26541536141_41abe98db3_z_d.jpg'
var imageData = null;

var imageData = await jimp.read(path).then(image => {
    return image.resize(224, 224) // resize
    //console.log(imageData.bitmap)
    //.quality(60) // set JPEG quality
    //.greyscale() // set greyscale
    //.write('./data/bird-small-bw.jpg'); // save
})
    .catch(err => {
        console.error(err);
    });

function imageDataToTensor(data, dims): any {
    // 1a. Extract the R, G, and B channels from the data to form a 3D int array
    const [R, G, B] = new Array([], [], []);
    for (let i = 0; i < data.length; i += 4) {
        R.push(data[i]);
        G.push(data[i + 1]);
        B.push(data[i + 2]);
        // 2. skip data[i + 3] thus filtering out the alpha channel
    }
    ///console.log(R);
    //console.log(G);
    //console.log(B);
    // 1b. concatenate RGB ~= transpose [224, 224, 3] -> [3, 224, 224]
    const transposedData = R.concat(G).concat(B);

    // 3. convert to float32
    let i, l = transposedData.length; // length, we need this for the loop
    const float32Data = new Float32Array(3 * 224 * 224); // create the Float32Array for output
    for (i = 0; i < l; i++) {
        float32Data[i] = transposedData[i] / 255.0; // convert to float
    }

    const inputTensor = new Tensor("float32", float32Data, dims);
    return inputTensor;
}

var data = imageDataToTensor(imageData.bitmap.data, [1, 3, 224, 224])
// create an inference session, using WebGL backend. (default is 'wasm') 
//const session = await ort.InferenceSession.create('./model/squeezenet1_1.onnx', { executionProviders: ['wasm'] }); 
const session = await InferenceSession.create('../model/resnet50v2.onnx', { executionProviders: ['wasm'] });

export async function runModel(model, preprocessedData): Promise<[Tensor, number]> {
    const start = new Date();
    try {
        const feeds: Record<string, Tensor> = {};
        feeds[model.inputNames[0]] = preprocessedData;
        const outputData = await model.run(feeds);
        const end = new Date();
        const inferenceTime = (end.getTime() - start.getTime());
        const output = outputData[model.outputNames[0]];
        return [output, inferenceTime];
    } catch (e) {
        console.error(e);
        throw new Error();
    }
}

//The softmax transforms values to be between 0 and 1
function softmax(resultArray: number[]): any {
    // Get the largest value in the array.
    const largestNumber = Math.max(...resultArray);
    // Apply exponential function to each result item subtracted by the largest number, use reduce to get the previous result number and the current number to sum all the exponentials results.
    const sumOfExp = resultArray.map((resultItem) => Math.exp(resultItem - largestNumber)).reduce((prevNumber, currentNumber) => prevNumber + currentNumber);
    //Normalizes the resultArray by dividing by the sum of all exponentials; this normalization ensures that the sum of the components of the output vector is 1.
    return resultArray.map((resultValue, index) => {
        return Math.exp(resultValue - largestNumber) / sumOfExp;
    });
}

const [res, time] = await runModel(session, data);
var output = res.data;
var inferenceTime = time;
var results = softmax(Array.prototype.slice.call(output))

var topResults = [];
for (let i = 0; i < results.length; i++) {
    if (results[i] > 0.3) {
        topResults.push([classes[i] + ": " + results[i]]);
    }
}

console.log(topResults);