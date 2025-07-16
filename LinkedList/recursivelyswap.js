// Swap Every Two Adjacent Nodes in a Linked List — Recursively
// 🧩 Problem 40:
// Given the head of a singly linked list, swap every two adjacent nodes using recursion, and return the head of the new list.

// 🔁 Recursive function to swap every two adjacent nodes
function swapPairsRecursive(head) {
  if (!head || !head.next) return head; // Base case

  const first = head;
  const second = head.next;

  // Recursively swap the rest
  const rest = swapPairsRecursive(second.next);

  // Swap current pair
  second.next = first;
  first.next = rest;

  return second; // New head after swap
}

// 🧰 Helper: Create linked list from array
function createList(arr) {
  if (arr.length === 0) return null;
  const head = { val: arr[0], next: null };
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = { val: arr[i], next: null };
    current = current.next;
  }
  return head;
}

// 🧰 Helper: Print linked list as string
function printList(head) {
  let current = head;
  let result = '';
  while (current) {
    result += current.val + ' → ';
    current = current.next;
  }
  console.log(result + 'null');
}

// 🧪 Test Cases

console.log("=== Test Case 1 ===");
let head1 = createList([1, 2, 3, 4]);
let result1 = swapPairsRecursive(head1);
printList(result1); // 2 → 1 → 4 → 3 → null

console.log("=== Test Case 2 ===");
let head2 = createList([1]);
let result2 = swapPairsRecursive(head2);
printList(result2); // 1 → null

console.log("=== Test Case 3 ===");
let head3 = createList([]);
let result3 = swapPairsRecursive(head3);
printList(result3); // null

console.log("=== Test Case 4 ===");
let head4 = createList([10, 20, 30]);
let result4 = swapPairsRecursive(head4);
printList(result4); // 20 → 10 → 30 → null
