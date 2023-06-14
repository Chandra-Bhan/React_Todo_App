import React, { useState } from 'react';
import './style.css';
import TodoDetails from './TodoDetails';
import "bootstrap/dist/css/bootstrap.min.css";

// Build a To-Do list app using React The app should allow users to add new tasks, mark them as complete, and delete them. Use React state to manage the list of tasks and their completion status. Use React props to pass data between components.

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const handleAddTodo = () => {
    if(todo!==""){
    const temp = {
      id: new Date(),
      todoName: todo,
      isCompleted: false,
    };
    setTodos([...todos, temp]);
  }
  else{
    alert("Please fill the field!")
  }
  };
  const handleDeletion = (id) => {
    const updatedData = todos.filter((item) => item.id !== id);
    setTodos(updatedData);
  };
  const handleCompletion = (id) => {
    const updatedData = todos.map((item) => {
      if (item.id == id) {
        return { ...item, isCompleted: item.isCompleted ? false : true };
      } else {
        return item;
      }
    });
    setTodos([...updatedData]);
  };
  return (
    <div style={{margin:"auto",textAlign:"center",width:"30rem"}} className="border mt-5 p-5">
      <h1 className="text-danger">Todo App!</h1>
      <input
      className="form-control"
        type="text"
        placeholder="Add Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="btn btn-success ps-5 pe-5 m-3" onClick={handleAddTodo}>Add</button>
      {todos.map((todoInfo) => (
        <div key={todoInfo.id}>
          <TodoDetails
            todoInfo={todoInfo}
            handleDeletion={handleDeletion}
            handleCompletion={handleCompletion}
          />
        </div>
      ))}
    </div>
  );
}
