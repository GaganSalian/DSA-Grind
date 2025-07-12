// Problem 27: Reverse a Singly Linked List (Iterative)

// Node class for each element in the list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add node to the end of the list
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

  // Print the list
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

  // Reverse the list iteratively
  reverseIterative() {
    let prev = null;
    let current = this.head;

    while (current) {
      let next = current.next;   // Save next
      current.next = prev;       // Reverse the link
      prev = current;            // Move prev forward
      current = next;            // Move current forward
    }

    this.head = prev;  // Update head
  }
}

// Sample usage
const list = new LinkedList();

list.addAtTail(1);
list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);

console.log("Original list:");
list.print();

console.log("Reversed list:");
list.reverseIterative();
list.print();


// output
// Original list:
// 1 → 2 → 3 → 4 → 5 → null
// Reversed list:
// 5 → 4 → 3 → 2 → 1 → null
