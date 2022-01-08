import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle(({ theme }) => ({
  html: {
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 22,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 25,
    },
  },
  body: {
    margin: 0,
    padding: 0,
    lineHeight: 1.2 /* TODO: check it with responsiveFontSizes */,
  },
  '#root': {},
}));
