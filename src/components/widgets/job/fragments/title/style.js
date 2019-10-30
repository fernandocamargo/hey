import styled from 'styled-components';

export default component => styled(component)`
  a {
    ${({ employment_type: type, theme }) => theme.getTitleBy(type)};
  }
`;
