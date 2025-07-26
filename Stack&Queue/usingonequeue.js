//  Problem 57: Implement Stack using a Single Queue
// Use only one queue and simulate stack behavior (LIFO).

// 💡 Clever Idea:
// When we push, after adding the element to the queue, rotate the queue so the new element comes to the front — simulating the top of a stack.

class MyStack{
    constructor(){
        this.q=[];
    }

    push(x){
        this.q.push(x);

        let size=this.q.length;
        while(size>1){
            this.q.push(this.q.shift());
            size--;
        }
    }

    pop(){
        return this.q.shift();
    }

    top(){
        return this.q[0];

    }

    isEmpty(){
        return this.q.length===0;
    }
}


const stack = new MyStack();

stack.push(100);
stack.push(200);
stack.push(300);

console.log(stack.top());    // 300
console.log(stack.pop());    // 300
console.log(stack.top());    // 200
console.log(stack.isEmpty()); // false
console.log(stack.pop());    // 200
console.log(stack.pop());    // 100
console.log(stack.isEmpty()); // true
