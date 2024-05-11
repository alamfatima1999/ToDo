import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import TaskList from "./TaskList";
import { guid } from "../../Utils";

const Todo = () => {
    const[todoList, setTodoList] = useState([]);
    const[editTodo, setEditTodo] = useState(false);
    const[selectedTodo, setSelectedTodo] = useState({});
    // const [task, setTask] = 

    const insertTodo = (todoObj) => {
        if(todoObj.info!=""){
            let todo = {id: guid(), ...todoObj}; 
            setTodoList((prevState) => {
            return [...prevState, todo]
        });
        }
    }
    
    const selectTodo = (todoId) => {
        const todo = todoList.find((todo)=> {
            return todoId ==todo.id;
        });
        setSelectedTodo(todo);
        setEditTodo(true);
    }
    const editTask = (todo) => {
        // setSelectedTodo((todo))
        let currentList = [...todoList];
        currentList.forEach((task) => {
            if(task.id==selectedTodo.id){
                task.info = todo.info;
            }
        });
        setTodoList(currentList);
        setEditTodo(false);
    }

    const deleteTask = (taskId) => {
        let taskList = todoList.filter((todo)=> {
            return (todo.id != taskId);
        });
        setTodoList(taskList);
    }
    return(
        <div>
            <CreateTodo editTask = {editTask} selectedTodo= {selectedTodo} editTodo={editTodo} insertTodo={insertTodo}/> 
            <TaskList todoList={todoList} selectTodo ={selectTodo} deleteTask = {deleteTask}/>
        </div>
    );
    

}
export default Todo;