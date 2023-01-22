// Circular Queue operations

class Queue{
    constructor(size){
        this.maxSize = size;
        this.arr = new Array(size);
        this.currentSize = 0;
        this.head = -1;
        this.tail = -1;
    }

// Add element in queue
    enqueue(value){
        if( this.currentSize != this.maxSize ){
            if( this.tail == this.maxSize-1){
                this.tail = 0;
            } else {
                this.tail++;
            } if( this.head == -1){
                this.head = this.tail;
            }
            this.arr[this.tail] = value;
            this.currentSize++;
        } else {
            console.log("Queue is full")
        }
    }

// Delete element in queue
    dequeue(){
        if( this.currentSize <= 0){
            this.head = -1;
            this.tail = -1;
            console.log("Queue is empty");
        } else {
            this.arr[this.head] = null;
            if( this.head == this.maxSize-1 ){
                this.head = 0;
            } else{
                this.head++;
            }
        }
        this.currentSize--;
    }

// Display element
    display(){
        console.log(this.arr);
    }
}

const obj = new Queue(5);
obj.enqueue(1);
obj.enqueue(2);
obj.enqueue(3);
obj.enqueue(4);
obj.enqueue(5);
obj.dequeue();
obj.display();
obj.enqueue(6);
obj.display();
