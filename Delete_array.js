// Delete element in the array

// Solution 1   ======>   using pop by default method
function deleteValueAtEnd(arr) {
  arr.pop();
  console.log(arr);
}

function deleteValueAtPositionSolution1(arr, position) {
  if (position > arr.length) {
    console.log("Invalid position number in array");
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (i >= position) {
        arr[i] = arr[i + 1];
      }
    }
    arr.length = arr.length - 1;
    console.log(arr);
  }
}

function deleteValueAtPositionSolution2(arr, position) {
  if (position > arr.length) {
    console.log("Invalid position size in array");
  } else {
    for (let i = position; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    console.log(arr);
  }
}

var arr = [1, 2, 3, 4, 5];
console.log(`Array: ${arr}`)
deleteValueAtEnd(arr);
deleteValueAtPositionSolution1(arr, 1);
deleteValueAtPositionSolution2(arr, 8);   // or use position under array length
