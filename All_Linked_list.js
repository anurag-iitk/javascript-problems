// All linked list operation

class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }

// Append node at last 
  appendAtLast(data) {
    let newNode = {
      value: data,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

// Append node at index value
  appendAtIndex(data, index) {
    let count = 1;
    let currentNode = this.head;
    while(count<index){
        currentNode = currentNode.next;
        count++;
    }
    let nextNode = currentNode.next;
    currentNode.next = {
        value: data,
        next: nextNode
    }
}
  
// Delete node
  deleteNode(index){
    let counter = 1;
    let leadNode = this.head;
    if (index === 1) {
      this.head = this.head.next;
    } else {
      while (counter < index-1 ) {
        leadNode = leadNode.next;
        counter++;
      }
      let nextNode = leadNode.next;
      leadNode.next = nextNode;
      console.warn(leadNode);
    }
  }

// Search node using value
  searchNode(data){
    let result = undefined;
    let leadNode = this.head;
    let loop = true;
    while(loop){
        leadNode = leadNode.next;
        loop = leadNode;
        if(loop && leadNode.value === data){
            loop = false;
            result = leadNode;
        }
    }
    console.log(result)
  }

// Traverse all node
  traversing() {
    let count = 0;
    let currentNode = this.head;
    while (count < this.size) {
      console.log(currentNode);
      currentNode = currentNode.next;
      count++;
    }
  }
}

const list = new LinkedList(1);
list.appendAtLast(2);
list.appendAtLast(4);
list.appendAtLast(5);
list.appendAtIndex(3,3);
list.traversing();
// list.deleteNode(3);
// list.traversing();
// list.searchNode(4);