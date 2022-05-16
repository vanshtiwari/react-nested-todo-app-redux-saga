import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: null,
  error: null,
  task: {
    id: "",
    title: "",
    status: "",
    subtasks: {
      id: "",
      title: "",
      status: ""
    }
  }
}

const {
  actions: {
    addTask,
    resetAddTaskState
  },
  reducer,
} = createSlice({
  name: 'addTask',
  initialState,
  reducers: {
    addCustomer: (state, action ) => ({
      ...initialState,
      isLoading: true,
      customer: action.payload   
    }),
    resetAddCustomerState: (state, action) => ({
      ...initialState
    }),
  },
})

export default reducer
export {
  addTask,
  resetAddTaskState
}
