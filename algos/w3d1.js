// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // == Main Methods ==

    // push to head
    addHead(node){
        if(this.isEmpty()) {
          this.head = node;
          this.tail = node;
          this.length++;
        } else {
          this.head.prev = node;
          node.next = this.head;
          this.head = node;
          this.length++;
        }
    }

    // pop from tail
    removeTail() {
        if (this.head === null) { // No nodes
            return null;
        } else if (this.head === this.tail) { // One node
            var loneNode = this.head;
            // Both head and tail now point to null; no need to change .prev and .next since they're already null
            this.head = null;
            this.tail = null;
            this.length--;
            return loneNode;
        } else { // Two or more nodes
            var lastNode = this.tail;
            var prevNode = lastNode.prev;
            prevNode.next = null; // Point previous node's .next to null
            this.tail = prevNode; // Point tail to that node now
            lastNode.prev = null; // .prev for the last node now points to null (.next already does)
            this.length--;
            return lastNode;
        }
    }
    // target is a node data
    prepend(target, node){
        if (this.isEmpty()) {
        }
        var runner = this.head;
        while (runner) {
            if (runner.data == node.data) {
                prev = runner.prev;
                prev.next = node;
                node.prev = prev;
                node.next = runner; // point new node to matched node
                runner.prev = node; // point matched node previous to new node
                this.head++;
            }
        }
    }

    prepend2(target, node) {
        if (this.head !== null) { // Must have at least one node
            var curNode = this.head;
            if (curNode.data === target) { // Edge case: first node only
                node.next = curNode; // Connect nodes
                curNode.prev = node;
                this.head = node; // Move this.head to new node
                this.length++;
            } else {
                while (curNode.next !== null) {
            curNode = curNode.next; // Move to next node
                    if (curNode.data === target) {
                        // Link this new node to the others
                        node.next = curNode;
                        node.prev = curNode.prev;
                        // Link other nodes to this new node
                        curNode.prev.next = node;
                        curNode.prev = node;
                this.length++;
                        break; // Exit while loop - for now, assuming only before first instance of target
                    }
                }
            }
        }
    }

    // return is empty
    isEmpty(){
        return this.head == null;
    }

    // return length
    size(){
        return this.length;
    }


    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node){}

    // add after target if exists
    append(target, node){}

    // pop from head
    removeHead(){}
}

// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

var dll = new DLList();
console.log("isEmpty?", dll.isEmpty())
dll.addHead(new DLLNode(data=1))
dll.addHead(new DLLNode(data=2))
dll.addHead(new DLLNode(3))
dll.addHead(new DLLNode(4))
console.log(dll);

console.log("isEmpty?", dll.isEmpty())

dll.prepend2(new DLLNode(2))

console.log(dll)