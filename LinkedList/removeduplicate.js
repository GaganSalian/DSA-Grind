//  Remove Duplicates from Sorted Linked List
// ✅ Problem 34 Statement:
// Given the head of a sorted linked list, remove all duplicates so that each element appears only once. Return the linked list after removing duplicates.


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
    removeDuplicates(){
        let current=this.head;

        while(current&&current.next){
            if(current.val===current.next.val){
                current.next=current.next.next;
            }
            else{
                current=current.next;
            }
        }
    }
    print(){
        let curr=this.head;
        let result="";
        while(curr){
            result += curr.val+"->";
            curr=curr.next;
        }
        console.log(result+"null")
    }
}

const list = new LinkedList();
[1, 1, 2, 3, 3].forEach(val => list.addAtTail(val));

console.log("Before:");
list.print(); // 1 → 1 → 2 → 3 → 3 → null

list.removeDuplicates();

console.log("After:");
list.print(); // 1 → 2 → 3 → null
