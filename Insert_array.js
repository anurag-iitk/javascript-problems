// Add element in the array

// Solution 1  ======>  Using push by default function
function addValueAtEnd(arr) {
  let value = 6;
  arr.push(value);
  console.log(arr);
}

// Solution 2
/* if the value position is unexpected in that case element add in the last of the array */
function addValueAtPositionSolution1(arr, position, value) {
  let size = arr.length;
  if (position > arr.length) {
            /* You can use push function 
    arr.push(value);
            OR  */
    for (let i = 0; i < arr.length+1; i++) {
      arr[size] = arr[size + 1];
      arr[size+1] = value;
    }
    arr.length = arr.length - 1;
    console.log(arr);
  } else {
    for (let i = size - 1; i >= position; i--) {
      arr[i + 1] = arr[i];
      if (i == position) {
        arr[i] = value;
      }
    }
    console.log(arr);
  }
}

// Solution 3
function addValueAtPositionSolution2(arr, position, value) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= position) {
      arr[i + 1] = arr[i];
      if (i == position) {
        arr[i] = value;
      }
    }
  }
  console.log(arr);
}

var arr = [1, 2, 4, 5];

addValueAtEnd(arr);
addValueAtPositionSolution1(arr, 9, 7);
addValueAtPositionSolution1(arr, 2, 3);
