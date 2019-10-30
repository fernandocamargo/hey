import styled from 'styled-components';

import { Type } from '../fragments';

export default component => styled(component)`
  background-color: #fdfffc;
  border: solid 1px rgba(0, 0, 0, 0.075);
  border-radius: 5px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.1);
  padding: 1rem calc(7rem + 10px) 3.25rem 1rem;
  position: relative;

  ${Type} {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  & > dl {
    dt {
      display: none;
    }
  }
`;
