const COLORS_PALETTE = {
  black: '#000000',
  white: '#FFFFFF',
  yellow: 'yellow',
  whaleBlue: '#218acd',
  crimsonRed: '#cd2121',
}

const SPACING_PX = 8

export const commonTheme = {
  spacing: (n: number) => `${n * SPACING_PX}px`,
}

export const lightTheme = {
  ...commonTheme,
  colors: {
    primary: COLORS_PALETTE.whaleBlue,
    secondary: COLORS_PALETTE.crimsonRed,
    text: COLORS_PALETTE.black,
    background: COLORS_PALETTE.white,
    gradient: 'linear-gradient(#39598A, #79D7ED)',
    buttonBorder: '#FFF',
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
