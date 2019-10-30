import styled from 'styled-components';

export default component => styled(component)`
  &:not(:first-child) {
    margin-left: 2rem;

    a:before {
      background-color: #ffb627;
      border-radius: 50%;
      display: block;
      content: '';
      height: 2.5px;
      position: absolute;
      right: calc(100% + 1rem);
      top: 50%;
      transform: translateY(-50%);
      width: 2.5px;
    }
  }

  a {
    align-items: center;
    background-color: #ffc971;
    border-radius: 50%;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.1);
    color: #e2711d;
    display: flex;
    font-family: ${({ theme }) => theme.typography.archivo};
    font-size: 1rem;
    height: 2rem;
    justify-content: center;
    position: relative;
    text-decoration: none;
    width: 2rem;

    span {
      display: none;
    }
  }

  &[aria-current='page'] a {
    background-color: #cc5803;
    color: #ffc971;
  }
`;
