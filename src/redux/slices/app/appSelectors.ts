import { IRootState } from 'types/redux'
import { LIGHT_THEME } from 'constants/index'

export const selectAppTheme = (state: IRootState) =>
  state.app.theme ?? LIGHT_THEME
