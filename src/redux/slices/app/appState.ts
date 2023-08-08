import { IAppState } from 'types'
import { LIGHT_THEME } from 'constants/index'
import { getItemFromLocalStorage } from 'utils/localStorage'
import { LOCAL_STORAGE_THEME } from 'constants/localStorage'

export const initialState: IAppState = {
  theme: getItemFromLocalStorage(LOCAL_STORAGE_THEME) ?? LIGHT_THEME,
  resolution: null,
  mockData: {
    data: [],
    isLoading: false,
  },
}
