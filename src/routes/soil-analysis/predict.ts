import * as ort from 'onnxruntime-web/webgpu'
import Cropper from 'cropperjs';
import { onMount } from 'svelte';
import ndarray from 'ndarray'

import percentiles from "./percentiles.json"

function softmax(arr) {
    return arr.map(function (value, index) {
        return Math.exp(value) / arr.map(function (y /*value*/) { return Math.exp(y) }).reduce(function (a, b) { return a + b })
    })
}

function getPercentiles(predictions: number[]) {
    // Search through each row in the percentiles array, at the ith column

    // If the element at the jth row is greater than our prediction
    // then our percentile is (j*5) 

    let results = [];

    console.log(percentiles)

    for (let i = 0; i < predictions.length; i++) {
        let pred = predictions[i];
        for (let j = 0; j < percentiles.length; j++) {
            console.log(pred)
            console.log(percentiles[j])
            if (percentiles[j][i] > pred) {
                results.push((j) * 5)
                // console.log(`Percentile is ${j * 5}`)
                break;
            }
        }
    }

    return results;
}

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


export async function main(input: number[], minmax: any): Promise<number[][]> {
    ort.env.wasm.wasmPaths = "wasm/"
    // create a new session and load the specific model.
    //
    // the model in this example contains a single MatMul node
    // it has 2 inputs: 'a'(float32, 3x4) and 'b'(float32, 4x3)
    // it has 1 output: 'c'(float32, 3x3)
    const session = await ort.InferenceSession.create('spectroscopy.onnx');


    // var c = document.getElementById("input-canvas") as HTMLCanvasElement;
    // var ctx = c.getContext("2d");
    // var img = document.getElementById("input-img") as HTMLImageElement;
    // ctx.drawImage(img, 0, 0, 437, 437, 0, 0, 224, 224);

    // input_img_element.decode

    // let input_img = new Image(224, 224);
    // input_img.src = 'src/lib/images/1397613.jpg';
    // let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    // ctx.drawImage(input_img, 0, 0)

    console.log(input)

    // let [input_tensor, alphaArray] = imageDataToTensor(image_data, [1, 3, 224, 224])
    let input_tensor = new ort.Tensor("float32", input, [1, 1051]);

    // let pixel_array = Array<number>.from(input_tensor.data).concat(alphaArray)

    // for (let i = 0; i < pixel_array.length; i++) {
    //     pixel_array[i] *= 255.0
    // }

    // console.log(Uint8ClampedArray.from(pixel_array))

    // let normed_image_data = new ImageData(Uint8ClampedArray.from(pixel_array), 224, 224)

    // ctx?.putImageData(normed_image_data, 0, 0)
    console.log(input_tensor)

    // // prepare feeds. use model input names as keys.
    const feeds = { "onnx::Unsqueeze_0": input_tensor };

    // // feed inputs and run
    const results = await session.run(feeds);

    console.log(results)
    let logits = results['24'].data
    console.log(logits)

    // Denormalize
    console.log(minmax)

    const min: number[] = minmax.min
    const max: number[] = minmax.max
    let results_denormed: number[] = [];
    for (let i = 0; i < min.length; i++) {
        let denorm_scale = max[i] - min[i]
        console.log(denorm_scale)

        results_denormed.push(logits[i] * denorm_scale + min[i])
    }
    console.log(results_denormed)

    let total_particles = 0;
    let min_result = 100;
    for (let i = 4; i < 8; i++) {
        if (results_denormed[i] < min_result)
            min_result = results_denormed[i]
    }
    for (let i = 4; i < 8; i++) {
        results_denormed[i] -= min_result
    }
    for (let i = 4; i < 8; i++) {
        total_particles += results_denormed[i]
    }
    console.log(total_particles)
    let scale_to_100 = 100.0 / total_particles

    for (let i = 4; i < 8; i++) {
        results_denormed[i] *= scale_to_100
    }

    total_particles = 0;
    for (let i = 4; i < 8; i++) {
        total_particles += results_denormed[i]
    }

    // Round the physical properties to be in increments of five
    total_particles = 0;
    for (let i = 4; i < 7; i++) {
        results_denormed[i] = Math.round(results_denormed[i] / 5) * 5
        total_particles += results_denormed[i]
    }
    results_denormed[7] = 100 - total_particles

    console.log(total_particles)
    console.log(results_denormed)

    let labels = [
        "oc_usda.c729_w.pct",
        "n.tot_usda.a623_w.pct",
        "k.ext_usda.a725_cmolc.kg",
        "p.ext_usda.a274_mg.kg",
        "sand.tot_usda.c60_w.pct",
        "clay.tot_usda.a334_w.pct",
        "silt.tot_usda.c62_w.pct",
        "cf_usda.c236_w.pct",
        "cec_usda.a723_cmolc.kg",
    ]

    let result_percentiles = getPercentiles(results_denormed)

    return [results_denormed, result_percentiles]
}