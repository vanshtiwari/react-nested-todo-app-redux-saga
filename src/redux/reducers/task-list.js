import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: null,
  error: null,
  taskList: []
}

const {
  actions: {
    fetchTaskListStart,
    fetchTaskListSuccess,
    fetchTaskListFailure,
    fetchTaskListAddSuccess,
    updateTaskList
  },
  reducer,
} = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    fetchTaskListStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    fetchTaskListSuccess: (state, action) => ({
      ...initialState,
      taskList: action && action.payload && action.payload.taskData,
      isLoading: false,
    }),
    fetchTaskListFailure: () => ({
      ...initialState,
      error: true,
      isLoading: false,
    }),
    fetchTaskListAddSuccess: (state, action) => ({
      ...initialState,
      taskList: [...state.taskList, action.payload.newTaskData]
    }),
    updateTaskList: (state, action) => {
      return {
        ...initialState,
        taskList: action.payload.taskList
      }
    }
  },
})

export default reducer
export {
  fetchTaskListStart,
  fetchTaskListSuccess,
  fetchTaskListFailure,
  fetchTaskListAddSuccess,
  updateTaskList
}
