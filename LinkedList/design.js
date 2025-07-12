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