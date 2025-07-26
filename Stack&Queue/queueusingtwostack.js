// Problem 58 :Simulate a Queue using Two Stacks
// Build a First-In-First-Out (FIFO) queue using only two stacks (LIFO).


class MyQueue{
    constructor(){
        this.inStack=[];
        this.outStack=[];
    }


    enqueue(x){
        this.inStack.push(x);
    }

    dequeue(){
        this.shiftStack();
        return this.outStack.pop();
    }

    peek(){
        this.shiftStacks();
        return this.outStack[this.outStack.length-1];
    }

    isEmpty(){
        return this.inStack.length===0&&this.outStack.length===0;
    }
    shiftStacks(){
        if(this.outStack.length===0){
            while(this.inStack.length>0){
                this.outStack.push(this.inStack.pop())
            }
        }
    }
}

const q = new MyQueue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.peek());     // 1
console.log(q.dequeue());  // 1
console.log(q.peek());     // 2
console.log(q.dequeue());  // 2
console.log(q.isEmpty());  // false
console.log(q.dequeue());  // 3
console.log(q.isEmpty());  // true
