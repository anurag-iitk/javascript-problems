// Sort an array with bubble sort

function sortedArray(arr, size){
    console.log(`Original array: ${arr}`);

    for(let i=0; i<size; i++){
        for(let j=0; j<size; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(`Sorted array: ${arr}`);
}

var arr = [3,2,7,1,9,5,6];
var size = arr.length;
sortedArray(arr, size);


