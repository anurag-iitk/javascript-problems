// Merge two array

// using for loop for each array
function mergeTwoArraySolution1(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    arr3[arr1.length + i] = arr2[i];
  }
  console.log(arr3);
}


/* While loop without sorted an array

    Show two time 9 and 14 bcuz once added already
*/
function mergeTwoArraySolution2(arr1, arr2) {
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    arr3[i] = arr1[i];
    arr3[arr1.length + i] = arr2[j];
    i++;
    j++;
  }
  while (j < arr2.length) {
    arr3[arr3.length] = arr2[j];
    j++;
  }
  console.log(arr3);
}

// Using while loop with sorted array
function mergeTwoArraySolution3() {
  let arr1 = [1, 3, 4];
  let arr2 = [2, 5, 6, 7, 8];
  let arr3 = [];
  let i1 = 0;
  let i2 = 0;
  let i3 = 0;

  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] < arr2[i2]) {
      arr3[i3] = arr1[i1];
      i1++;
    } else {
      arr3[i3] = arr2[i2];
      i2++;
    }
    i3++;
  }

  while (i2 < arr2.length) {
    arr3[i3] = arr2[i2];
    i2++;
    i3++;
  }

  console.log(arr3);
}

var arr1 = [1, 4, 2];
var arr2 = [3, 8, 6, 9, 14];
var arr3 = [];

mergeTwoArraySolution1(arr1, arr2);
mergeTwoArraySolution2(arr1, arr2);
mergeTwoArraySolution3();
