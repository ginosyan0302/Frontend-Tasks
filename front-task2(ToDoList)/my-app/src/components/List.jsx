import { ToDoItem } from "./ToDoItem";

export const List = ({ items, onDelete, onCompleteClick }) => {
  return (
    <div className="list">
      {items.map((todo) => (
        <ToDoItem

          key={todo.id}
          todo={todo}
        
          onDelete={onDelete}
          onCompleteClick={onCompleteClick}
        />
      ))}
    </div>
  );
};
