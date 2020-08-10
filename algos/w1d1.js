class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    addNodeToFront(node) {
        if (this.head === null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    addDataToFront(data) {
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            let newHead = new Node(data);
            newHead.next = this.head;
            this.head = newHead;
        }
    }

    printReverse(current) {
        if (current === undefined) current = this.head;
        if (current !== null) {
            this.printReverse(current.next)
            console.log(current.data)
        }
    }
}

// if yous finish addToFront early, create a second version
// that takes data rather than a node. -brendan

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


var myFirstSLL = new SLL();
var myFirstNode = new Node(7);
myFirstSLL.head = myFirstNode;
myFirstSLL.addNodeToFront(new Node(10));
myFirstSLL.addNodeToFront(new Node(13));
myFirstSLL.addNodeToFront(new Node(16));
myFirstSLL.addNodeToFront(new Node(21));
console.log(myFirstSLL);

// myFirstSLL.printReverse()
myFirstSLL.printReverse();
