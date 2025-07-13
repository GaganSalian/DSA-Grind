// Problem 30: Check if Linked List is a Palindrome

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

reverseList(head){
    let prev=null;
    let current=head;
    while(current){
        let next=current.next;
        current.next =prev;
        prev=current;
        current=next;
    }
    return prev;
}

isPalindrome(){
    if(!this.head||!this.head.next)return true;


    let slow=this.head;
    let fast=this.head;

    while(fast&&fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    let secoundHalf=this.reverseList(slow);
    let copySecond=secoundHalf;

    let firstHalf=this.head;
    while(secoundHalf){
        if(firstHalf.val!==secoundHalf.val)return false;
        firstHalf=firstHalf.next;
        secoundHalf=secoundHalf.next;
    }
      this.reverseList(copySecond);
    return true
}

print(){
    let current =this.head;
    let result="";
    while(current){
        result+=current.val+"->";
        current=current.next;
    }
    console.log(result+"null")
}}

const list = new LinkedList();

list.addAtTail(1);
list.addAtTail(2);
list.addAtTail(2);
list.addAtTail(1);

list.print();                    // 1 → 2 → 2 → 1 → null
console.log(list.isPalindrome()); // true ✅
