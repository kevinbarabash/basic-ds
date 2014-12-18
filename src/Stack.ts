class Stack<T> {
    items: T[];

    // delegate methods
    poppedLastItem: (item: T) => void;

    constructor() {
        this.items = [];
        this.poppedLastItem = function (item: T) {};
    }

    push(item: T) {
        this.items.push(item);
    }

    pop() {
        var item = this.items.pop();
        if (this.isEmpty) {
            this.poppedLastItem(item);
        }
        return item;
    }

    peek() {
        return this.items[this.items.length - 1];
    }
    
    toArray() {
        return this.items.map(item => item);
    }

    get size() {
        return this.items.length;
    }

    get isEmpty() {
        return this.items.length === 0;
    }
}

export = Stack;
