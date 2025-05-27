const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

// ✅ Enable CORS
app.use(cors({
  origin: "http://localhost:5173"
}));



app.use(express.json());

let users = [];

app.post("/users", (req, res) => {
  const { name, email, phone, city } = req.body;
  const newUser = { name, email, phone, city };
  users.push(newUser);

  res.status(201).json({ message: "User data received!", user: newUser });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
