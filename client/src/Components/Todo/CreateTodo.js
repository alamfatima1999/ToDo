import React, { useEffect, useState } from "react";
import "./Todo.css";

const CreateTodo = (props) => {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    if (props.editFlag) {
      setTodo(props.selectedTodo);
    }
  }, [props.editFlag]);

  const handleTodo = (e) => {
    if(props.editFlag){
      setTodo({ info: e.target.value, completed: todo.completed });
    }else{
      setTodo({ info: e.target.value, completed: false });
    }
    
  };

  const addTodo = (todo) => {
    if (todo.info.trim().length != 0) {
      props.insertTodo(todo);
      setTodo({ info: "", completed: false });
    }
  };

  const cancelUpdateTodo = () => {
    props.cancelUpdate();
    setTodo({ info: "", completed: false });
  };

  const editTodo = (todo) => {
    if (todo.info.trim().length != 0) {
      props.editTask(todo);
      setTodo({ info: "", completed: false });
    }
  };

  return (
    <div class="todo-container">
      {!props.editFlag ? <h2>Create Todo</h2> : <h1>Update Todo</h1>}
      <input
        type="text"
        class="todo-input"
        placeholder="Enter your todo here"
        value={todo.info}
        onChange={(e) => handleTodo(e)}
      />
      <div class="button-container">
        {!props.editFlag ? (
          <button class="todo-button" onClick={() => addTodo(todo)}>
            Add Todo
          </button>
        ) : (
          <div>
            <button class="todo-button" onClick={() => editTodo(todo)}>
              Update Todo
            </button>
          </div>
        )}
        <button class="todo-button" onClick={props.getActiveTasks}>
          Active Tasks
        </button>
        <button class="todo-button" onClick={props.getCompletedTasks}>
          Completed Tasks
        </button>
      </div>
      {props.editFlag ? (
        <button class="cancel-button" onClick={() => cancelUpdateTodo()}>
          Cancel update
        </button>
      ) : null}
    </div>
  );
};

export default CreateTodo;
