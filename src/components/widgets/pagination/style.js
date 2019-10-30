import styled from 'styled-components';

export default component => styled(component)`
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 1rem 0;
  margin-top: 2rem;

  h3 {
    display: none;
  }

  ul {
    display: inline-flex;
    justify-content: center;
    position: relative;

    &:before,
    &:after {
      background-color: #ffb627;
      content: '';
      display: block;
      height: 2px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100vw;
    }

    &:before {
      right: calc(100% + 1rem);
    }

    &:after {
      left: calc(100% + 1rem);
    }
  }
`;
