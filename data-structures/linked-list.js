class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
    }

    insert(index, value) {
        //Check for proper parameters;
        if (index >= this.length) {
            console.log('yes')
            return this.append(value);
        }

        const newNode = {
            value: value,
            next: null
        }
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            return 'invalid index value';
        }
        const leader = this.traverseToIndex(index - 1);
        let nodeForDelete = leader.next;
        let followingNode = nodeForDelete.next;
        leader.next = followingNode;

        this.length--;
        return this.printList();
    }

    reverseSlow() {
        let currentTail = this.tail;
        let currentIndex = this.length-2;

        while(currentIndex > -1) {
            let currentTail = this.traverseToIndex(currentIndex);
            this.append(currentTail.value);
            currentIndex--;
        }

        this.head = currentTail;
        return this.printList();
    }

    reverse() {
        if(!this.head.next) {
            return this.head;
        }

        let current = this.head;
        let prev = null;
        let next = current.next;

        while(next) {
            //pointers
            current.next = prev;
            next.next = current;

            //nodes
            current = next;
            prev = current;
            next = current;
            next = current.next;
        }
        return this.printList();
    }
}


let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
//myLinkedList.remove(1);
myLinkedList.reverse();