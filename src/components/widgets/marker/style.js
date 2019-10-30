import styled from 'styled-components';

export default component => styled(component)`
  height: 2rem;
  position: relative;
  width: 2rem;

  &:before {
    border-right: 2rem solid transparent;
    border-top: 2rem solid #f4f4f8;
    content: '';
    display: block;
    left: 0;
    position: absolute;
    top: 0;
  }

  legend,
  dt {
    display: none;
  }

  label {
    cursor: pointer;
    display: inline-block;
    left: 0;
    position: absolute;
    font-size: 0;
    top: 0;

    &:after {
      color: #e6e6ea;
      content: '\\e838';
      display: block;
      font-family: ${({ theme }) => theme.typography.material};
      font-size: 1rem;
      transition: color 0.25s linear;
    }
  }

  input {
    position: absolute;
    z-index: -1;

    &:checked + label:after {
      color: #ffdf64;
    }
  }
`;
