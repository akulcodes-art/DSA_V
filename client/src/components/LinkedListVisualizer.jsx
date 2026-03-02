import { useState } from "react";
import API from "../api";

function LinkedListVisualizer() {
  const [nodes, setNodes] = useState([]);
  const [value, setValue] = useState("");

  const addNode = async () => {
    if (!value) return;
    const res = await API.post("/linkedlist", { value });
    setNodes(res.data);
    setValue("");
  };

  return (
    <div>
      <h2>Linked List</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter value"
        />
        <button onClick={addNode}>Add</button>
      </div>

      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        {nodes.map((node, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "15px",
            }}
          >
            <div
              style={{
                padding: "15px",
                background: "#334155",
                borderRadius: "10px",
                minWidth: "60px",
                textAlign: "center",
              }}
            >
              {node}
            </div>
            <span style={{ marginLeft: "8px", fontSize: "20px" }}>→</span>
          </div>
        ))}
        {nodes.length > 0 && <span>null</span>}
      </div>
    </div>
  );
}

export default LinkedListVisualizer;