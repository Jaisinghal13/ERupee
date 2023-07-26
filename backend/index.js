const express = require("express");
const cors = require("cors");
const app = express();
const { Pool } = require("pg");

const PORT = 5000;
app.use(cors()); //middleware
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "AFSD_July",
  password: "Singhal2000@",
  port: 5433,
});

app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password, balance } = req.body;
    const insertQuery =
      "INSERT INTO users (name, email, password, balance) VALUES ($1, $2, $3, $4)";
    await pool.query(insertQuery, [name, email, password, balance]);
    res.json({ message: "Registration successful!" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${5000}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/getdata", (req, res) => {
  res.send("Hello World!");
});

// app.listen(PORT, () => {
//   console.log("My Server is listening on port 4000");
// });
