// 🧩 Problem:32
// Given the head of a singly linked list and an integer val, remove all nodes from the list that have val as their value.

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

  removeElements(val) {
    const dummy = new Node(0);
    dummy.next = this.head;
    let current = dummy;

    while (current && current.next) {
      if (current.next.val === val) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    this.head = dummy.next;
  }

  print() {
    let curr = this.head;
    let result = "";
    while (curr) {
      result += curr.val + " → ";
      curr = curr.next;
    }
    console.log(result + "null");
  }
}

const list = new LinkedList();

[1, 2, 6, 3, 4, 5, 6].forEach(val => list.addAtTail(val));

console.log("Before:");
list.print();

list.removeElements(6);

console.log("After:");
list.print();
