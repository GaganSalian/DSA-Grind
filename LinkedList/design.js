// 1. Define a Node
// A Node stores:

// value

// next

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
ex:
const nodeA = new Node(5);
console.log(nodeA.value); // 5
console.log(nodeA.next);  // null

// 2. Create a LinkedList Class
// The LinkedList tracks:

// the head (the first node)

class LinkedList{
    constructor(){
        this.head=null;
    }
}
// Initially, it’s empty:
const list = new LinkedList();
console.log(list.head); // null

// 3. Insert at the Head
// Let’s add a new value at the start.

// Steps:

// create a new node

// set new node’s next → current head

// update head → new node


insertAtHead(value) {
    const newNode=new Node(value);
    newNode.next=this.head;
    this.head=newNode;
}

const list = new LinkedList();
list.insertAtHead(10);
list.insertAtHead(20);
console.log(list);

result:
20 → 10 → null

// 4. Print the List
// We need a way to traverse it:

print() {
  let curr = this.head;
  while (curr) {
    console.log(curr.value);
    curr = curr.next;
  }
}

ex:
list.print();
// prints:
// 20
// 10
// FULL IMPLEMENTATION:

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  print() {
    let curr = this.head;
    let output = "";
    while (curr) {
      output += curr.value + " → ";
      curr = curr.next;
    }
    output += "null";
    console.log(output);
  }
}

// Example usage:
const list = new LinkedList();
list.insertAtHead(10);
list.insertAtHead(20);
list.insertAtHead(30);
list.print(); // 30 → 20 → 10 → null
