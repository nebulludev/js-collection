import { Iterator } from "../iterator";
import { List } from "./list";

export class Node<T> {
    private _item!: T;
    private _prev!: Node<T>;
    private _next!: Node<T>;
    
    public set item(v : T) {
        this._item = v;
    }
    
    public set prev(v : Node<T>) {
        this._prev = v;
    }
    
    public set next(v : Node<T>) {
        this._next = v;
    }

    public get item() : T {
        return this._item;
    }
    
    public get prev() : Node<T> {
        return this._prev;
    }
    
    public get next() : Node<T> {
        return this._next;
    }
}

export class LinkedList<T> implements List<T> {

    #size!: number;

    #first!: Node<T>;

    #last!: Node<T>;

    constructor() {
        this.#size = 0;
    }

    sort(): void {
        throw new Error("Method not implemented.");
    }

    index(item: T): number {
        throw new Error("Method not implemented.");
    }

    lastIndex(item: T): number {
        throw new Error("Method not implemented.");
    }

    set(index: number, item: T): void {
        throw new Error("Method not implemented.");
    }

    add2(index: number, item: T): void {
        throw new Error("Method not implemented.");
    }

    add(item: T): void {
        this.addLast(item);
    }

    addFirst(item:T): void {
        let node = new Node<T>();
        node.item = item;

        if (this.#first === undefined) {
            this.#first = node;
            this.#last = node;
        }
        else {
            node.next = this.#first;
            this.#first = node;
        }

        this.#size++;
    }

    addLast(item:T): void { 
        var node = new Node<T>();
        node.item = item;

        if (this.#first === undefined) {
            this.#first = node;
            this.#last = node;
        }
        else {
            this.#last.next = node;
            this.#last = node;
        }

        this.#size++;
    }
    
    get(index: number): T {
        throw new Error("Method not implemented.");
    }

    getFirst(): Node<T> {
        if (this.#first === undefined) {
            throw new Error("No Such Element")
        }

        return this.#first;
    }

    getLast(): Node<T> {
        if (this.#last === undefined) {
            throw new Error("No Such Element")
        }
        
        return this.#last;
    };

    remove(item: T): void {
        throw new Error("Method not implemented.");
    }

    clear(): void {
        throw new Error("Method not implemented.");
    }

    contains(item: T): void {
        throw new Error("Method not implemented.");
    }

    size(): number { 
        return this.#size;
    }

    isEmpty(): boolean {
        if (this.#size) 
            return false;
        else
            return true;
    }

    iterator(): Iterator<T> {
        throw new Error("Method not implemented.");
    }    
}