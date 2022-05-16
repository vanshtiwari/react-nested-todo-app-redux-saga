import { combineReducers } from '@reduxjs/toolkit'
import TaskListReducer from './task-list';
import AddTaskReducer from './add-task';

const rootReducer = combineReducers({
  taskList: TaskListReducer,
  addTask: AddTaskReducer
});

export default rootReducer;
