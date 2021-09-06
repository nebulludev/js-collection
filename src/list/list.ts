import { Collection } from "../collection";

export interface List<T> extends Collection<T> {
    sort(): void;
    
    index(item: T): number;

    lastIndex(item: T): number;   

    add2(index: number, item: T): void;

    set(index: number, item: T): void;
    
    get(index: number): T;
}