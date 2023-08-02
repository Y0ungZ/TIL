class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.print = [];
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  postorder(tree) {
    if (tree === null) {
      return;
    }

    this.postorder(tree.left);
    this.postorder(tree.right);
    this.print.push(tree.value);
  }
}

const main = (() => {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const binarySearchTree = new BinarySearchTree(+input[0].trim());

  for (let i = 1; i < input.length; i++) {
    binarySearchTree.insert(+input[i].trim());
  }

  binarySearchTree.postorder(binarySearchTree);
  console.log(binarySearchTree.print.join("\n"));
})();
