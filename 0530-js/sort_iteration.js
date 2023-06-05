const { performance } = require('perf_hooks');

// Bubble Sort
function bubbleSort(arr) {
    let iterationCount = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            iterationCount += 1;
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return iterationCount;
}

// Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) {
        return { array: arr, count: 0 };
    }
    
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    let merge = mergeArrays(left.array, right.array);

    return { array: merge.array, count: left.count + right.count + merge.count };
}

function mergeArrays(left, right) {
    let merged = [];
    let i = 0, j = 0, invCount = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            merged.push(left[i++]);
        } else {
            merged.push(right[j++]);
            invCount += left.length - i;
        }
    }
    return { array: [...merged, ...left.slice(i), ...right.slice(j)], count: invCount };
}

// Quick Sort
function quickSort(arr, start, end) {
    let iterationCount = 0;

    if (start < end) {
        let partitionData = partition(arr, start, end);
        iterationCount += partitionData.count;
        iterationCount += quickSort(arr, start, partitionData.index - 1);
        iterationCount += quickSort(arr, partitionData.index + 1, end);
    }

    return iterationCount;
}

function partition(arr, start, end) {
    let iterationCount = 0;
    let pivot = arr[end];
    let i = start;

    for (let j = start; j < end; j++) {
        iterationCount += 1;
        if (arr[j] <= pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[end]] = [arr[end], arr[i]];
    return { index: i, count: iterationCount };
}

// Generate 10,000 random numbers
let nums = Array.from({length: 10000}, () => Math.floor(Math.random() * 1000000));

// Bubble Sort
let bubbleNums = [...nums];
let start = performance.now();
let bubbleIterationCount = bubbleSort(bubbleNums);
let end = performance.now();
console.log(`Bubble sort iteration count: ${bubbleIterationCount}, time: ${end - start} milliseconds`);
console.log(bubbleNums)
// Merge Sort
let mergeNums = [...nums];
start = performance.now();
let mergeIterationCount = mergeSort(mergeNums).count;
end = performance.now();
console.log(`Merge sort iteration count: ${mergeIterationCount}, time: ${end - start} milliseconds`);

// Quick Sort
let quickNums = [...nums];
start = performance.now();
let quickIterationCount = quickSort(quickNums, 0, quickNums.length-1);
end = performance.now();
console.log(`Quick sort iteration count: ${quickIterationCount}, time: ${end - start} milliseconds`);
