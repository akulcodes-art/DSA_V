const express = require("express");
const LinkedList = require("../structures/LinkedList");
const BinaryTree = require("../structures/BinaryTree");

const router = express.Router();

const list = new LinkedList();
const tree = new BinaryTree();

router.post("/linkedlist", (req, res) => {
  list.insert(req.body.value);
  res.json(list.toArray());
});

router.post("/binarytree", (req, res) => {
  tree.insert(req.body.value);
  res.json(tree.root);
});

module.exports = router;