import styled from 'styled-components';

export default component => styled(component)`
  font-family: ${({ theme }) => theme.typography.ibm};
  font-size: 0.85rem;
  padding: 2rem 0;
  text-align: center;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);

  &,
  a {
    color: #fff;
  }
`;
