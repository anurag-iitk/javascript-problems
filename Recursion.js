// Direct Recursion

// Problem 1 =========> Find Factorial
/* 
value 5
        5*4*3*2*1 = result
*/
function findFactorial(value) {
  if (value == 0) {
    return 1;
  } else {
    return value * findFactorial(value - 1);
  }
}

var value = 5;
console.log(`Factorial number of ${value} is: ${findFactorial(value)}`);

// Problem-2 ==========>  Sum all number

function sumAll(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumAll(n - 1);
  }
}

console.log(`Sum of element: ${sumAll(3)}`);

// Problem-3   ========> Power of an number

function power(b, e) {
  if (e == 0 ) {
    return 1;
  } else if(b == 0){
    return 1;
  } else {
    return b * power(b, e - 1);
  }
}

var base = 2;
var exp = 3;
console.log(`Power of ${base}**${exp} is: ${power(base, exp)}`);

// Problem 4  ===========>  Fibonacci Series

function findFibonacci(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return findFibonacci(n - 1) + findFibonacci(n - 2);
  }
}

console.log(`Fibonacci series: ${findFibonacci(7)}`);


// Problem 5  ===========>  Sum of element in the array
/* Using Direct recursion */
function addElement(arr, size){
    let res = 0;
    if(size==0){
        return arr[0];
    } else {
        return arr[size] + addElement(arr, size-1);
    }
}

var arr = [1,2,3,4];
console.log(`Sum array element using Direct recursion: ${addElement(arr, arr.length-1)}`);


/* Using Indirect recursion */
function sum(arr){
    return _sum(arr, arr.length-1)
}

function _sum(arr, index){
    if(index == 0){
        return arr[0];
    } else {
        return arr[index] + _sum(arr, index-1);
    }
}

console.log(`Sum array element using In-Direct recursion: ${sum(arr)}`);


// Problem 6    ===========>       Sorted array using bubble sort

var arr1 = [23, 1000, 1, -1, 8, 3];
sortArray(arr);
console.log(`Sort array using bubble sort in recursive: ${arr1}`);

function sortArray(arr){
    let isSorted = false;
    for(let i=0; i<arr1.length-1; i++){
        if(arr1[i] > arr1[i+1]){
            let temp = arr1[i];
            arr1[i] = arr1[i+1];
            arr1[i+1] = temp;
            isSorted = true;
        }
    }
    if(isSorted){
        sortArray(arr1);
    }
}


// Problem 7    ===============>    Reverse array element

function reverseArray(arr, start, end){
  if(start <= end){
    let temp = arr[end];
    arr[end] = arr[start];
    arr[start] = temp;
    return reverseArray(arr, start+1, end-1);
  }
  console.log(`Reverse array: ${arr}`);
}

reverseArray(arr1, 0, arr1.length-1);


