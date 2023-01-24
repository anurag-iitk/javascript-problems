// Find maximum occuring string

function checkString(str){
    const strObj = {};
    let maxStr = "";
    for(i of str){
        strObj[i] = (strObj[i] || 0)+1;
        if( maxStr=="" || strObj[maxStr] < strObj[i]){
            maxStr = i;
        }                        
    }

    return maxStr;
}

let str = "hello";
const val = checkString(str);
console.log(val);