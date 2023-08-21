import React, { useState, useRef } from "react";

const TodoList = () => {
  const [inputTask, setInputTask] = useState("");
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(0);
  const focusInput = useRef(null);

  const handleAddTodo = () => {
    if(!editId){
        const newTask = {
            id: Math.random(),
            todo: inputTask,
          };
      
          // console.log(inputTask);
          setList([...list, newTask]);
    }else{
        const editableTask = list.find((todo) => todo.id === editId);
    editableTask.todo = inputTask;
    setList(list);
    console.log(list);
        setEditId(0)
    }
    setInputTask("");
  };

  const handleEditTodo = (id) => {
    const editableTask = list.find((todo) => todo.id === id);
    setInputTask(editableTask.todo);
    focusInput.current.focus();
    setEditId(id);
  };

  const UpdateList = () => {
    const editableTask = list.find((todo) => todo.id === editId);
    editableTask.todo = inputTask;
    setInputTask("");
  };

  const handleDeleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const handleInputChange = (event) => {
    setInputTask(event.target.value);
  };
  return (
    <div className="Todo">
      <h1>My To-Do List</h1>

      <div className="Top">
        <input
          id="inputFiels"
          className="input"
          ref={focusInput}
          type="text"
          value={inputTask}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />

        <button
          className="btn"
          disabled={inputTask.trim() === ""}
          onClick={handleAddTodo}
        >
          {editId?"Edit":"ADD"}
        </button>
      </div>

      <ul>
        {list.map((todo) => (
          <li className="task" key={todo.id}>
            <div className="listShow">{todo.todo}</div>
            <div>
              <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
