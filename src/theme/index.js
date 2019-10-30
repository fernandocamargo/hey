import { css } from 'styled-components';

const getColorBasedOnType = type =>
  ({
    full_time: '#2ec4b6',
    part_time: '#e71d36',
    contract: '#011627',
    internship: '#ff9f1c',
  }[type]);

export default {
  viewport: {
    width: {
      regular: 'calc(100vw - 2rem)',
      wide: '75vw',
    },
  },
  typography: {
    archivo: "'Archivo', sans-serif",
    lato: "'Lato', sans-serif",
    material: "'Material Icons'",
    open: "'Open Sans', sans-serif",
    roboto: "'Roboto', sans-serif",
    source: "'Source Sans Pro', sans-serif",
    vollkorn: "'Vollkorn', serif",
    ibm: "'IBM Plex Sans', serif",
  },
  getTitleBy: function(type) {
    return css`
      background-color: ${getColorBasedOnType(type)};
      color: #fff;
      display: inline-block;
      font-family: ${this.typography.vollkorn};
      font-size: 2rem;
      padding: 0.25rem 1rem;
      text-decoration: none;
    `;
  },
  applyWhenWide: function(rules) {
    return css`
      @media (min-width: 1024px) {
        ${rules}
      }
    `;
  },
};
