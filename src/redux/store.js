import {
  configureStore,
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [ sagaMiddleware ]

const store = configureStore({
  reducer,
  middleware,
})

sagaMiddleware.run(saga)

export default store