import styled from 'styled-components';

export default component => styled(component)`
  color: #bdbea9;
  font-family: ${({ theme }) => theme.typography.ibm};
  text-align: justify;
  margin: 2rem 0;

  p:not(:first-of-type) {
    margin-top: 1rem;
  }
`;
