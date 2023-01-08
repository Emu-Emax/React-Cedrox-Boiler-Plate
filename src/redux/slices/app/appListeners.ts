// Common
import { Action, isRejected } from '@reduxjs/toolkit'
import { TAppListenerAPI } from 'types/redux'
import { fetchMockData } from './appActions'

// Redux

// Types

const {
  fulfilled: { type: actionTypeFetchMockDataFulfilled },
} = fetchMockData

export const appListeners = [
  {
    matcher: isRejected(fetchMockData),
    effect: (
      action: { error: { message: string } }, // TODO: Action rejected type?
      { dispatch }: TAppListenerAPI
    ) => {
      console.log(action.error.message)
    },
  },
  {
    type: actionTypeFetchMockDataFulfilled,
    effect: (_: Action, { dispatch }: TAppListenerAPI) => {
      console.log('data succesfully fetched')
      // perform rest side effects here
    },
  },
]
