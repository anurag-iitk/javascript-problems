class Sort {
    constructor(arr){
        this.item = arr;
    }

    sorted(){
        for(let i=0; i<this.item.length; i++){
            let maxValue = i;
            for( let j=i+1; j<this.item.length; j++){
                if( this.item[maxValue] < this.item[j]){
                    maxValue = j
                }
            }
            let temp = this.item[maxValue];
            this.item[maxValue] = this.item[i];
            this.item[i] = temp;
        }
        console.log(this.item)
    }
}

const arr = [9, 2, 5, 1, 4];
const obj = new Sort(arr);
obj.sorted();