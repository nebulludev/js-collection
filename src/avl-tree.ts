
export class Node {
    key!: number;
    height!: number;
    data!: object;
    left!: Node;
    right!: Node;

    constructor(key: number) {
        this.key = key;
        this.height = 1;
    }
};

export class AvlTree {
    root!: Node;
    isDebug: boolean = false;

    height(node: Node) : number {
        if (node == null || node == undefined)
            return 0;
        return node.height;
    }

    max(x: number, y: number) : number {
        return (x > y) ? x : y;
    }

    leftRotate(n: Node): Node {
        let y = n.right;
        let T2 = y.left;

        y.left = n;
        n.right = T2;

        // update heights
        n.height = this.max(this.height(n.left), this.height(n.right)) + 1;
        y.height = this.max(this.height(y.left), this.height(y.right)) + 1;

        return y;
    }

    rightRotate(n: Node): Node {      
        let x = n.left;
        let T2 = x.right;

        x.right = n;
        n.left = T2;

        // update heights
        x.height = this.max(this.height(x.left), this.height(x.right)) + 1;
        n.height = this.max(this.height(n.left), this.height(n.right)) + 1;

        return x;
    }

    getBalance(node: Node): number {
        if (node == null ||  node == undefined) {
            return 0;
        }

        return this.height(node.left) - this.height(node.right);
    }

    insert(node: Node, key: number) : Node {
        if (node == null || node == undefined) {
            let n = new Node(key);
            return n;
        }

        if (key < node.key) {
            node.left = this.insert(node.left, key);
        } else if (key > node.key) {
            node.right = this.insert(node.right, key);
        } else {
            return node;
        }

        node.height = 1 + this.max(this.height(node.left), this.height(node.right));

        let balance = this.getBalance(node);
        
        // Left Left Case
        if (balance > 1 && key < node.left.key) {
            return this.rightRotate(node);
        }

        // Right Right Case
        if (balance < -1 && key > node.right.key) {
            return this.leftRotate(node);
        }

        // Left Right Case
        if (balance > 1 && key > node.left.key) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }
            
        // Right Right Case
        if (balance < -1 && key < node.right.key) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }
        
        return node;
    }

    print(root: Node): void {
        if (root != null && root != undefined) {
            
            if (root.left == undefined &&  root.right == undefined) {
                return;
            }

            console.log(root.key);
            console.log(" ├─>L: " + (root.left == undefined ? "-" : root.left.key));
            console.log(" └─>R: " + (root.right == undefined ? "-" : root.right.key));
            // console.log("%d ┘└ %d" , (root.left == undefined ? " " : root.left.key), (root.right == undefined ? "-" : root.right.key));

            this.print(root.left);
            this.print(root.right);
        }
    }
}