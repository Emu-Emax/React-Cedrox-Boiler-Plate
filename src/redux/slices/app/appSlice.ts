import { createSlice } from '@reduxjs/toolkit'
import { initialState } from 'redux/slices/app/appState'
import { reducers, extraReducers } from 'redux/slices/app/appReducers'

export const appSlice = createSlice({
  name: 'app',
  reducers,
  initialState,
  extraReducers,
})
