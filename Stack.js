// Stack operations in JavaScript

const arr = [];
let maxElement = 5;


// Push operation
function push(value){
    currentSize = arr.length;
    if(currentSize < maxElement){
        arr[currentSize] = value;
        currentSize++;
    } else {
        console.log(`Stack is full`);
    }
}


// Pop operation
function pop(){
    if(currentSize > 0){
        currentSize = currentSize - 1;
        arr.length = currentSize;
    } else {
        console.log("Stack is empty");
    }
}


// Display all element
function display(arr){
    let str = ''
    for(let i=0; i<=arr.length-1; i++){
        str += arr[i] += " ";
    }
    console.log(str);
}

push(5)
push(53)
push(52)
push(51)
push(51)
display(arr);
pop()
console.log(`After pop function`)
display(arr);
