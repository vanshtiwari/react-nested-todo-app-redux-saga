import { takeLatest, put, select, delay } from 'redux-saga/effects';
import {
  fetchTaskListStart,
  fetchTaskListSuccess,
  fetchTaskListAddSuccess,
  updateTaskList
} from '../reducers/task-list';
import {resetAddTaskState} from '../reducers/add-task';
import { 
  ADD_TASK, 
  UPDATE_TASK
} from '../actions/constants';
import Task from '../services/task.js';
import { v4 as uuidv4 } from 'uuid';

function* taskListWatcher() {
  yield takeLatest([ 
    fetchTaskListStart.type, 
    ADD_TASK, 
    UPDATE_TASK, 
  ], TaskListWorker)
}

function* TaskListWorker(action) {
  try {
    switch (action.type) {
      case fetchTaskListStart.type: {
        const data = Task.getTaskList();
        yield put(fetchTaskListSuccess({ taskData: data }));
        break;
      }
      case ADD_TASK: {
        const { task } = yield select((state) => state.addTask)
        console.log(task);
        if (!(task && task.title && task.title.trim())) {
          alert('Task group should not be empty!');
          return;
        }
        
        if (!(task && task.title && task.title.trim())) {
          alert('Task name should not be empty!');
          return;
        }

        yield put(fetchTaskListAddSuccess({ 
          newTaskData: {
            id: uuidv4(),
            title: task.title,
            status: task.status
          }}
        ));
        yield put(resetAddTaskState());
        break;
      }
      case UPDATE_TASK: {
        const {id, newStatus, sequence} = action.payload;

        let {taskList} = yield select((state) => state.taskList);
        const clonedTaskList = JSON.parse(JSON.stringify(taskList));
        clonedTaskList[sequence - 1].status = newStatus;
        yield put(updateTaskList({ taskList: clonedTaskList }));
        // Use custom delay
        yield delay(600);
        alert('Task status has been successfully updated!');
        break;
      }
      default:
        break
    }
  } catch (e) {
    console.error(`Error on an action ${action.type}`, e);
  }
}

export default taskListWatcher
