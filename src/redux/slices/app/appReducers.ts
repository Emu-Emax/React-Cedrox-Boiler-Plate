// Common
import { PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit'

// Redux

// Types
import { IAppState, TTheme } from 'types'
import { setItemForLocalStorage } from 'utils/localStorage'
import { LOCAL_STORAGE_THEME } from 'constants/localStorage'
import { fetchMockData } from './appActions'

export const reducers = {
  setTheme: (state: IAppState, action: PayloadAction<TTheme>) => {
    state.theme = action.payload
    setItemForLocalStorage(LOCAL_STORAGE_THEME, action.payload)
  },
}

export const extraReducers = (builder: ActionReducerMapBuilder<IAppState>) => {
  builder.addCase(fetchMockData.pending, state => {
    state.mockData.isLoading = true
  })
  builder.addCase(
    fetchMockData.fulfilled,
    (state, action: PayloadAction<unknown[]>) => {
      state.mockData.data = action.payload
      state.mockData.isLoading = false
    }
  )
  builder.addCase(fetchMockData.rejected, state => {
    state.mockData.isLoading = false
  })
}
