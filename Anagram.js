// Anagram program

function checkAnagram(str, findStr){
    const strObj = {};
    if(str.length != findStr.length){
        return false;
    } 
        for(i of str){
            strObj[i] = (strObj[i] || 0)+1;
        }

        for(i of findStr){
            if(!strObj[i]){
                return false;
            } 
            strObj[i]--;
        }
        return true;
    }


let str = "hello";
val = checkAnagram(str, "elolh");
console.log(val)