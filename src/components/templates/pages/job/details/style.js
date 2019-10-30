import styled from 'styled-components';

export default component => styled(component)`
  h1 {
    ${({ details: { employment_type: type }, theme }) =>
      theme.getTitleBy(type)};
  }
`;
