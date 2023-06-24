import { DefaultTheme } from 'styled-components'

export interface ISpacingProps {
  // paddings
  p?: number
  pb?: number
  pl?: number
  px?: number
  py?: number
  pr?: number
  pt?: number

  // margins
  m?: number
  mt?: number
  mr?: number
  mb?: number
  ml?: number
  mx?: number
  my?: number
}

export interface ITypographyProps extends ISpacingProps {
  secondary?: boolean
  bold?: boolean
  onClick?: () => void
  theme: DefaultTheme
}

export interface ICustomStyledProps extends ISpacingProps {
  flex?: 'row' | 'column'
  flexDirection?: 'row-reverse'
  flexSpan?: number
  fullyCentered?: boolean
  justifyContent?: 'center' | 'space-between' | 'end'
  alignItems?: 'center' | 'end'
  w?: string
  h?: string
  position?: 'relative' | 'absolute'
  onClick?: () => void
}
