import { commonStylesFromProps } from 'components/_core/commonStyles'
import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { ICustomStyledProps } from 'types/customStyles'

const StyledButton = styled.button<
  ICustomStyledProps & { variant?: 'primary' | 'secondary' }
>(
  ({ theme: { colors }, variant }) => css`
    ${commonStylesFromProps};
    outline: none;
    border: ${variant === 'primary' ? 'none' : `1px solid ${colors.primary}`};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 20px;
    height: 50px;
    min-width: 240px;
    transition: 0.25s;
    background: ${variant === 'primary' ? colors.primary : colors.secondary};
    color: ${variant === 'primary' ? colors.secondary : colors.primary};
    // &:hover {
    //   background: ${colors.secondary};
    //   color: ${colors.primary};
    // }
    font-size: 20px;
    line-height: 26px;
  `
)

interface IButtonProps extends ICustomStyledProps {
  type?: 'submit' | 'button' | 'reset'
  onClick?: () => void
  children: ReactNode
  className?: string
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}

const Button = ({
  className = '',
  onClick,
  children,
  type,
  variant = 'primary',
  disabled = false,
  ...rest
}: IButtonProps) => (
  <StyledButton
    onClick={onClick}
    className={className}
    type={type}
    variant={variant}
    disabled={disabled}
    {...rest}
  >
    {children}
  </StyledButton>
)

export default Button
