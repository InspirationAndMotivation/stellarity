class Stack {

    constructor(max_size) {
        this.size = 0;
        this.top = null;
        if (max_size === undefined) {
            this.max_size = 10;
        }

        if (max_size !== undefined) {
            this.max_size = max_size;
        }

        if (max_size !== undefined && (!Number.isInteger(max_size) || max_size <= 0)) {
            throw new Error('Invalid size parameter!');
        }
    }

    push = (elem) => {

        if ((this.size + 1) > this.max_size) {
            throw new Error('Stack is full!');
        }

        let node = new Node(elem);
        node.previous = this.top;
        this.top = node;
        this.size += 1;
        return this.top;
    }

    pop = () => {

        if (this.size <= 0) {
            throw new Error('Stack is empty!');
        }

        let temp = this.top;
        this.top = this.top.previous;
        this.size -= 1;
        return temp;
    }

    peek = () => {
        if (this.size <= 0) {
            return null;
        }

        return this.top;
    }

    isEmpty = () => {
        return (this.size == 0);
    }

    toArray = () => {
        let array = [],
            length = this.size;
        for (let i = 0; i < length; i++) {
            array[i] = this.top;
            this.top = this.top.previous;
            this.size -= 1;
        }
        return array;
    }

    static fromIterable = (iterable) => {

        if (iterable.length > this.size || iterable == null || typeof iterable[Symbol.iterator] !== 'function') {
            throw new Error('Problems with iterable object!');
        }

        let stack = new Stack();

        for (let v in iterable) {
            stack.push(v);
        }
        return stack;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.previous = null;
    }
}

module.exports = { Stack };