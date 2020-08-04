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

    printReverse() {
        if (this.head === null) {
            return null
        } else {
            this.next.printReverse()
            console.log(this.data)
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
myFirstSLL.addNodeToFront(new Node(9));


if(myFirstSLL.head){

}
// { head: {data: 7, next: {data: 8, next null}} }
var myFirstNode = new Node(7);

myFirstSLL.head = myFirstNode;
myFirstSLL.head.next = new Node(8);
myFirstSLL.addDataToFront(10)

myFirstSLL.printReverse()

