import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/todos").then((res) => setTodos(res.data));
  }, []);

  const addTodo = async () => {
    if (!text) return;
    const res = await axios.post("http://localhost:5000/todos", { text });
    setTodos([res.data, ...todos]);
    setText("");
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    setTodos(todos.filter((t) => t._id !== id));
  };

  const startEdit = (id, currentText) => {
    setEditingId(id);
    setText(currentText);
  };
  const saveEdit = async () => {
    const res = await axios.patch(`http://localhost:5000/todos/${editingId}`, {
      text,
    });
    setTodos(todos.map((t) => (t._id === editingId ? res.data : t)));
    setEditingId(null);
    setText("");
  };
  const toggleComplete = async (id, currentStatus) => {
    const res = await axios.patch(`http://localhost:5000/todos/${id}`, {
      completed: !currentStatus,
    });
    setTodos(todos.map((t) => (t._id === id ? res.data : t)));
  };
  return (
    <>
    <div className="center">
  <h1 className="title">📚Task Buddy</h1>
</div>
    <div className="app-container">
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task"
        />
        {editingId ? (
          <button onClick={saveEdit} className="edit">
            Save
          </button>
        ) : (
          <button onClick={addTodo} className="add">
            Add
          </button>
        )}
      </div>

      <ul>
        {todos.map((t) => (
          <li
            key={t._id}
            style={{
              textDecoration: t.completed ? "line-through" : "none",
            }}
          >
            {t.text}
            <div>
              <button
                onClick={() => toggleComplete(t._id, t.completed)}
                className="complete"
              >
                {t.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => startEdit(t._id, t.text)} className="edit">
                Edit
              </button>
              <button onClick={() => deleteTodo(t._id)} className="delete">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default App;
