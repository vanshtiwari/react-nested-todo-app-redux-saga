import { all } from 'redux-saga/effects';
import taskList from './task-list';

export default function* rootSaga() {
  yield all([
    taskList()
  ]);  
}
