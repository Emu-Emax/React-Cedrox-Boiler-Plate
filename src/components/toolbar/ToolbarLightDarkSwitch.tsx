import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import styled, { css } from 'styled-components'
import { ReactComponent as SunIcon } from 'assets/icons/sunflower-svgrepo-com.svg'
import { ReactComponent as MoonIcon } from 'assets/icons/moon-svgrepo-com.svg'
import { selectAppTheme, setTheme } from 'redux/slices/app'
import {
  TEST_ID_TOOLBAR_LIGHT_DARK_SWITCH_BUTTON,
  TEST_ID_TOOLBAR_LIGHT_DARK_SWITCH_CONTAINER,
} from 'constants/testIds'
import { DARK_THEME, LIGHT_THEME } from 'constants/index'

const ToolbarLightDarkSwitchContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    padding: 2px;
  `
)

const SwitchButton = styled.button<{ currentTheme: string }>(
  ({ theme, currentTheme }) => css`
    background: ${theme.colors.gradient};
    border: 2px solid ${theme.colors.buttonBorder};
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    font-size: 0.5rem;
    justify-content: space-between;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: 5rem;
    height: 3rem;

    svg {
      height: auto;
      width: 2.5rem;
      transition: all 0.3s linear;

      // sun icon
      &:first-child {
        transform: ${currentTheme === 'light'
          ? 'translateY(4px)'
          : 'translateY(100px)'};
      }

      // moon icon
      &:nth-child(2) {
        transform: ${currentTheme === 'light'
          ? 'translateY(-100px)'
          : 'translateY(4px)'};
      }
    }
  `
)

const ToolbarLightDarkSwitch = () => {
  const currentTheme = useAppSelector(selectAppTheme)
  const dispatch = useAppDispatch()

  const handleSwitch = () => {
    const newTheme = currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
    dispatch(setTheme(newTheme))
  }

  return (
    <ToolbarLightDarkSwitchContainer
      data-testid={TEST_ID_TOOLBAR_LIGHT_DARK_SWITCH_CONTAINER}
    >
      <SwitchButton
        onClick={handleSwitch}
        currentTheme={currentTheme}
        data-testid={TEST_ID_TOOLBAR_LIGHT_DARK_SWITCH_BUTTON}
      >
        <SunIcon />
        <MoonIcon />
      </SwitchButton>
    </ToolbarLightDarkSwitchContainer>
  )
}

export default ToolbarLightDarkSwitch
