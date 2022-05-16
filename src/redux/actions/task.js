import { createAction } from 'redux-actions'
import {
  ADD_TASK,
  UPDATE_TASK,
} from './constants'

export const addTask = createAction(ADD_TASK);
export const updateTask = createAction(UPDATE_TASK);
