// Rotate a Linked List to the Right by k Places
// 🧩 Problem 38 Statement:
// Given the head of a singly linked list, rotate the list to the right by k places.

// Node structure is a plain object: { val: number, next: Node | null }

// Helper: Create a linked list from an array
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

// Helper: Convert linked list to string to print
function printList(head) {
  let current = head;
  let result = '';
  while (current) {
    result += current.val + ' → ';
    current = current.next;
  }
  console.log(result + 'null');
}

// ✅ Main Function: Rotate List to the Right by k places
function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;

  // Step 1: Get length and tail
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // Step 2: Normalize k
  k = k % length;
  if (k === 0) return head;

  // Step 3: Find new tail and new head
  let newTail = head;
  for (let i = 0; i < length - k - 1; i++) {
    newTail = newTail.next;
  }
  const newHead = newTail.next;

  // Step 4: Rotate
  newTail.next = null;
  tail.next = head;

  return newHead;
}


console.log("=== Test Case 1 ===");
let head1 = createList([1, 2, 3, 4, 5]);
printList(rotateRight(head1, 2)); // 4 → 5 → 1 → 2 → 3 → null

console.log("=== Test Case 2 ===");
let head2 = createList([0, 1, 2]);
printList(rotateRight(head2, 4)); // 2 → 0 → 1 → null

console.log("=== Test Case 3 ===");
let head3 = createList([1]);
printList(rotateRight(head3, 3)); // 1 → null (no change)

console.log("=== Test Case 4 ===");
let head4 = createList([]);
printList(rotateRight(head4, 1)); // null (empty list)
