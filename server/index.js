const express = require("express");
const cors = require("cors");
const dsRoutes = require("./routes/dsRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", dsRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});