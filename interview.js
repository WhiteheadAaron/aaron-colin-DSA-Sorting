// write an algorithm to sort an array containing only 1s and 0s
// your algorithm should only iterate through the array once
// you can't use any extra memory to store the data

// have a counter set up
// if your number is a 0, add 1 to the counter
// count how many 0's exist inside the array
// place that many 0's at the start, and the rest make 1's

myArr = [0, 1, 1, 0, 1, 0, 1, 1];

// function sortOnesAndZeros(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       count++;
//     }
//   }
//   for (let i = 0; i < count; i++) {
//     arr[i] = 0;
//   }
//   for (let i = count; i < arr.length; i++) {
//     arr[i] = 1;
//   }
//   return arr;
// }

// console.log(sortOnesAndZeros(myArr));

function sortList(arr, left = 0, right = arr.length - 1) {
  if ((left > right)) {
    return arr;
  }

  if (arr[left] < arr[right]) {
    left++;
    right--;
    sortList(arr, left, right);
  }

  if (arr[right] < arr[left]) {
    let swap = arr[right];
    arr[right] = arr[left];
    arr[left] = swap;
    left++;
    right--;
    sortList(arr, left, right);
  }
  if (arr[right] === 1 && arr[left] === 1) {
    right--;
    sortList(arr, left, right);
  }

  if (arr[right] === 0 && arr[left] === 0) {
    left++;
    sortList(arr, left, right);
  }
  return arr;
}

console.log(sortList(myArr));