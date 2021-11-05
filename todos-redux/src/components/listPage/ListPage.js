import React, { useState, useEffect } from "react";
import "./ListPage.css";
import TaskForm from "../taskForm/TaskForm";
import TasksList from "../tasksList/TasksList";
import { useSelector, useDispatch } from "react-redux";
import {
  retrieveTask,
  addTask,
  updateTask,
  deleteTask,
} from "../../actions/tasks";
import Menu from "./../menu/Menu";
import {
  fetchTasks,
  fetchTasksByFilter,
  addTask as addTaskFromService,
  deleteTask as deleteTaskFromService,
  updateTask as updateTaskFromService,
} from "../../services/tasks.service";

function ListPage({ selectedTaskName, setSelectedName }) {
  const [loading, setLoading] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  // 2ème forme de useEffect
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.list);
  useEffect(() => {
    const fetchData = async () => {
      dispatch(retrieveTask());
    };
    fetchData();
  }, [dispatch]);
  console.log(tasks);
  const addTaskHandler = async (title, duration) => {
    try {
      console.log(title, duration);
      // setLoading(true);
      dispatch(addTask({ title, duration }));
      //setTasks([...tasks, newTask]);
      // setLoading(false);
    } catch (e) {
      console.log("error");
    }
  };
  const deleteTaskHandler = async (id) => {
    try {
      setLoading(true);
      dispatch(deleteTask(id));
      //setTasks(newTasks);
      setLoading(false);
    } catch (e) {
      console.log("error");
    }
  };

  const updateTaskHandler = async (id, title, duration) => {
    try {
      setLoading(true);
      dispatch(updateTask(id, { title, duration }));
      //setTasks(newTasks);
      setLoading(false);
    } catch (e) {
      console.log("error");
    }
  };

  return (
    <div className="list-view">
      <Menu selectedTaskName={selectedTaskName} />
      <div className="toggle">
        <button onClick={toggleVisibility}>Toggle visibility</button>
      </div>
      <div>
        <div>
          <TaskForm addTask={addTaskHandler} />

          {loading && <div>Loading ... </div>}
          {!loading && isVisible && (
            <TasksList
              tasks={tasks}
              deleteTask={deleteTaskHandler}
              updateTask={updateTaskHandler}
              setSelectedName={setSelectedName}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ListPage;
