import { string } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Footer = ({ className }) => (
  <footer className={className}>
    <span>Built with </span>
    <a
      href="https://www.gatsbyjs.org"
      target="_blank"
      rel="noopener noreferrer"
      title="Gatsby"
    >
      Gatsby
    </a>
    <span>. Generated with </span>
    <a
      href="http://marak.github.io/faker.js"
      target="_blank"
      rel="noopener noreferrer"
      title="Faker"
    >
      Faker
    </a>
    <span>. Inspired by </span>
    <a
      href="http://coolors.co"
      target="_blank"
      rel="noopener noreferrer"
      title="Coolors.co"
    >
      Coolors.co
    </a>
    <span>.</span>
  </footer>
);

Footer.propTypes = {
  className: string.isRequired,
};

Footer.defaultProps = {};

export default withStyle(Footer);
