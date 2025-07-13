// Problem29: Detect Cycle in a Linked List (Floyd’s Algorithm)

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

  // Create a cycle by connecting tail to a given index
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
    tail.next = cycleNode;
  }

  // ✅ Detect cycle using Floyd’s Tortoise & Hare
  hasCycleFloyd() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        console.log("Cycle detected ✅");
        return true;
      }
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

// ✅ Test: No cycle
list.hasCycleFloyd();  // Output: No cycle ❌

// 🔁 Create cycle (tail connects to index 2)
list.createCycle(2);

// ✅ Test: Cycle now exists
list.hasCycleFloyd();  // Output: Cycle detected ✅
