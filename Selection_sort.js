// Selection sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minValue = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minValue] > arr[j]) {
        minValue = j;
      }
    }
    let temp = arr[minValue];
    arr[minValue] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
}

const arr = [9, 2, 5, 1, 4];
selectionSort(arr);
