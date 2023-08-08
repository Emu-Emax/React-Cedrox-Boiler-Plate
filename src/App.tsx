import ResponsiveProvider from 'components/_wrappers/ResponsiveProvider'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import RouterApp from 'routers/RouterApp'
import store from 'redux/store'
import { darkTheme, lightTheme } from 'theme'
import { useAppSelector } from 'hooks/useRedux'
import { selectAppTheme } from 'redux/slices/app'
import { LIGHT_THEME } from 'constants/index'
import { GlobalStyles } from 'globalStyles'

const ThemedApp = ({ children }: { children: ReactNode }) => {
  const currentTheme = useAppSelector(selectAppTheme)
  const chosenThemeObject =
    currentTheme === LIGHT_THEME ? lightTheme : darkTheme
  return <ThemeProvider theme={chosenThemeObject}>{children}</ThemeProvider>
}

const App = () => (
  <Provider store={store}>
    <ThemedApp>
      <GlobalStyles />
      <ResponsiveProvider>
        <RouterApp />
      </ResponsiveProvider>
    </ThemedApp>
  </Provider>
)

export default App
