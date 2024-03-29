import { appSlice } from 'redux/slices/app/appSlice'

export * from 'redux/slices/app/appActions'
export * from 'redux/slices/app/appSelectors'

export const { setTheme, setResolution } = appSlice.actions

export default appSlice.reducer
