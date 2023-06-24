import {
  commonTypographyStyles,
  spacingProps,
} from 'components/_core/commonStyles'
import styled, { css } from 'styled-components'
import { ITypographyProps } from 'types/customStyles'

export const H1 = styled.h1<ITypographyProps>(
  () => css`
    ${commonTypographyStyles};
    ${spacingProps};
    font-size: 96px;
    line-height: 110px;
  `
)

export const H2 = styled.h2<ITypographyProps>(
  () => css`
    ${commonTypographyStyles};
    ${spacingProps};
    font-size: 40px;
    line-height: 52px;
  `
)

export const Body = styled.p<ITypographyProps>(
  () => css`
    ${commonTypographyStyles};
    ${spacingProps};
    font-size: 16px;
    line-height: 21px;
  `
)

export const Body2 = styled.p<ITypographyProps>(
  () => css`
    ${commonTypographyStyles};
    ${spacingProps};
    font-size: 13px;
    line-height: 18px;
  `
)

export const ErrorMessage = styled.p(
  ({ theme: { colors } }) => css`
    ${commonTypographyStyles};
    ${spacingProps};
    color: ${colors.error};
    font-size: 16px;
    text-align: left;
  `
)
