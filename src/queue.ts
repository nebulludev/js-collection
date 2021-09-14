import { Collection } from "./collection";
import { Iterator } from "./iterator";

export class Queue<T> implements Collection<T> {
    #elements: any[] = [];
    
    add(item: T): void {
        throw new Error("Method not implemented.");
    }

    remove(item: T): void {
        throw new Error("Method not implemented.");
    }

    get(index: number): T {
        return this.#elements[index];
    }

    clear(): void {
        while(this.#elements.length) {
            this.#elements.pop();
        }
    }

    contains(item: T): boolean {
        if(this.#elements.indexOf(item) < 0) {
            return false;
        }

        return true;
    }

    size(): number {
        return this.#elements.length;
    }

    isEmpty(): boolean {
        if (this.#elements.length) 
            return false;
        else
            return true;
    }

    iterator(): Iterator<T> {
        throw new Error("Method not implemented.");
    }
}
