const { LinkedList } = require("../lib/list/linked-list");

const ZERO_SIZE = 0;
const ONE_SIZE = 1;

const DATA_FIRST = 2;
const DATA_SECOND = 3;

test("LinkedList test addFirst()", () => {
    const list = new LinkedList();
    list.addFirst(DATA_FIRST);
    list.addFirst(DATA_SECOND);
    let cur = list.getFirst();
    expect(cur.item).toBe(DATA_SECOND);
});

test("LinkedList test addLast()", () => {
    const list = new LinkedList();
    list.addLast(DATA_FIRST);
    list.addLast(DATA_SECOND);
    let cur = list.getLast();
    expect(cur.item).toBe(DATA_SECOND);
});

test("LinkedList test getFirst()", () => {
    const list = new LinkedList();
    list.add(DATA_FIRST);
    list.add(DATA_SECOND);
    let cur = list.getFirst();
    expect(cur.item).toBe(DATA_FIRST);
});

test("LinkedList test getLast()", () => {
    const list = new LinkedList();
    list.add(DATA_FIRST);
    list.add(DATA_SECOND);
    let cur = list.getLast();
    expect(cur.item).toBe(DATA_SECOND);
});

test("LinkedList test size()", () => {
    const list = new LinkedList();
    expect(list.size()).toBe(ZERO_SIZE);
    list.add(DATA_FIRST);
    expect(list.size()).toBe(ONE_SIZE);
});

test("LinkedList test isEmpty()", () => {
    const list = new LinkedList();
    expect(list.isEmpty()).toBe(true);
    list.add(DATA_FIRST);
    expect(list.isEmpty()).toBe(false);
});