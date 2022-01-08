import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
  button: {
    textTransform: 'none',
  },

  fontFamily: 'Roboto',
  fontSize: 25,
  htmlFontSize: 25,
  fontWeightLight: 200,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 800,
  allVariants: {
    letterSpacing: '-0.015em',
    color: '#3E3E3E',
  },
  h1: {
    fontSize: '6rem',
    fontWeight: 400,
    lineHeight: 1.167,
  },
  h2: {
    fontSize: '3.75rem',
    fontWeight: 400,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: '2.6rem', //default 3rem
    fontWeight: 600,
    lineHeight: 1.167,
  },
  h4: {
    fontSize: '2.125rem',
    fontWeight: 600,
    lineHeight: 1.235,
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.334,
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.6,
  },

  subtitle1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.75,
  },
  subtitle2: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.571,
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.2,
  },
  body2: {
    fontSize: '0.7rem',
    fontWeight: 400,
    lineHeight: 1.2,
  },
  caption: {
    fontSize: '0.8rem',
    fontWeight: 400,
    lineHeight: 1.2,
  },
};

export default typography;
