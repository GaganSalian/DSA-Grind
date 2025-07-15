// Add Two Numbers Represented as Linked Lists
// 🧩 Problem 36 Statement:
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit.
// Add the two numbers and return the sum as a linked list.

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

  static addTwoLists(l1, l2) {
    const dummy = new Node(0);
    let current = dummy;
    let carry = 0;

    let p = l1, q = l2;

    while (p !== null || q !== null) {
      const x = p ? p.val : 0;
      const y = q ? q.val : 0;

      const sum = x + y + carry;
      carry = Math.floor(sum / 10);

      current.next = new Node(sum % 10);
      current = current.next;

      if (p) p = p.next;
      if (q) q = q.next;
    }

    if (carry > 0) {
      current.next = new Node(carry);
    }

    return dummy.next;
  }

  printFromNode(node) {
    let curr = node;
    let result = "";
    while (curr) {
      result += curr.val + " → ";
      curr = curr.next;
    }
    console.log(result + "null");
  }
}


const l1 = new LinkedList();
const l2 = new LinkedList();

[2, 4, 3].forEach(val => l1.addAtTail(val)); // 342
[5, 6, 4].forEach(val => l2.addAtTail(val)); // 465

const result = LinkedList.addTwoLists(l1.head, l2.head);

const resultList = new LinkedList();
resultList.printFromNode(result); // 7 → 0 → 8 → null
