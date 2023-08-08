import { css } from 'styled-components'
import { SPACING_PX } from 'theme'
import {
  ICustomStyledProps,
  ISpacingProps,
  ITypographyProps,
} from 'types/customStyles'

export const spacingProps = (p: ISpacingProps) => css`
  ${p.m && `margin: ${p.m * SPACING_PX}px`};
  ${p.mt && `margin-top: ${p.mt * SPACING_PX}px`};
  ${p.mr && `margin-right: ${p.mr * SPACING_PX}px`};
  ${p.mb && `margin-bottom: ${p.mb * SPACING_PX}px`};
  ${p.ml && `margin-left: ${p.ml * SPACING_PX}px`};
  ${p.mx &&
  `padding-left: ${p.mx * SPACING_PX}px; padding-right: ${
    p.mx * SPACING_PX
  }px`};
  ${p.my &&
  `padding-top: ${p.my * SPACING_PX}px; padding-bottom: ${
    p.my * SPACING_PX
  }px`};

  ${p.pt && `padding-top: ${p.pt * SPACING_PX}px`};
  ${p.pr && `padding-right: ${p.pr * SPACING_PX}px`};
  ${p.pb && `padding-bottom: ${p.pb * SPACING_PX}px`};
  ${p.pl && `padding-left: ${p.pl * SPACING_PX}px`};
  ${p.p && `padding: ${p.p * SPACING_PX}px`};
  ${p.px &&
  `padding-left: ${p.px * SPACING_PX}px; padding-right: ${
    p.px * SPACING_PX
  }px`};
  ${p.py &&
  `padding-top: ${p.py * SPACING_PX}px; padding-bottom: ${
    p.py * SPACING_PX
  }px`};
`

export const commonStylesFromProps = (p: ICustomStyledProps) => css`
  ${spacingProps};

  // sizes
  ${p.w && `width: ${p.w}`};
  ${p.h && `height: ${p.h}`};

  // flex
  ${p.flex && `display: flex; flex-direction: ${p.flex};`};
  ${p.flexSpan && `flex: ${p.flexSpan};`};
  ${p.fullyCentered &&
  `display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;`};
  ${p.justifyContent && `justify-content: ${p.justifyContent};`};
  ${p.flexDirection && `flex-direction: ${p.flexDirection};`};
  ${p.alignItems && `align-items: ${p.alignItems};`};
  ${p.gap && `gap: ${p.gap * SPACING_PX}px`};

  // other
  ${p.position && `position: ${p.position};`};
  ${p.onClick && 'cursor: pointer'};
`

export const commonTypographyStyles = (p: ITypographyProps) =>
  css`
    margin: 0;
    padding: 0;
    ${p.onClick && 'cursor: pointer'};
    font-weight: ${p.bold ? 500 : 400};
    color: ${p.secondary ? p.theme.colors.textSecondary : p.theme.colors.text};
  `
