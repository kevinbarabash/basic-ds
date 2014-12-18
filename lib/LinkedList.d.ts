import ListNode = require("./ListNode");
declare class LinkedList<T> {
    first: ListNode<T>;
    last: ListNode<T>;
    constructor();
    push_back(value: T): void;
    push_front(value: T): void;
    pop_back(): T;
    pop_front(): T;
    clear(): void;
    insertBeforeNode(refNode: ListNode<T>, value: T): void;
    forEachNode(callback: (node: ListNode<T>, index: number) => void, _this?: any): void;
    forEach(callback: (value: T, index: number) => void, _this?: any): void;
    nodeAtIndex(index: number): ListNode<T>;
    valueAtIndex(index: number): T;
    toArray(): T[];
    static fromArray<U>(array: U[]): LinkedList<U>;
}
export = LinkedList;