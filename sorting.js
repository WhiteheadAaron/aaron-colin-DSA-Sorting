let dataset = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  89
];

let books = [
    'Slsd',
    'Harry Potter',
    'Hunger Games',
    'Harry Potter 2',
    'Harry Potter 3',
    'Harry Potter 7',
    'Zkdjf',
    'A',
    'Hello'
]

function masterQuickSort() {
  let counter = 0;

  function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
      counter++;
      return array;
    }

    const middle = partition(array, start, end);
    //   counter = counter + result.counter;

    // middle = 4
    // middle = 2
    array = quickSort(array, start, middle);
    counter++;
    // dataset = [30, 25, 32, 70, 89, 72]
    // start = 0, middle = 4
    // calling this function again, just looking at positions 0 to 4
    // [30, 25, 32, 70, 89]

    // new dataset = dataset = [30, 25, 32, 30, 89, 72]
    // start = 0, end = 2
    // [30, 25, 32]
    array = quickSort(array, middle + 1, end);
    counter++;
    // calling this function again, just looking at position 5
    // start = 5, end = 6
    // [72]

    return array;
  }

  function swap(arr, i, j) {
    let something = arr[i];
    arr[i] = arr[j];
    arr[j] = something;
  }

  function partition(array, start, end) {
    const pivot = array[end - 1];
    // pivot = 70
    // pivot = 70
    let j = start;
    // j = 0
    // j = 0
    for (let i = start; i < end - 1; i++) {
      counter++;
      if (array[i] <= pivot) {
        counter++;
        // round 2

        // i = 0, array[0] = 30
        // swaps itself
        // j = 1

        // i = 1, array[1] = 25
        // dataset = [30, 25, 32, 70, 89, 72]
        // j = 2

        // i = 2, array[2] = 32, less than 70
        // dataset = [30, 25, 32, 70, 89, 72]
        // j = 3

        // dataset = [30, 25, 32, 30, 89, 72]

        // round 1
        // i = 0, array[0] = 89
        // pivot = 70, so it does nothing

        // i = 1, array[1] = 30
        // 30 is less than 70
        // dataset = [30, 89, 25, 32, 72, 70]
        // now j = 1

        // i = 2, array[2] = 25
        // 25 is less than 70
        // dataset = [30, 25, 89, 32, 72, 70]
        // now j = 2

        // i = 3, array[3] = 32
        // 32 is less than 70
        // dataset = [30, 25, 32, 89, 72, 70]
        // now j = 3

        // i = 4, array [4] = 72
        // do nothing

        // i = 5, array[5] = 70
        // 70 = 70
        // dataset = [30, 25, 32, 70, 72, 89]
        // j = 4

        swap(array, i, j);
        j++;
      }
    }

    swap(array, end - 1, j);
    counter++;
    // dataset = [30, 25, 32, 70, 72, 89]
    // new dataset = [30, 25, 32, 70, 89, 72]
    // new dataset = [30, 25, 32, 70, 72, 89]

    return j;
  }
  console.log(quickSort(dataset));
  return counter;
}
// console.log(masterQuickSort());

function masterMergeSort() {
  let counter = 0;

  function mergeSort(array) {
    if (array.length <= 1) {
      counter++;
      return array;
    }

    const middle = Math.floor(array.length / 2);
    // middle = 1
    let left = array.slice(0, middle);
    // left = [30]
    let right = array.slice(middle, array.length);
    // right = [25]

    left = mergeSort(left);
    counter++;
    right = mergeSort(right);
    counter++;

    //           [89] [30] [25] - [32] [72] [70]
    //       [89] - [30] [25] ----- [32] - [72] [70]
    //         [30] - [25] ----------------- [72] - [70]

    // array = [30, 25]
    // left = [30]
    // right = [25]

    // right = [25, 30]
    // left = [89]
    // array = [89, 30, 25];

    // left = [25, 30, 89]
    // right = [32, 70, 72]
    // array = [89, 30, 25, 32, 72, 70]

    return merge(left, right, array);
  }

  function merge(left, right, array) {
    // left = [30] right = [25] array = [30, 25]

    // left = [89] right = [25, 30]  array = [89, 30, 25]
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;

    // left.length = 1
    // right.length = 1   = 2
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        counter++;
        array[outputIndex++] = left[leftIndex++];
      } else {
        array[outputIndex++] = right[rightIndex++];
        counter++;
        // [25, 25]
        // outputIndex = 1  rightIndex = 1

        // [25, 30, 25]
        // outputIndex = 1 rightIndex = 1

        // [same array]
        // ouputIndex = 2 rightIndex = 2
      }
    }

    for (let i = leftIndex; i < left.length; i++) {
      counter++;
      array[outputIndex++] = left[i];
      // [25, 30]
      // outputIndex = 2

      // [25, 30, 89]
    }

    for (let i = rightIndex; i < right.length; i++) {
      counter++;
      array[outputIndex++] = right[i];
    }
    return array;
  }

  console.log(mergeSort(dataset));
  return counter;
}
// console.log(masterMergeSort(dataset));

let smallDataset = [89, 30, 25, 32, 72, 70];

// we know [25, ?, ?, ?, ?, 89]
// get a middle at position 3
// put firt item there
// [25, ?, ?, 30, ?, 89];
// Is next item less than or greater than 30?
// 32 is greater than 30, put it at arr[middle + 1]
// [25, ?, ?, 30, 32, 89]

// return [min, ...newArray, max];

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bucketSort(arr, max, min) {
  let newArr = arr.filter(item => item !== min && item !== max);

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[i] < newArr[j]) {
        swap(newArr, i, j);
      }
    }
  }
  return [min, ...newArr, max];
}
// console.log(bucketSort(smallDataset, 89, 25));



function randomizeList(arr) {
    for (let i = 0; i < arr.length; i++) {
        let random = Math.floor(Math.random() * (arr.length - 1));
        swap(arr, i, random);
    }
    return arr;
}
// console.log(randomizeList(dataset));


// Sorting books can be done the same way as the merge sort and quick sort above


