// Problem 31:Given two singly linked lists, determine if they intersect, and return the intersection node.

// Two linked lists intersect if they share a common reference node (not just value, but same memory node).


class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

function getIntersectionNode(headA,headB){
    if(!headA || !headB) return null;

    let a=headA;
    let b=headB;

    while (a!==b){
        a=a?a.next:headB;
        b=b?b.next:headA;
    }
    return a;
}

const common=new Node(8);
common.next=new Node(9);

const headA=new Node(1);
headA.next=new Node(2);
headA.next.next=common;

const headB=new Node(3);
headB.next=new Node(4);
headB.next.next=common;

const intersection=getIntersectionNode(headA,headB);
console.log(intersection?intersection.val:"No intersection")
// Output: 8