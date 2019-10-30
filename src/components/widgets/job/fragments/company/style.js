import styled from 'styled-components';

export default component => styled(component)`
  dd {
    background-color: #f5e6e8;
    color: #5f7367;
    display: inline-block;
    font-family: ${({ theme }) => theme.typography.source};
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
  }
`;
