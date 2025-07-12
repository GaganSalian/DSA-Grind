//  Problem 28: Detect Cycle in Linked List (Hash Table Approach)

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

  // Introduce a cycle for testing
  createCycle(pos) {
    if (pos < 0) return;

    let cycleNode = null;
    let tail = this.head;
    let index = 0;

    while (tail.next) {
      if (index === pos) cycleNode = tail;
      tail = tail.next;
      index++;
    }
    tail.next = cycleNode; // Connect tail to a previous node
  }

  // ✅ Detect cycle using Set (Hash Table)
  hasCycle() {
    const visited = new Set();
    let current = this.head;

    while (current) {
      if (visited.has(current)) {
        console.log("Cycle detected ✅");
        return true;
      }
      visited.add(current);
      current = current.next;
    }

    console.log("No cycle ❌");
    return false;
  }
}


const list = new LinkedList();
list.addAtTail(1);
list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);

// Test with no cycle
list.hasCycle(); // No cycle ❌

// Create a cycle: last node points to node at index 2 (value 3)
list.createCycle(2);
list.hasCycle(); // Cycle detected ✅
