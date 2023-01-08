import styled, { css } from 'styled-components'

const LogoContainer = styled.div(
  ({ theme }) => css`
    height: 80px;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    padding: ${theme.spacing(2)};
    flex-direction: row-reverse;
  `
)

const AppName = styled.h1(
  ({ theme }) => css`
    font-size: 32px;
    margin: 0 auto;
    text-align: center;
  `
)

const Logo = () => (
  <LogoContainer>
    <AppName>App Name</AppName>
  </LogoContainer>
)

export default Logo
