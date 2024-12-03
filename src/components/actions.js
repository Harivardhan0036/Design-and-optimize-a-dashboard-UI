export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const SET_FILTER = 'SET_FILTER';

export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const editTask = (task) => ({ type: EDIT_TASK, payload: task });
export const deleteTask = (taskId) => ({ type: DELETE_TASK, payload: taskId });
export const toggleTask = (taskId) => {
    console.log(`Toggling task with ID: ${taskId}`);
    return { type: TOGGLE_TASK, payload: taskId };
  };  
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
