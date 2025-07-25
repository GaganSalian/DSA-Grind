//  Problem 56: Implement a Stack using Two Queues
// You're allowed to use only basic queue operations: enqueue (push), dequeue (shift), peek (front), isEmpty.

// 🧠 Core Idea
// We’ll use two queues, q1 and q2, to simulate stack behavior (LIFO) using queue behavior (FIFO).

// ✅ Push Efficient (Costly Pop)
// Push: Just enqueue into q1.

// Pop: Move all but the last element from q1 to q2, dequeue the last one, then swap q1 and q2.

class MyStack{
    constructor(){
        this.q1=[];
        this.q2=[];
    }

    push(x){
        this.q1.push(x);
    }

    pop(){
        while(this.q1.length>1){
            this.q2.push(this.q1.shift());
        }
        const popped=this.q1.shift();

        [this.q1,this.q2]=[this.q2,this.q1];
        return popped;
    }

    top(){
        while(this.q1.length>1){
            this.q2.push(this.q1.shift());
        }
        const top=this.q1.shift();
        this.q2.push(top);

        [this.q1,this.q2]=[this.q2,this.q1];
        return top;
    }

    isEmpty(){
        return this.q1.length===0;
    }
}

const stack = new MyStack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.top());   // 30
console.log(stack.pop());   // 30
console.log(stack.top());   // 20
console.log(stack.pop());   // 20
console.log(stack.isEmpty()); // false
console.log(stack.pop());   // 10
console.log(stack.isEmpty()); // true
