const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//MIDDLEWARE//
app.use(cors());
app.use(express.json());

//ROUTES//
//create todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    res.json(err.message);
  }
});

//get all todos
app.get("/todos", async (req, res) => {
  try {
    const getTodos = await pool.query("SELECT * FROM todo");

    res.json(getTodos.rows);
  } catch (err) {
    res.json(err.message);
  }
});

//get a todo
app.get("/todo/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const getTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json(getTodo.rows[0]);
  } catch (err) {
    res.json(err.message);
  }
});

///update a todo
app.put("/todo/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const description = req.body;

    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *",
      [description["description"], id]
    );

    res.json(updateTodo.rows[0]);
  } catch (err) {
    res.json(err.message);
  }
});

//delete a todo

app.delete("/todo/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json({ message: "Todo Successfully Deleted!" });
  } catch (err) {
    res.json(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
