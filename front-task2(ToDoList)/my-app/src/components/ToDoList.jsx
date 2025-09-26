import { useState } from "react";
import { AddToDo } from "./AddToDo";
import { List } from "./List";
import { ToDoFilter } from "./ToDoFilter";

export const ToDoList = () => {
   const [todos, setTodos] = useState([
    { id: 1, text: "Read a book", completed: false },
    { id: 2, text: "Do workout", completed: true },
    { id: 3, text: "Write a blog post", completed: true },
    { id: 4, text: "Cook dinner", completed: false },
    { id: 5, text: "Go for a walk", completed: true },
    { id: 6, text: "Learn React", completed: true },
    { id: 7, text: "Call a friend", completed: true },
    { id: 8, text: "Clean the room", completed: false },
    { id: 9, text: "Meditate", completed: false },
    { id: 10, text: "Do homeworks", completed: false },
    { id: 11, text: "Practice chess", completed: true },
    { id: 12, text: "Watch a documentary", completed: false },
    { id: 13, text: "Plan the week", completed: true },
    { id: 14, text: "Pay bills", completed: true },
    { id: 15, text: "Write journal", completed: false },
    { id: 16, text: "Learn JavaScript", completed: true },
    { id: 17, text: "Exercise yoga", completed: false },
    { id: 18, text: "Organize desk", completed: false },
    { id: 19, text: "Read news articles", completed: true },
  ]);

  
  const [filter, setFilter] = useState("all"); 

  const handleAdd = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCompleteClick = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
        return !todo.completed;
    } 

    if (filter === "completed") {
        return todo.completed
    }
    return true;
  });

  return (
    <>
      <AddToDo onAdd={handleAdd} />
      <ToDoFilter currentFilter={filter} setFilter={setFilter} />
      <List
        items={filteredTodos}
        onDelete={handleDelete}
        onCompleteClick={handleCompleteClick}
      />
    </>
  );
};
