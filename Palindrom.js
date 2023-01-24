// Palindrom program

function checkPalindrom(str){
    let start = 0;
    let end = str.length-1;
    while( start <= end){
        if(str[start] == str[end]){
            start++;
            end--;
        } else {
            return false;
        }
    }
    return true;
}

let str = "level";
let val = checkPalindrom(str);
console.log(val);