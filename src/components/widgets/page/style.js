import styled from 'styled-components';

export default component => styled(component)`
  margin: 0 1rem;
  transition: margin 0.1s linear, width 0.1s linear;
  width: ${({ theme }) => theme.viewport.width.regular};

  ${({ theme }) =>
    theme.applyWhenWide(`
      margin: 0 auto;
      width: ${theme.viewport.width.wide};
    `)}
`;
