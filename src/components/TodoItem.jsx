import { useState } from "react";

function TodoItem({ todo, onUpdate, onDelete, onToggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const saveEdit = () => {
    if (editText.trim()) {
      onUpdate(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const itemStyle = {
    marginBottom: "0.5rem",
    padding: "0.5rem",
    backgroundColor: todo.completed ? "#d4edda" : "#fff",
    textDecoration: todo.completed ? "line-through" : "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "6px"
  };

  return (
    <li style={itemStyle}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
        style={{ marginRight: "0.5rem" }}
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            style={{ marginRight: "0.5rem", flexGrow: 1 }}
          />
          <button onClick={saveEdit}>Save</button>
          <button onClick={() => {setEditText(todo.text);setIsEditing(false);}}>Cancel</button>
        </>
      ) : (
        <>
          <span style={{ flexGrow: 1, marginRight: "1rem" }}>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button  onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
}


export default TodoItem;




