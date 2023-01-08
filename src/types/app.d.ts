import { DARK_THEME, LIGHT_THEME } from 'constants/index'

export type TTheme = typeof LIGHT_THEME | typeof DARK_THEME

export interface IAppState {
  theme: TTheme
  mockData: {
    data: unknown[]
    isLoading: boolean
  }
}
