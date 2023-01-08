import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import Toolbar from 'components/toolbar/Toolbar'
import Logo from 'components/logo/Logo'

interface ILayoutBaseProps {
  children: ReactNode
}

const LayoutContainer = styled.div(
  () => css`
    width: 100%;
    height: 100vh;
  `
)

const ResponsiveContainer = styled.div(
  () => css`
    width: 100%;
    padding: 0 15% 0 15%;
    height: 100vh;
  `
)

const LayoutBase = ({ children }: ILayoutBaseProps) => (
  <LayoutContainer>
    <Toolbar />
    <ResponsiveContainer>
      <Logo />
      {children}
    </ResponsiveContainer>
  </LayoutContainer>
)

export default LayoutBase
