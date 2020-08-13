class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// first in, last out

// **Adrian could you type out your suggestsion... breaking off a bit**
class slStack {
    constructor() {
        this.head = null;
    }

    // using only one extra stack for storage, check if this stack is sorted
    // return the stack back to it's original order when you are done
    // assume node.data are integers
    isSorted() {
        // Edge cases: no nodes, 1 node
        if (this.head == null) {
            return true // consider empty as sorted
        }
        else if (this.head.next == null) {
            return true // consider single node as sorted
        }
        // Two or more cases: while loop to emp
        else {
            let storage = new slStack();
                var order = "none";
            while (!this.isEmpty()) {
                let currentNode = this.head;


                if (currentNode.next == null) { // reached end of stack without returning false
                    while (!storage.isEmpty()) { // restore original stack... maybe we can use helper to restore to make it cleaner
                        this.push(storage.pop());
                    }
                    // retain order back into original stack
                    return true
                } else if (currentNode.next.data == currentNode.data) { // continue while loop
                    storage.push(this.pop())
                } else if (currentNode.next.data > currentNode.data && (order == "none" || order == "ascending")) {
                    order = "ascending"
                    storage.push(this.pop())
                } else if (currentNode.next.data < currentNode.data && (order == "none" || order == "descending")) {
                    order = "descending";
                    storage.push(this.pop())
                } else { // return false
                    while (!storage.isEmpty()) { // restore original stack
                        this.push(storage.pop());
                    }
                    return false;
                }
            }
        }
        // current stack into new stack
        // While looping, comparing values - set a boolean variable to true before looping,
        // then set to false if we reach a pair not sorted (e.g. 1, 3, 2)
        // REMEMBER TO PUT THE VALUES BACK INTO THEIR ORIGINAL ORDER!

        // Assume ascending order, descending order or both? }

        // add to top (add new head)
    }
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

// first in, first out
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    // reverse a queue using only one stack as additional storage
    reverseQueue() { }

    isPalindrome() {
        var isPalindrome = true;
        var stack = new Stack();
        var len = this.length(); // we need a fixed length because we will push
        // back into the same queue.

        for (var i = 0; i < len; i++) {
            var node = this.dequeue();
            stack.push(new Node(node.data));
            this.enqueue(node);
        }

        for (var i = 0; i < len; i++) {
            var dequeued = this.dequeue();
            var popped = stack.pop();

            if (popped.data !== dequeued.data) {
                isPalindrome = false;
            }

            // circular queue
            this.enqueue(dequeued);
        }
        return isPalindrome;
    }

    length() {
        var tempQueue = new Queue();
        var count = 0;

        while (!this.isEmpty()) {
            var tempNode = this.dequeue();
            count++;
            tempQueue.enqueue(tempNode);
        }

        while (!tempQueue.isEmpty()) {
            this.enqueue(tempQueue.dequeue());
        }

        return count;
    }

    enqueue(node) {
        if (this.rear === null) {
            this.rear = node;
            this.front = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
    }

    dequeue() {
        if (this.front === null) {
            return null;
        };
        if (this.front === this.rear) {
            this.rear = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        return node;
    }

    checkFront() {
        //     if this is truthy, do the first one, else do the second
        return this.front ? this.front.data : null;
    }

    isEmpty() {
        return this.front === null;
    }
}

function countStack(stack) {
    let newStack = new slStack();
    let count = 0;

    while (!stack.isEmpty()) {
        let node = stack.pop();
        newStack.push(node);
        count++;
    }

    while (!newStack.isEmpty()) {
        stack.push(newStack.pop());
    }

    return count;
};

function readQueue(queue) {
    var tempQueue = new Queue();

    while (!queue.isEmpty()) {
        var tempNode = queue.dequeue();
        console.log(tempNode.data);
        tempQueue.enqueue(tempNode);
    }

    while (!tempQueue.isEmpty()) {
        queue.enqueue(tempQueue.dequeue());
    }

    return queue;
};

var myFirstSLL = new slStack();
var myFirstNode = new Node(1);
myFirstSLL.head = myFirstNode;

myFirstSLL.push(new Node(2));
myFirstSLL.push(new Node(3));
myFirstSLL.push(new Node(4));
myFirstSLL.push(new Node(5));

console.log(myFirstSLL);

console.log(myFirstSLL.isSorted())

