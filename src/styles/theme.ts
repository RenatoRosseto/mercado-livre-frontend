export default {
  grid: {
    container: '120rem',
  },
  border: {
    radius: {
      xsmall: '0.4rem',
      small: '0.6rem',
      medium: '0.8rem',
      circle: '50%',
    },
  },
  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxsmall: '0.8rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
    },
  },
  colors: {
    textPrimary: '#030517',
    textSecondary: '#767676',
    mainBg: '#ebebeb',
    yellowBg: '#ffe600',
    white: '#fff',
    blue: ' #3483fa',
    blueDark: '#2968c8',
    blueMediumLight: '#a1c7f9',
    blueLight: '#c2d8f5',
  },
  spacings: {
    xsmall: '0.4rem',
    small: '0.8rem',
  },
} as const;
