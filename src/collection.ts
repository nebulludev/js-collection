import { Iterator } from "./iterator";

export interface Collection<T> {
    
    add(item: T): void;

    remove(item: T): void;

    clear(): void;

    contains(item: T): boolean;
    
    /**
     * Returns the number of elements in this collection. 
     * If this collection contains more than INTEGER_MAX_VALUE elements, returns MAX_VALUE
     * 
     * @returns the number of elements in this collection
     */
    size() : number;


    /**
     * Returns true if this collection contains no elements
     * 
     * @returns {[boolean]} true if this collection contains no elements
     */
    isEmpty() : boolean;


    /**
     * Returns an Iterator over the elements in this collection. 
     * There are no guarantees concerning the order in which the elements are returned.
     * 
     * @returns {[Iterator]} over the elements in this collection
     */
    iterator(): Iterator<T>;
}