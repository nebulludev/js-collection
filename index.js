const { AvlTree } = require('./lib/avl-tree');


let tree = new AvlTree();
tree.isDebug = true;
tree.root = tree.insert(tree.root, 10);
tree.root = tree.insert(tree.root, 20);
tree.root = tree.insert(tree.root, 30);
tree.root = tree.insert(tree.root, 40);
tree.root = tree.insert(tree.root, 50);
tree.root = tree.insert(tree.root, 25);
tree.root = tree.insert(tree.root, 26);




tree.print(tree.root)
// exports.Iterator = Iterator;