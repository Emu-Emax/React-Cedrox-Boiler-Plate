import {
  commonStylesFromProps,
  commonTypographyStyles,
} from 'components/_core/commonStyles'
import * as React from 'react'
import styled, { css } from 'styled-components'
import { ICustomStyledProps } from 'types/customStyles'

export const Div = styled.div<ICustomStyledProps>(
  ({ theme }) => css`
    ${commonStylesFromProps};
  `
)

export const Label = styled.label(
  ({ theme: { spacing } }) => css`
    ${commonTypographyStyles};
    margin-bottom: ${spacing(1)};
    font-size: 16px;
    text-align: left;
  `
)

export const DropdownWithIcon = styled.div(
  ({ theme: { colors, spacing } }) => css`
    border: 1px solid ${colors.border};
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 50px;
    width: 366px;
    padding: 0 ${spacing(2)};
    justify-content: space-between;

    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  `
)

export const Svg = styled.img<ICustomStyledProps>(
  ({ theme, w, h, onClick }) => css`
    ${commonStylesFromProps};
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  `
)
