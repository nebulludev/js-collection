
class HashTable {
    constructor() {
        var s = "";
        cons
    }

    hashString(key: string) : number{
        let hashval = 0;
        for(let i = 0; i < key.length; i++) {
            hashval = 31 * hashval + key.charCodeAt(i);
        }

        return hashval;
    }
}
