// Problem 39: Swap Every Two Adjacent Nodes (Iteratively)
// 📄 Description:
// Given the head of a linked list, swap every two adjacent nodes without changing their values — just update the .next pointers.


// 🔁 Main Function: Swaps every two adjacent nodes in a linked list
function swapPairs(head) {
  const dummy = { val: 0, next: head };
  let prev = dummy;

  while (head && head.next) {
    const first = head;
    const second = head.next;

    // Swap pointers
    prev.next = second;
    first.next = second.next;
    second.next = first;

    // Move pointers forward
    prev = first;
    head = first.next;
  }

  return dummy.next;
}

// 🧰 Helper: Create a linked list from array
function createList(arr) {
  if (!arr.length) return null;
  const head = { val: arr[0], next: null };
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = { val: arr[i], next: null };
    current = current.next;
  }
  return head;
}

// 🧰 Helper: Print a linked list
function printList(head) {
  let result = '';
  while (head) {
    result += head.val + ' → ';
    head = head.next;
  }
  console.log(result + 'null');
}

// 🧪 Test Cases

console.log("=== Test Case 1 ===");
let head1 = createList([1, 2, 3, 4]);
let swapped1 = swapPairs(head1);
printList(swapped1); // Expected: 2 → 1 → 4 → 3 → null

console.log("=== Test Case 2 ===");
let head2 = createList([1]);
let swapped2 = swapPairs(head2);
printList(swapped2); // Expected: 1 → null

console.log("=== Test Case 3 ===");
let head3 = createList([]);
let swapped3 = swapPairs(head3);
printList(swapped3); // Expected: null

console.log("=== Test Case 4 ===");
let head4 = createList([1, 2, 3]);
let swapped4 = swapPairs(head4);
printList(swapped4); // Expected: 2 → 1 → 3 → null
