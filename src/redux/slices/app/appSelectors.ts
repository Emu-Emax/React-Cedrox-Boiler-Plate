import { LIGHT_THEME } from 'constants/index'
import { IRootState } from 'types/redux'

export const selectAppTheme = (state: IRootState) =>
  state.app.theme ?? LIGHT_THEME

export const selectResolution = (state: IRootState) =>
  state.app.resolution ?? null

export const selectFitCustomResolution = (state: IRootState, res: number) =>
  res > (state.app.resolution ?? 0)
