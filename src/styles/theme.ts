export default {
  grid: {
    container: '120rem',
  },
  border: {
    radius: {
      xxsmall: '0.2rem',
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
      large: '1.8rem',
      xlarge: '2.4rem',
      xxlarge: '2.8rem',
      huge: '4.6rem',
    },
  },
  colors: {
    textPrimary: '#333333',
    textSecondary: '#999999',
    mainBg: '#EEEEEE',
    yellowBg: '#FFE600',
    white: '#fff',
    blue: ' #3483FA',
    blueDark: '#2968c8',
    blueMediumLight: '#a1c7f9',
    blueLight: '#c2d8f5',
  },
  spacings: {
    none: '0',
    xsmall: '0.4rem',
    small: '0.8rem',
    medium: '1.6rem',
    large: '2.4rem',
    xxlarge: '3.2rem',
  },
} as const;
