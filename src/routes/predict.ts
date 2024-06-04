import * as ort from 'onnxruntime-web'
import Cropper from 'cropperjs';
import { onMount } from 'svelte';

function imageDataToTensor(image: ImageData, dims: number[]): ort.Tensor {
    // 1. Get buffer data from image and create R, G, and B arrays.
    var imageBufferData = image.data;
    const [redArray, greenArray, blueArray] = new Array(new Array<number>(), new Array<number>(), new Array<number>());

    // 2. Loop through the image buffer and extract the R, G, and B channels
    for (let i = 0; i < imageBufferData.length; i += 4) {
        redArray.push(imageBufferData[i]);
        greenArray.push(imageBufferData[i + 1]);
        blueArray.push(imageBufferData[i + 2]);
        // skip data[i + 3] to filter out the alpha channel
    }

    // 3. Concatenate RGB to transpose [224, 224, 3] -> [3, 224, 224] to a number array
    const transposedData = redArray.concat(greenArray).concat(blueArray);

    // 4. convert to float32
    let i, l = transposedData.length; // length, we need this for the loop
    // create the Float32Array size 3 * 224 * 224 for these dimensions output
    const float32Data = new Float32Array(dims[1] * dims[2] * dims[3]);
    for (i = 0; i < l; i++) {
        float32Data[i] = transposedData[i] / 255.0; // convert to float
    }
    // 5. create the tensor object from onnxruntime-web.
    const inputTensor = new ort.Tensor("float32", float32Data, dims);
    return inputTensor;
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

    let input_tensor = imageDataToTensor(image_data, [1, 3, 224, 224])
    console.log(input_tensor)

    // prepare inputs. a tensor need its corresponding TypedArray as data
    const dataA = Float32Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const dataB = Float32Array.from([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]);
    const tensorA = new ort.Tensor('float32', dataA, [3, 4]);
    const tensorB = new ort.Tensor('float32', dataB, [4, 3]);

    // prepare feeds. use model input names as keys.
    const feeds = { pixels: input_tensor };

    // feed inputs and run
    const results = await session.run(feeds);

    console.log(results)

    // read from results
    const dataC = results.class_idx.data;
    console.log(`data of result tensor 'c': ${dataC}`);


}