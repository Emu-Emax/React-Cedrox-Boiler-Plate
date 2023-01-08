// Common
import { createAsyncThunk } from '@reduxjs/toolkit'

// Types
import { getMockData } from 'api/app/appApi'

export const fetchMockData = createAsyncThunk<unknown[]>(
  'app/getMockData',
  _ => {
    const data = getMockData()
    return data
  }
)
// action with args
// export const fetchMockData = createAsyncThunk<unknown[], { state: IRootState }>(
//   'app/getMockData',
//   (_, { getState }) => {
//     const data = getMockData()
//     return data
//   }
// )
