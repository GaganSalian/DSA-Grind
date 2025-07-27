// ✅ Problem60: Design a Stack that supports retrieving the minimum in O(1)

// Implement the following operations:
// push(x)

// pop()

// top()

// getMin() → returns the minimum element in O(1)
// Approach: Use an Extra Stack to Track Minimums
// We’ll maintain two stacks:

// mainStack → normal stack operations

// minStack → always keeps the current minimum at the top

// ⏱️ Time & Space Complexity:
// Operation	Time	Space
// push	O(1)	O(n)
// pop	O(1)	O(1)
// top	O(1)	O(1)
// getMin	O(1)	O(1)

class MinStack{
    constructor(){
        this.stack=[];
        this.minStack=[];
    }
    push(x){
        this.stack.push(x);
            if(this.minStack.length===0||x<=this.minStack[this.minStack.length-1]){
                this.minStack.push(x)
            }
        }

        pop(){
            const popped=this.stack.pop();
            if(popped===this.minStack[this.minStack.length-1]){
                this.minStack.pop();
            }
        }

        top(){
            return this.stack[this.stack.length-1]
        }
        getMin(){
            return this.minStack[this.minStack.length-1]
        }
    }

    const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);

console.log(minStack.getMin()); // -3

minStack.pop();

console.log(minStack.top());    // 0
console.log(minStack.getMin()); // -2


