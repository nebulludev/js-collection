const { Iterator }  = require('./iterator');

class Collection {
    #size = 0

    /**
     * Returns the number of elements in this collection. 
     * If this collection contains more than INTEGER_MAX_VALUE elements, returns MAX_VALUE
     * 
     * @returns the number of elements in this collection
     */
    size() {
        return this.#size;
    }


    /**
     * Returns true if this collection contains no elements
     * 
     * @returns {[boolean]} true if this collection contains no elements
     */
    isEmpty() {
        if (this.#size) 
            return true;
        else
            return false;
    }


    /**
     * Returns an Iterator over the elements in this collection. 
     * There are no guarantees concerning the order in which the elements are returned.
     * 
     * @returns {[Iterator]} over the elements in this collection
     */
    iterator() {}

    /**
     */
    add(item) {}

    remove(item) {}
}

module.exports = { Collection : Collection }