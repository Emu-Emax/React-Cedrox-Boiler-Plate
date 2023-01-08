import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button(
  ({ theme }) => css`
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 20px;
    min-height: 40px;
    transition: 0.25s;
    border-radius: 4px;
    text-transform: uppercase;
    background: ${theme.colors.primary};
    color: ${theme.colors.background};
    &:hover {
      background: ${theme.colors.secondary};
    }
  `
)

interface IButtonProps {
  onClick: () => void
  children: ReactNode
  className?: string
}

const Button = ({ className = '', onClick, children }: IButtonProps) => (
  <StyledButton
    onClick={onClick}
    className={className}
  >
    {children}
  </StyledButton>
)

export default Button
