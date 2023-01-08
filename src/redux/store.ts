// Redux
import { configureStore, combineReducers } from '@reduxjs/toolkit'

// Middleware
import { listenerMiddleware } from 'redux/middleware/listeners'

// Slices
import app from 'redux/slices/app'

export const appReducer = combineReducers({
  app,
  // put next reducers here
  // router: connectRouter(history),
})

const store = configureStore({
  reducer: appReducer,
  devTools: process.env.REACT_APP_ENVIRONMENT !== 'prod',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      // thunk: { extraArgument: { getCommonData } },
    })
      // NOTE: Since this can receive actions with functions inside,
      // it should go before the serializability check middleware
      .prepend(listenerMiddleware.middleware),
})

// Named exports to avoid circular dependency in middleware
export const { dispatch, getState } = store
export default store
