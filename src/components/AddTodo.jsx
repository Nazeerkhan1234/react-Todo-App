import React, { useState } from "react";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleName = (e) => {
    setTodoName(e.target.value);
  };

  const handleDate = (e) => {
    setTodoDate(e.target.value);
  };

  const handleAddButton = () => {
    if (todoName && todoDate) {
      onNewItem(todoName, todoDate);
      setTodoName("");
      setTodoDate("");
    }
  };

  return (
    <>
      <h1 className="flex justify-center text-3xl font-bold mt-5 mb-5">
        Todo App
      </h1>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-start-2">
          <input
            type="text"
            name="todo"
            placeholder="Enter Todo Here"
            className="py-5 px-5 border"
            value={todoName}
            onChange={handleName}
          />
        </div>
        <div>
          <input
            type="date"
            name="date"
            className="py-5 px-5 border"
            value={todoDate}
            onChange={handleDate}
          />
        </div>
        <div>
          <button
            className="btn btn-success text-white px-16 font-bold"
            onClick={handleAddButton}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};
export default AddTodo;
