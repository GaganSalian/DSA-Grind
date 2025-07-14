// Remove Nth Node from End of List (Two-Pass Method)

//  Problem 33 Statement:
// Given the head of a linked list and an integer n, remove the nth node from the end of the list and return the new head.


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
    const node=new Node(val);
    if(!this.head){
        this.head=node;
        return;
    }

    let current=this.head;
    while(current.next){
        current=current.next;
    }
    current.next=node;
}
removeNthFromEnd(n){
    let dummy=new Node(0);
    dummy.next=this.head;
    let length=0;
    let current=this.head;

    while(current){
        length++;
        current=current.next;
    }
    length=length-n;
    current=dummy;
    while(length>0){
        length--;
        current=current.next;
    }
    current.next=current.next.next;
    this.head=dummy.next;
}
print(){
    let curr=this.head;
    let result="";
    while(curr){
        result+=curr.val+"->";
        curr=curr.next;
    }
    console.log(result+"null");
}

}

const list = new LinkedList();
[1, 2, 3, 4, 5].forEach(val => list.addAtTail(val));

console.log("Before:");
list.print();

list.removeNthFromEnd(2);

console.log("After:");
list.print(); // 1 → 2 → 3 → 5 → null
