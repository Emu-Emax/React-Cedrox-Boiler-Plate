import * as Core from 'components/_core/Core'
import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { ICustomStyledProps } from 'types/customStyles'

const Spinner = styled(Core.Div)<ICustomStyledProps>(
  ({ theme: { colors } }) => css`
    width: 50px;
    height: 50px;
    border: 10px solid ${colors.secondary};
    border-top: 10px solid ${colors.primary};
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;

    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `
)

interface ILoaderWrapperProps {
  children: ReactNode
  isLoading: boolean
}

const LoaderWrapper = ({ children, isLoading }: ILoaderWrapperProps) => {
  return isLoading ? <Spinner /> : <>{children}</>
}
export default LoaderWrapper
