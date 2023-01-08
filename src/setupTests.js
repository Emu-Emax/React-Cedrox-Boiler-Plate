// Common
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { useAppSelector } from './hooks/useRedux';
import { selectAppTheme } from './redux/slices/app';
import { LIGHT_THEME } from './constants';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider } from 'styled-components';
// MUI

// Redux

// Constants

// Mocks

// store
global.store = store;

// Snapshot wrapper
global.expectMatchSnapshot = (container) => expect(container).toMatchSnapshot();

/*
 *  RENDER FUNCTIONS
 * */

// For every unit test, to render component with all necessary providers
global.customRender = (ui, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => {
      const ThemedApp = ({ children }) => {
        const currentTheme = useAppSelector(selectAppTheme);
        const chosenTheme =
          currentTheme === LIGHT_THEME ? lightTheme : darkTheme;
        return <ThemeProvider theme={chosenTheme}>{children}</ThemeProvider>;
      };

      return (
        <Provider store={store}>
          <ThemedApp>
            <BrowserRouter>{children}</BrowserRouter>
          </ThemedApp>
        </Provider>
      );
    },
    ...options,
  });
