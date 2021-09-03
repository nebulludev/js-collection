const { Collection } = require('./collection');
const { NoSuchElementError } = require('./errors');

class Node {
    data = undefined;
    prev = undefined;
    next = undefined;
}

class LinkedList extends Collection {
    #first = undefined;
    #last = undefined;

    constructor() {
        super()
    }

    add(element) {
        this.addLast(element);
    }

    /**
     * Appends element to the beginning of the node
     * 
     * @param {[object]} element
     */
    addFirst(element) {
        var node = new Node();
        node.data = element;
        node.prev = undefined;

        if (this.#first == undefined)
            this.#first = node;
        else
            node.next = this.#first;
            this.#first = node;
    }

    /**
     * Appends element to the end of the node
     * 
     * @param {[object]} element
     */
    addLast(element) {
        var node = new Node();
        node.data = element;
        node.next = undefined;

        if (this.#first == undefined) {
            this.#first = node;        
            this.#last  = node;
        }
        else {
            this.#last.next = node;
            this.#last = node;
        }
    }

    getFirst() {
        if (this.#first === undefined)
            throw new NoSuchElementError("no such element")

        return this.#first;
    }

    getLast() {
        if (this.#last === undefined)
            throw new NoSuchElementError("no such element")

        return this.#last;
    }

    removeFirst() {

    }

    removeLast() {
        
    }

    print(){
        var cursor = this.#first;
        while(cursor != undefined)
        {
            console.log(cursor.data  + "\t next : " + (typeof cursor.next === "undefined" ? false  : true ));
            cursor = cursor.next;
        }
    }
}

module.exports = {LinkedList : LinkedList}