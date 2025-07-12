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

  deleteAtIndex(index) {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1 && current; i++) {
      current = current.next;
    }

    if (!current || !current.next) {
      console.log("Index out of bounds");
      return;
    }

    current.next = current.next.next;
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

list.addAtTail(1);
list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);
list.print();          // 1 → 2 → 3 → 4 → 5 → null

list.deleteAtIndex(2); // Deletes 3
list.print();          // 1 → 2 → 4 → 5 → null

list.deleteAtIndex(0); // Deletes 1 (head)
list.print();          // 2 → 4 → 5 → null
