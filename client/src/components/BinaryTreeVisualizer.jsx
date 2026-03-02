import { useState } from "react";
import API from "../api";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";

function BinaryTreeVisualizer() {
  const [tree, setTree] = useState(null);
  const [value, setValue] = useState("");

  const addNode = async () => {
    const res = await API.post("/binarytree", { value });
    setTree(res.data);
    setValue("");
  };

  // Generate nodes AND edges
  const generateTreeElements = (node, x = 250, y = 50, level = 1, elements = { nodes: [], edges: [] }) => {
    if (!node) return elements;

    const nodeId = node.value.toString() + y;

    elements.nodes.push({
      id: nodeId,
      data: { label: node.value },
      position: { x, y },
    });

    if (node.left) {
      const leftId = node.left.value.toString() + (y + 100);

      elements.edges.push({
        id: `${nodeId}-${leftId}`,
        source: nodeId,
        target: leftId,
        animated: true,
      });

      generateTreeElements(node.left, x - 150 / level, y + 100, level + 1, elements);
    }

    if (node.right) {
      const rightId = node.right.value.toString() + (y + 100);

      elements.edges.push({
        id: `${nodeId}-${rightId}`,
        source: nodeId,
        target: rightId,
        animated: true,
      });

      generateTreeElements(node.right, x + 150 / level, y + 100, level + 1, elements);
    }

    return elements;
  };

  const elements = tree ? generateTreeElements(tree) : { nodes: [], edges: [] };

  return (
    <div style={{ height: 400 }}>
      <h2>Binary Tree</h2>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={addNode}>Add</button>

      <ReactFlow
        nodes={elements.nodes}
        edges={elements.edges}
        fitView
      >
        <Background />
      </ReactFlow>
    </div>
  );
}

export default BinaryTreeVisualizer;