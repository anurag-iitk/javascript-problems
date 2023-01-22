// Queue operations using class

class Queue {
    item = [];
    currentSize;
    maxSize;

    constructor(size){
        this.maxSize = size;
        this.currentSize = this.item.length;
    }

// Add element in queue
    enqueue(value){
        if( this.currentSize < this.maxSize ){
            this.item[this.currentSize] = value;
            this.currentSize++;
        } else {
            console.log("Queue is full");
        }
    }

// Remove element in queue
    dequeue(){
        if( this.currentSize == 0){
            console.log("Queue is empty");
        } else {
            for( let i=0; i<this.item.length; i++){
                this.item[i] = this.item[i+1];
            }
            this.item.length -= 1;
        }
    }

// Display items of the queue
    display(){
        console.log(this.item);
    }

// Using pass an array to enqueue
    addArray(arr){
        for( let i=0; i<arr.length; i++){
            this.enqueue(arr[i]);
        }
    }
    
// To get front
    front(){
        console.log(this.item[0]);
    }

// To get Rear
    rear(){
        if(this.currentSize == 0){
            console.log("Queue is empty");
        } else {
            console.log(arr[this.currentSize-1])
        }
    }

}

obj = new Queue(5);
arr = [1,2,3,4,5]
obj.addArray(arr);
// obj.enqueue(2);
// obj.enqueue(3);
// obj.enqueue(4);
obj.dequeue();
obj.dequeue();
obj.display();
obj.front();
obj.rear();
