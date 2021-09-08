const { Stack } = require("../lib/list/stack");

const ZERO_SIZE = 0;
const ONE_SIZE = 1;

const DATA_FIRST = 11;
const DATA_SECOND = 22;
const DATA_THIRD = 33;

test("Stack test push()", () => {
    const stack = new Stack();
    stack.push(DATA_FIRST);
    stack.push(DATA_SECOND);
    stack.push(DATA_THIRD);
    
    expect(stack.get(0)).toBe(DATA_FIRST);
    expect(stack.get(1)).toBe(DATA_SECOND);
    expect(stack.get(2)).toBe(DATA_THIRD);
});

test("Stack test peek()", () => {
    const stack = new Stack();
    stack.push(DATA_FIRST);
    stack.push(DATA_SECOND);
    stack.push(DATA_THIRD);

    expect(stack.peek()).toBe(DATA_THIRD);
    expect(stack.size()).toBe(3);
});

test("Stack test pop()", () => {
    const stack = new Stack();
    stack.push(DATA_FIRST);
    stack.push(DATA_SECOND);
    stack.push(DATA_THIRD);

    expect(stack.pop()).toBe(DATA_THIRD);
    expect(stack.peek()).toBe(DATA_SECOND);
    expect(stack.size()).toBe(2);
});

test("Stack test size()", () => {
    const stack = new Stack();
    expect(stack.size()).toBe(ZERO_SIZE);
    stack.push(DATA_FIRST);
    expect(stack.size()).toBe(ONE_SIZE);
});

test("LinkedList test isEmpty()", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    stack.push(DATA_FIRST);
    expect(stack.isEmpty()).toBe(false);
});

test("LinkedList test clear()", () => {
    const stack = new Stack();
    stack.push(DATA_FIRST)
    stack.push(DATA_SECOND);
    stack.push(DATA_THIRD);
    stack.clear();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
});