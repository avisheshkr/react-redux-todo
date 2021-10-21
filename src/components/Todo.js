import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../style.css";
import { VscAdd } from "react-icons/vsc";
import { AiFillDelete } from "react-icons/ai";
import { addTodo, deleteTodo, clearTodo } from "../actions";

// const getTasksFromStorage = () => {
//   const lists = localStorage.getItem("myTasks");
//   if (lists) {
//     return JSON.parse(lists);
//   }
// };

const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const myState = useSelector((state) => state.todoReducers);
  const dispatch = useDispatch();
  return (
    <>
      <div className="todo-container">
        <img src="images/todo.jpg" alt="" />
        <h2>Add your todo tasks</h2>
        <div className="add-item">
          <input
            type="text"
            placeholder="Enter task"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />

          <button onClick={() => dispatch(addTodo(inputVal), setInputVal(""))}>
            <VscAdd className="add-btn" />
          </button>
        </div>

        <div className="todo-list-container">
          {myState.map((curTask) => {
            return (
              <div key={curTask.id} className="todo-list">
                <span>{curTask.data}</span>
                <div>
                  <button
                    className="del-btn"
                    onClick={() => dispatch(deleteTodo(curTask.id))}
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button className="clear-btn" onClick={() => dispatch(clearTodo())}>
          Remove All
        </button>
      </div>
    </>
  );
};

export default Todo;
