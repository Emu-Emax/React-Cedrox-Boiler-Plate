import { DefaultTheme } from 'styled-components'

export interface ISpacingProps {
  // mobile
  isMobile?: boolean

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

export interface ICustomStyledProps extends ISpacingProps {
  w?: string
  h?: string
  position?: 'relative' | 'absolute'
  onClick?: () => void
  flex?: 'row' | 'column'
  flexDirection?: 'row-reverse' | 'column-reverse' | 'row'
  flexSpan?: number
  fullyCentered?: boolean
  justifyContent?: 'center' | 'space-between' | 'end'
  alignItems?: 'center' | 'end'
  gap?: number
}

export interface ITypographyProps extends ISpacingProps {
  secondary?: boolean
  bold?: boolean
  onClick?: () => void
  theme: DefaultTheme
  align?: 'center' | 'left' | 'right'
}
