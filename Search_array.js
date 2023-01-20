// Search element in the array


// For single element found
function searchElement(arr, element){
    let index;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == element){
            index = i;
            console.log(`Found: ${index}`)
            break;
        }
    }
}

// Search for duplicate value
function searchElementForDuplicate(arr, element){
    let index = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] == element){
            index.push(i)
        }
    }
    console.log(`Element found in index at: ${index}`);
}


var arr = [1,2,3,4,5,6,3];
searchElement(arr, 2);
searchElementForDuplicate(arr, 3);
