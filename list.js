class LinkedList {

    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
        this.size = 0;
    }

    append = (elem) => {
        let node = new Node(elem);

        if (!this.tail) {
            this.head = this.tail = node;
            this.size++;
            return node;
        }

        this.tail.next = node;
        this.tail = node;

        this.size++;
        return node;
    }

    prepend = (elem) => {
        let node = new Node(elem);

        if (!this.head) {
            this.head = this.tail = node;
            this.size++;
            return node;
        }

        node.next = this.head;
        this.head = node;

        this.size++;
        return node;
    }

    insert = (elem, index) => {
        let previous = null;
        let current = this.head;
        let currentIndex = 0;

        if (index <= 0 || !index) {
            return this.prepend(elem);
        }

        if(index >= this.size) {
            return this.append(elem);
        }

        let node = new Node(elem);
        while(current && currentIndex !== index) {
            previous = current;
            current = current.next;
            currentIndex++;
        }

        previous.next = node;
        node.next = current;

        this.size++;
        return node;
    }

    removeFirst = () => {
        if (!this.head) {
            return null;
        }

        let nodeToRemove = this.head;
        this.head = nodeToRemove.next;
        nodeToRemove.next = null;

        if (nodeToRemove === this.tail) {
            this.tail = null;
        }
        return nodeToRemove;
    }

    remove = (index) => {
        if (index < 0 || index >= this.size) {
            return null;
        }

        if (index === 0) {
            return this.removeFirst();
        }

        let current = this.head;
        let previous = null;
        let currentIndex = 0;

        while (current && currentIndex !== index) {
            previous = current;
            current = current.next;
            currentIndex++;
        }

        previous.next = current.next;
        current.next = null;
        return current;
    }

    find = (elem) => {
        if (!elem) {
            return null;
        }

        if (elem === this.head) {
            return null;
        }

        let current = this.head;

        while (current) {
            if (current.next === elem) {
                break;
            }
            current = current.next;
        }
        return current;
    }

    toArray = () => {
        let array = [];
        let current = this.head;
        let last = this.tail;

        while (current !== last) {
            array.push(current);
            current = current.next;
        }
        array.push(last);
        return array;
    }
    
    size = () => {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    clear = () => {
        this.head = null;
    }

    getSize = () => {
        return this.size;
    } 

    getLast = () => {
        return this.tail;
    }

    getFirst = () => {
        return this.head;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

module.exports = { LinkedList };