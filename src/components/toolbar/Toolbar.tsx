import styled, { css } from 'styled-components'
import ToolbarLightDarkSwitch from 'components/toolbar/ToolbarLightDarkSwitch'

const ToolBarContainer = styled.div(
  ({ theme }) => css`
    height: 80px;
    width: 100%;
    display: flex;
    align-content: center;
    padding: ${theme.spacing(2)};
    flex-direction: row-reverse;
  `
)

const Toolbar = () => (
  // toolbar code

  <ToolBarContainer>
    <ToolbarLightDarkSwitch />
  </ToolBarContainer>
)

export default Toolbar
