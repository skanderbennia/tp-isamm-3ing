import types from "../types";
import * as api from "../services/tasks.service";
export const addTask = (task) => {
  const fetchedTask = api.addTask(task);
  return {
    type: types.ADD_TASK,
    payload: fetchedTask,
  };
};
export const updateTask = (id, task) => {
  const fetchedTask = api.updateTask(id, task);
  return {
    type: types.UPDATE_TASK,
    payload: fetchedTask,
  };
};
export const deleteTask = (id) => {
  api.deleteTask(id);
  return {
    type: types.DELETE_TASK,
    payload: id,
  };
};
export const retrieveTask = () => {
  const tasks = api.fetchTasks();
  return {
    type: types.RETRIEVE_TASKS,
    payload: tasks,
  };
};
export const retrieveTaskById = (id) => {
  const taskById = api.fetchTaskById(id);
  return {
    type: types.RETRIEVE_TASK_ID,
    payload: taskById,
  };
};
