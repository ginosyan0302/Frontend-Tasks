export const ToDoItem = ({ todo, onDelete, onCompleteClick }) => { 
  return (
    <div className={todo.completed ? "done" : ""} style={{ marginBottom: "10px" }}> 
      <p>{todo.text}</p>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
      <button onClick={() => onCompleteClick(todo.id)}>
        {todo.completed ? "Cancel" : "Complete"}
      </button>
    </div>
  );
};
