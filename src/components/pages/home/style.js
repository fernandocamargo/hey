import styled from 'styled-components';

import Job from 'components/widgets/job/container';

export default component => styled(component)`
  h1 {
    color: #fff;
    font-family: ${({ theme }) => theme.typography.archivo};
    font-size: 3rem;
    text-align: center;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
  }

  ${Job} {
    margin-top: 2rem;
  }
`;
