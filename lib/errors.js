class NoSuchElementError extends Error {
    constructor(args){
        super(args);
        this.name = "NoSuchElementError"
    }
}

module.exports = { NoSuchElementError : NoSuchElementError}