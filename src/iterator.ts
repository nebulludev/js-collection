export interface Iterator<T> {
    /**
     * Returns if the iteration has more elements.
     * 
     * @returns {[boolean]} if the iteration has more elements.
    */
    has(): boolean;


    /**
     * Returns the next element in the iteration
     * 
     * @returns the next element in the iteration
     * @throws NoSuchElementException
    */
    next(): IteratorResult<T>;


    /**
     * Removes from from underlying collection the last element returned by this iterator.
     * 
     * @returns the next element in the iteration
     * @throws NoSuchElementException
    */
    remove(): void;
}