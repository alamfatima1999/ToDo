import React, { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import TaskList from "./TaskList";
import { guid } from "../../Utils";
import CompletedTasks from "../Completed Tasks/CompletedTasks";
import ActiveTasks from "../ActiveTasks/ActiveTasks";
import axios from "axios";
import { getBaseURL } from "../apiConfig"; 
import "./Todo.css";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});
  const [updateTodo, setUpdateTodo] = useState({});

  //0-> all tasks will be displayed,
  //1-> Active Tasks will be displayed
  //2-> Completed Tasks will be displayed
  const [mode, setMode] = useState(0);
  // const [task, setTask] =


  useEffect(() => {
   axios.get(`${getBaseURL()}api/todos/`)
   .then((res) => {
    let data = res.data;
    setTodoList(data);
   })
   .catch((err) => {
    console.log(`Sorry!! Couldn't fetch all todos`);
   })
  }, [updateTodo]);
  
  const insertTodo = (todoObj) => {
    if (todoObj.info != "") {
      let todo = { id: guid(), ...todoObj };
      setTodoList((prevState) => {
        return [...prevState, todo];
      });
    }
  };


  const cancelUpdate = () => {
    setEditTodo(false);
  }

  const getAllTasks = () => {
    setMode(0);
  };
  const getActiveTasks = () => {
    setMode(1);
  };
  const getCompletedTasks = () => {
    setMode(2);
  };

  const changeTodoState = (todo) => {
    let currentList = [...todoList];
    currentList.forEach((task) => {
      if (task.id == todo.id) {
        task.completed = !task.completed;
      }
    });
    setTodoList(currentList);
  };

  const selectTodo = (todoId) => {
    const todo = todoList.find((todo) => {
      return todoId == todo._id;
    });
    setSelectedTodo(todo);
    setEditTodo(true);
  };
  const editTask = (todo) => {
    // let currentList = [...todoList];
    // currentList.forEach((task) => {
    //   if (task.id == selectedTodo.id) {
    //     task.info = todo.info;
    //   }
    // });
    // setTodoList(currentList);
    // setEditTodo(false);
    const todoId = selectedTodo._id;
    const updatedData = {info: todo.info, completed: todo.completed};
    axios.post(`${getBaseURL()}api/todos/update/${todoId}`, {...updatedData})
    .then((res) => {
      console.log(`updated successfully`);
      setUpdateTodo((todoFlag => !todoFlag));
      setEditTodo(false);
    })
    .catch((err) => {
      console.log(`Sorry coulnd't update todo`);
    });
    
  };

  const deleteTask = (taskId) => {
    let taskList = todoList.filter((todo) => {
      return todo.id != taskId;
    });
    setTodoList(taskList);
  };
  return (
    <div>
      {mode == 0 ? (
        <>
          <CreateTodo
            editTask={editTask}
            mode={mode}
            selectedTodo={selectedTodo}
            editTodo={editTodo}
            insertTodo={insertTodo}
            getCompletedTasks={getCompletedTasks}
            getActiveTasks={getActiveTasks}
            cancelUpdate = {cancelUpdate}
          />
          <TaskList
            todoList={todoList}
            changeTodoState={changeTodoState}
            selectTodo={selectTodo}
            deleteTask={deleteTask}
          />
        </>
      ) : mode == 1 ? (
        <ActiveTasks todoList={todoList}
        selectTodo={selectTodo}
        deleteTask={deleteTask}
        getCompletedTasks={getCompletedTasks}
        getAllTasks={getAllTasks}/>
      ) : mode==2?(
        <CompletedTasks todoList={todoList}
        selectTodo={selectTodo}
        deleteTask={deleteTask}
        getActiveTasks={getActiveTasks}
        getAllTasks={getAllTasks}/>
      ):null}
    </div>
  );
};
export default Todo;
