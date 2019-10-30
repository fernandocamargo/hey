import styled from 'styled-components';

export default component => styled(component)`
  display: none;

  legend {
    display: none;
  }

  div {
    display: flex;
  }

  dl {
    &:not(:first-of-type) {
      margin-left: 1rem;
    }
  }

  dt {
    text-align: center;
  }

  label {
    font-family: ${({ theme }) => theme.typography.open};
    font-size: 0.6rem;
    cursor: pointer;
    text-transform: uppercase;
  }

  input[type='text'],
  select {
    display: block;
    width: 100%;
  }
`;
