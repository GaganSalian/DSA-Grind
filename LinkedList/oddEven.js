// Problem 35 Statement:
// Given the head of a singly linked list, group all the nodes positioned at odd indices first, followed by the nodes at even indices. Keep the relative order of nodes the same.


class Node{
 constructor(val){
    this.val=val;
    this.next=null;
 }
}

class LinkedList{
    constructor(){
        this.head=null;
    }
    addAtTail(val){
        const node=new Node(val)
        if(!this.head){
            this.head=node;
            return;
        }
        let curr=this.head;
        while (curr.next){
            curr=curr.next;
        }
        curr.next=node
    }

    oddEvenList(){
        if(!this.head||!this.head.next) return;
          let odd = this.head;
    let even = this.head.next;
    let evenHead = even;

    while (even && even.next) {
      odd.next = even.next;
      odd = odd.next;

      even.next = odd.next;
      even = even.next;
    }
     odd.next = evenHead;
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
[1, 2, 3, 4, 5].forEach(val => list.addAtTail(val));

console.log("Before:");
list.print(); // 1 → 2 → 3 → 4 → 5 → null

list.oddEvenList();

console.log("After:");
list.print(); // 1 → 3 → 5 → 2 → 4 → null
