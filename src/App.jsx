import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todoItem, setTodoItem] = useState([]);
  // Retrieve the todo items from local storage when the component mounts
  //   const savedTodos = localStorage.getItem("todoItem");
  //   return savedTodos ? JSON.parse(savedTodos) : [];
  // });

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItem = [...todoItem, { name: itemName, duedate: itemDueDate }];
    setTodoItem(newTodoItem);
  };
  const handleDeleteItem = (idx) => {
    const newTodoItems = todoItem.filter((_, item) => item !== idx);
    setTodoItem(newTodoItems);
  };
  // useEffect(() => {
  //   // Store the todo items in local storage whenever they change
  //   localStorage.setItem("todoItem", JSON.stringify(todoItem));
  // }, [todoItem]);
  return (
    <>
      <AddTodo onNewItem={handleNewItem} />
      {todoItem.length === 0 && (
        <p className="font-bold text-3xl items-center ml-96 pl-40 mt-8 ">
          Enjoy Your Day
        </p>
      )}
      <TodoItems todoItem={todoItem} onDeleteClick={handleDeleteItem} />
    </>
  );
}

export default App;
