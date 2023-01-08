// React
import axios, { AxiosError } from 'axios'

// Utils
import { ERROR_API_DEFAULT } from '../constants/errors'

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL as string}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// API.interceptors.response.use(
//   response => response,
//   (error: unknown) => {
//     throw error?.response?.data?.error ?? error ?? ERROR_API_DEFAULT
//   }
// )

export default API
