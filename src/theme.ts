const COLORS_PALETTE = {
  black: '#000000',
  white: '#FFFFFF',
  yellow: 'yellow',
  darkJeans: '#2A4686',
  crimsonRed: '#cd2121',
  grayIntrovert: '#9b9b9b',
  graySomething: '#E3E3E3',
  grayTransparent: '#00000080',
  blackyGray: '#30303096',
  gradientBlue: 'linear-gradient(180deg, #2A4686 0%, #3661C4 100%)',
}

export const SPACING_PX = 8

export const commonTheme = {
  spacing: (n: number) => `${n * SPACING_PX}px`,
}

export const lightTheme = {
  ...commonTheme,
  colors: {
    primary: COLORS_PALETTE.darkJeans,
    secondary: COLORS_PALETTE.white,
    modalBackground: COLORS_PALETTE.white,
    modalOverlay: COLORS_PALETTE.blackyGray,
    text: COLORS_PALETTE.darkJeans,
    textSecondary: COLORS_PALETTE.grayTransparent,
    background: COLORS_PALETTE.white,
    gradient: 'linear-gradient(#39598A, #79D7ED)',
    buttonBorder: '#FFF',
    border: COLORS_PALETTE.grayTransparent,
    tableHeadBackground: COLORS_PALETTE.graySomething,
    cardFront: COLORS_PALETTE.gradientBlue,
    error: COLORS_PALETTE.crimsonRed,
  },
}

export const darkTheme = {
  ...commonTheme,
  colors: {
    primary: COLORS_PALETTE.whaleBlue,
    secondary: COLORS_PALETTE.crimsonRed,
    text: COLORS_PALETTE.white,
    background: COLORS_PALETTE.black,
    gradient: 'linear-gradient(#091236, #1E215D)',
    buttonBorder: '#6B8096',
  },
}
