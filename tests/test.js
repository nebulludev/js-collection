const { LinkedList } = require("../lib/linked_list");

const DATA = 7;

test("LinkedList add function", () => {
    var list = new LinkedList();
    list.add(DATA);

    first = list.getFirst();
    expect(first.data).toBe(DATA)
});