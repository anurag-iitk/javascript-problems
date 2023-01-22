// Binary search

function binarySearch(arr, start, end, value){
    let index;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] == value){
            index = mid;
            return index;
        } else if( value > arr[mid]){
            start = mid+1;
        } else {
            end = mid-1;
        }
    }
}

const arr = [1,2,3,4,5,6];
console.log(`Using iterator: ${binarySearch(arr, 0, arr.length-1, 4)}`);


// Using recursion
function recursiveBinary(arr, start, end){
    let value=0;
    let index;
    let midd = Math.floor((start+end)/2);
    if(arr[midd] == value){
        return midd;
    } else if(arr[midd] < value){
        return recursiveBinary(arr, midd+1, end);
    } else if(arr[midd] > value) {
        return recursiveBinary(arr, start, midd-1);
    } else {
        return false;
    }
}

console.log(`Using recursion: ${recursiveBinary(arr, 0, arr.length-1)}`);