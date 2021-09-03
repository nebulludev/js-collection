'use strict';

class Iterator {
    constructor(item) {
        this.item = item
    }

    /**
     * Returns if the iteration has more elements.
     * 
     * @returns {[boolean]} if the iteration has more elements.
    */
    has() {}


    /**
     * Returns the next element in the iteration
     * 
     * @returns the next element in the iteration
     * @throws NoSuchElementException
    */
    next() {}


    /**
     * Removes from from underlying collection the last element returned by this iterator.
     * 
     * @returns the next element in the iteration
     * @throws NoSuchElementException
    */
    remove() {}
}

module.exports = {Iterator: Iterator};