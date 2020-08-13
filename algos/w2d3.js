class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class slStack {
    constructor() {
        this.head = null;
    }

    // add to top (add new head)
    push(newNode) {
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // remove from top, (remove head)
    pop() {
        if (this.head === null) {
            return null;
        }

        const removed = this.head;
        this.head = this.head.next;
        removed.next = null;

        return removed;
    }

    // aka top
    peek() {
        return this.head ? this.head.data : null;
    }

    // check if empty
    isEmpty() {
        return this.head === null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    // queue: isPalindrome
    // return true or false if the queue is a palindrome: a string that is equal to itself when reversed

    // queue = (1)->(2)->(3)->(2)->(1)->
    // return true

    // queue = (1)->(3)->(4)->(40)->
    // return false

    // you may not linearly iterate through your queue
    // return the queue back to it's original order

    isPalindrome() {
        if (this.front == null) { // No nodes
            return false; // This is debatable
        } else if (this.front == this.rear) { // One node
            return true;
        } else { // Two or more nodes
            var hold = "";

            var runner = this.front;
            while(runner) {
                hold = runner.data.toString() + hold
            }

            console.log(hold);
        }

    }

    // try building a compare queue helper
    // return true / false if given queue is equal to this queue
    isEqual(queue){}

    enqueue(node){
        if(this.rear === null){
            this.rear = node;
            this.front = node;
        }else{
            this.rear.next = node;
            this.rear = node;
        }
    }

    dequeue(){
        if(this.front === null){
            return null;
        };
        if(this.front === this.rear){
            this.rear = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        return node;
    }

    checkFront(){
        //     if this is truthy, do the first one, else do the second
        return this.front ? this.front.data : null;
    }

    isEmpty(){
        return this.front === null;
    }
}
//     queue    stackA   stackB
//    >A, B>    |>       |>
//    >>        |B, A>   |>           // transfer queue contents to stackA
//    >B, A>    |>       |A, B>       // transfer stackA contents to stackB and queue
//    >>        |A, B>   |A, B>       // transfer queue contents to stackA again
//    >A, B>    |>       |A, B>       // transfer stackA contents to queue only
//    >>        |B, A>   |A, B>       // transfer queue contents to stackA

function queueIsPalindrome(queue) {
    let stackA = new slStack();
    let stackB = new slStack();

    // transfer queue contents to stackA
    while (!queue.isEmpty()) {
        let data = queue.checkFront();
        queue.dequeue();
        stackA.push(new Node(data));
    }

    // transfer stackA contents to stackB and queue
    while (!stackA.isEmpty()) {
        let data = stackA.peek();
        queue.enqueue(new Node(data));
        stackB.push(new Node(data));
        stackA.pop();
    }

    // transfer queue contents to stack A again
    while (!queue.isEmpty()) {
        let data = queue.checkFront();
        queue.dequeue();
        stackA.push(new Node(data));
    }

    // transfer stackA contents to queue
    while (!stackA.isEmpty()) {
        let data = stackA.peek();
        queue.enqueue(new Node(data));
        stackA.pop();
    }
}

function countStack(stack){
    let newStack = new slStack();
    let count = 0;

    while(!stack.isEmpty()){
        let node = stack.pop();
        newStack.push(node);
        count++;
    }

    while(!newStack.isEmpty()){
        stack.push(newStack.pop());
    }

    return count;
};

function readQueue(queue){
    var tempQueue = new Queue();

    while(!queue.isEmpty()){
        var tempNode = queue.dequeue();
        console.log(tempNode.data);
        tempQueue.enqueue(tempNode);
    }

    while(!tempQueue.isEmpty()){
        queue.enqueue(tempQueue.dequeue());
    }

    return queue;
};



