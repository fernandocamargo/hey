import styled from 'styled-components';

import logo from 'assets/svg/logo.svg';

export default component => styled(component)`
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: space-between;
  left: 50%;
  position: fixed;
  top: 0;
  transform: translateX(-50%);
  width: ${({ theme }) => theme.viewport.width.regular};
  z-index: 1;

  &:before {
    background-color: #2b2d42;
    content: '';
    display: block;
    height: 100%;
    left: ${({ theme }) =>
      `calc(((100vw - ${theme.viewport.width.regular}) / 2) * -1)`};
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: -2;
  }

  & + main {
    margin-top: 15vh;
  }

  h2 a {
    background: url(${logo});
    background-size: cover;
    display: block;
    font-size: 0;
    height: 25px;
    margin: 0.5rem 0;
    width: 94px;
  }

  ${({ theme }) =>
    theme.applyWhenWide(`
      width: ${theme.viewport.width.wide};

      &:before {
        left: calc(((100vw - ${theme.viewport.width.wide}) / 2) * -1);
      }
    `)}
`;
