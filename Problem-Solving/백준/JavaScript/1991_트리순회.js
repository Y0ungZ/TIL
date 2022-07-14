const main = (function () {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const N = +input[0].trim();
  const binaryTree = {};

  for (let i = 0; i < N; i++) {
    const [parent, leftChild, rightChild] = input[1 + i].trim().split(" ");
    binaryTree[parent] = [leftChild, rightChild];
  }

  const answer = [];

  const order = (currentNode, result, type) => {
    const [leftChild, rightChild] = binaryTree[currentNode];

    if (type === "PRE") {
      result.push(currentNode);
    }

    if (leftChild !== ".") {
      order(leftChild, result, type);
    }

    if (type === "IN") {
      result.push(currentNode);
    }

    if (rightChild !== ".") {
      order(rightChild, result, type);
    }

    if (type === "POST") {
      result.push(currentNode);
    }

    return result.join("");
  };

  answer.push(order("A", [], "PRE"));
  answer.push(order("A", [], "IN"));
  answer.push(order("A", [], "POST"));

  console.log(answer.join("\n"));
})();
