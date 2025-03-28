const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  res.json({
    message: `Thank you for your interest, ${name}!`,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
