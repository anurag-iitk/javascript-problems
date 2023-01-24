// Linked list operations

class LinkedList{
    constructor(data){
        this.head = {
            value : data,
            next : null
        }
        this.tail = this.head;
        this.size = 1;
    }

// Insert node 
    appendNode(data){
        this.newNode = {
            value : data,
            next : null
        };
        this.tail.next = this.newNode;
        this.tail = this.newNode;
        this.size++;
    }

// Print all node
    traversing(){
        let count = 0;
        let currentNode = this.head;
        while(count<this.size){
            console.log(currentNode)
            currentNode = currentNode.next;
            count++;
        }
    }

}

const list = new LinkedList(1);
list.appendNode(2);
list.appendNode(3);
list.appendNode(4);
list.traversing();