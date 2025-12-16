const express = require("express");
const Todo = require("../models/Todo");
const router = express.Router();


router.get("/", async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
});


router.post("/", async (req, res) => {
  const todo = new Todo({ text: req.body.text });
  await todo.save();
  res.status(201).json(todo);
});


router.patch("/:id", async (req, res) => {
  const { text, completed } = req.body;
  const todo = await Todo.findById(req.params.id);
  if (!todo) return res.status(404).json({ error: "Not found" });

  if (text !== undefined) todo.text = text;
  if (completed !== undefined) todo.completed = completed;

  await todo.save();
  res.json(todo);
});


router.delete("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);
  if (!todo) return res.status(404).json({ error: "Not found" });
  res.status(204).end();
});

module.exports = router;
