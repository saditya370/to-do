import TodoItem from "./TodoItem";

function TodoList({ todos, onUpdate, onDelete, onToggleComplete }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
}


export default TodoList;
