// Problem37: Merge Two Sorted Linked Lists (No Class)
// ✅ Problem Statement:
// Given the heads of two sorted linked lists, merge them into a single sorted linked list and return the new head.


function createNode(val,next=null){
    return{val,next}
}

function mergeTwoList(l1,l2){
const dummy=createNode(0);
let current=dummy;

while(l1&&l2){
    if(l1.val<l2.val){
        current.next=l1;
        l1=l1.next;
    }else{
        current.next=l2;
       l2=l2.next;
    }
    current=current.next;
}
current.next=l1||l2;

return dummy.next;


}

function printList(head){
    let result='';
    let current=head;
    while(current){
        result+=current.val+'->';
        current=current.next;
    }
    console.log(result+'null');
}


// Create first list: 1 → 3 → 5
const l1 = createNode(1, createNode(3, createNode(5)));

// Create second list: 2 → 4 → 6
const l2 = createNode(2, createNode(4, createNode(6)));

const mergedHead = mergeTwoLists(l1, l2);

printList(mergedHead); // 1 → 2 → 3 → 4 → 5 → 6 → null
