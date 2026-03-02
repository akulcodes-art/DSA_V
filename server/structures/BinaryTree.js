class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let queue = [this.root];

    while (queue.length) {
      let node = queue.shift();

      if (!node.left) {
        node.left = newNode;
        return;
      } else queue.push(node.left);

      if (!node.right) {
        node.right = newNode;
        return;
      } else queue.push(node.right);
    }
  }
}

module.exports = BinaryTree;