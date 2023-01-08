import { TTheme } from 'types'

export const setItemForLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

export const getItemFromLocalStorage = (key: string) =>
  localStorage.getItem(key) as TTheme
