import * as ort from 'onnxruntime-web'
import Cropper from 'cropperjs';
import { onMount } from 'svelte';
import ndarray from 'ndarray'

import class_to_idx from './class_to_idx.json'
import id_to_species from './plantnet300K_species_id_2_name.json'

// FROM: https://onnxruntime.ai/docs/tutorials/web/classify-images-nextjs-github-template.html
function imageDataToTensor(image: ImageData, dims: number[]): [ort.Tensor, Array<number>] {

    // " Finally the values are first rescaled to [0.0, 1.0] and then normalized using mean=[0.485, 0.456, 0.406] and std=[0.229, 0.224, 0.225]."
    let r_mean = 0.485 * 255
    let g_mean = 0.456 * 255
    let b_mean = 0.406 * 255
    let r_std = 0.229 * 255
    let g_std = 0.224 * 255
    let b_std = 0.225 * 255


    // 1. Get buffer data from image and create R, G, and B arrays.
    var imageBufferData = image.data;
    const [redArray, greenArray, blueArray, alphaArray] = new Array(new Array<number>(), new Array<number>(), new Array<number>(), new Array<number>());

    // 2. Loop through the image buffer and extract the R, G, and B channels
    for (let i = 0; i < imageBufferData.length; i += 4) {
        redArray.push((imageBufferData[i]));
        greenArray.push(imageBufferData[i + 1]);
        blueArray.push(imageBufferData[i + 2]);
        alphaArray.push(1);
        // skip data[i + 3] to filter out the alpha channel
    }

    for (let i = 0; i < redArray.length; i++) {
        let normed = redArray[i];
        normed /= 255.0;
        normed -= 0.485;
        normed /= 0.229;
        redArray[i] = normed;
    }

    for (let i = 0; i < greenArray.length; i++) {
        let normed = greenArray[i];
        normed /= 255.0;
        normed -= 0.456;
        normed /= 0.224;
        greenArray[i] = normed;
    }

    for (let i = 0; i < blueArray.length; i++) {
        let normed = blueArray[i];
        normed /= 255.0;
        normed -= 0.406;
        normed /= 0.225;
        blueArray[i] = normed;
    }

    console.log(redArray)

    // 3. Concatenate RGB to transpose [224, 224, 3] -> [3, 224, 224] to a number array
    const transposedData = redArray.concat(greenArray).concat(blueArray);

    // 4. convert to float32
    let i, l = transposedData.length; // length, we need this for the loop
    // create the Float32Array size 3 * 224 * 224 for these dimensions output
    const float32Data = new Float32Array(dims[1] * dims[2] * dims[3]);
    for (i = 0; i < l; i++) {
        float32Data[i] = transposedData[i]; // convert to float
    }
    // 5. create the tensor object from onnxruntime-web.
    console.log(float32Data)
    const inputTensor = new ort.Tensor("float32", float32Data, dims);
    return [inputTensor, alphaArray];
}

function argmax(arr: Float32Array) {
    let max_idx = 0;
    let max_val = -9999999;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max_val) {
            max_val = arr[i];
            max_idx = i;
        }
    }

    console.log(max_val)
    return max_idx;
}


export async function main() {
    ort.env.wasm.wasmPaths = "node_modules/onnxruntime-web/dist/"
    // create a new session and load the specific model.
    //
    // the model in this example contains a single MatMul node
    // it has 2 inputs: 'a'(float32, 3x4) and 'b'(float32, 4x3)
    // it has 1 output: 'c'(float32, 3x3)
    const session = await ort.InferenceSession.create('src/lib/plantnet-18.onnx');


    var c = document.getElementById("input-canvas") as HTMLCanvasElement;
    var ctx = c.getContext("2d");
    var img = document.getElementById("input-img") as HTMLImageElement;
    ctx.drawImage(img, 0, 0, 437, 437, 0, 0, 224, 224);

    // input_img_element.decode

    // let input_img = new Image(224, 224);
    // input_img.src = 'src/lib/images/1397613.jpg';
    // let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    // ctx.drawImage(input_img, 0, 0)

    let image_data = ctx.getImageData(0, 0, 224, 224)
    console.log(image_data)

    let [input_tensor, alphaArray] = imageDataToTensor(image_data, [1, 3, 224, 224])

    let pixel_array = Array<number>.from(input_tensor.data).concat(alphaArray)

    for (let i = 0; i < pixel_array.length; i++) {
        pixel_array[i] *= 255.0
    }

    console.log(Uint8ClampedArray.from(pixel_array))

    let normed_image_data = new ImageData(Uint8ClampedArray.from(pixel_array), 224, 224)

    ctx?.putImageData(normed_image_data, 0, 0)
    console.log(input_tensor)

    // // prepare feeds. use model input names as keys.
    const feeds = { pixels: input_tensor };

    // // feed inputs and run
    const results = await session.run(feeds);

    console.log(results)

    // // read from results
    const dataC = results.class_idx.data;
    console.log(`data of result tensor 'c': ${argmax(dataC)}...`);

    let class_id = class_to_idx[argmax(dataC)]
    console.log(id_to_species[class_id])

    return id_to_species[class_id];
    // console.log(id_to_species["1397613"])

    // console.log(dataC[class_to_idx.indexOf('1397613')])
}