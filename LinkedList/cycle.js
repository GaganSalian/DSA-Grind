//  Problem 28: Detect Cycle in Linked List (Hash Table Approach)

function node(v){ return {v, next:null}; }

function add(head,v){
  let n = node(v);
  if(!head) return n;
  let cur = head;
  while(cur.next) cur = cur.next;
  cur.next = n;
  return head;
}

function cycle(head,pos){
  if(pos<0) return head;
  let cur=head, idx=0, mark=null;
  while(cur.next){
    if(idx===pos) mark=cur;
    cur = cur.next;
    idx++;
  }
  cur.next = mark;
  return head;
}

function hasCycle(head){
  let s = new Set(), cur=head;
  while(cur){
    if(s.has(cur)) return true;
    s.add(cur);
    cur = cur.next;
  }
  return false;
}

// TEST
let head = null;
[1,2,3,4,5].forEach(x => head = add(head,x));

console.log(hasCycle(head)); // false

head = cycle(head,2); // connect tail to index 2

console.log(hasCycle(head)); // true

// Cycle detected ✅
