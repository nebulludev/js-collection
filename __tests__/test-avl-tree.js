const { AvlTree, Node } = require("../lib/avl-tree");

const DATA_FIRST = 10;
const DATA_SECOND = 20;
const DATA_THIRD = 30;

const SMALL_NUM = 10;
const BIG_NUM = 10;
test("AvlTree test max(x, y)", () => {
    const tree = new AvlTree();
    const max = tree.max(SMALL_NUM, BIG_NUM);
    expect(max).toBe(BIG_NUM);
});

test("AvlTree test getBalance(node)", () => {
    let root = new Node(20);
    let left = new Node(10);
    let right = new Node(30);
    root.left = left;

    const tree = new AvlTree();
    let balance = tree.getBalance(null);
    expect(balance).toBe(0);

    balance = tree.getBalance(root);
    expect(balance).toBe(1);

    root.right = right;
    balance = tree.getBalance(root);
    expect(balance).toBe(0);
});
