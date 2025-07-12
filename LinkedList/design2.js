class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addAtHead(val) {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
  }

  addAtTail(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  addAtIndex(index, val) {
    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1 && current; i++) {
      current = current.next;
    }

    if (!current) {
      console.log("Index out of bounds");
      return;
    }

    const node = new Node(val);
    node.next = current.next;
    current.next = node;
  }

  print() {
    let result = '';
    let current = this.head;
    while (current) {
      result += current.val + ' → ';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}

const list = new LinkedList();

list.addAtHead(5);     // List: 5
list.addAtTail(10);    // List: 5 → 10
list.addAtTail(15);    // List: 5 → 10 → 15
list.addAtIndex(1, 7); // List: 5 → 7 → 10 → 15
list.print();          // Output: 5 → 7 → 10 → 15 → null
