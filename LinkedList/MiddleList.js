// Problem 26: Find the Middle of a Singly Linked List

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addAtTail(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  print() {
    let curr = this.head;
    let output = "";
    while (curr) {
      output += curr.val + " → ";
      curr = curr.next;
    }
    output += "null";
    console.log(output);
  }

  findMiddle() {
    if (!this.head) {
      console.log("List is empty");
      return null;
    }

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log("Middle node:", slow.val);
    return slow;
  }
}



const list =new LinkedList();
list.addAtTail(1);
list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);

list.print();        // 1 → 2 → 3 → 4 → 5 → null
list.findMiddle();   // Output: Middle node: 3

list.addAtTail(6);   // List becomes 1 → 2 → 3 → 4 → 5 → 6
list.print();
list.findMiddle();   // Output: Middle node: 4 (2nd middle in even-length list