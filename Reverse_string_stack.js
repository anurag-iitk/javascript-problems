// Perform stack operation using class and Also do reverse a string using stack

class Stack {
  item = [];
  currentSize;
  maxSize;

  constructor(size) {
    this.maxSize = size;
    this.currentSize = this.item.length;
  }

// Push operation
  push(value) {
    if (this.currentSize < this.maxSize) {
      this.item[this.currentSize] = value;
      this.currentSize++;
    } else {
      console.log("Stack is full");
    }
  }

// Pop operation using stack
  pop() {
    if (this.currentSize == 0) {
      console.log("Stack is empty");
    } else {
      let value = this.item[this.currentSize - 1];
      this.currentSize -= 1;
      this.item.length = this.currentSize;
      return value;
    }
  }

// Display item
  display() {
    console.log(this.item);
  }


// Reverse a string using stack operation
  reverse(str) {
    let newStr = str.split("");

    for (let i = 0; i < newStr.length; i++) {
      this.push(newStr[i]);
    }

    for (let i = 0; i < newStr.length; i++) {
      newStr[i] = this.pop();
    }
    console.log(newStr.join(""));
  }
}

obj1 = new Stack(10);
// obj1.push(1);
// obj1.push(2);
// obj1.push(3);
// obj1.push(3);
// obj1.display();
// obj1.pop();
// obj1.display();
obj1.reverse("Anurag");
// obj1.display();
