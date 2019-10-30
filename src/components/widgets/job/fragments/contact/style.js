import styled from 'styled-components';

export default component => styled(component)`
  padding: 1rem;

  dd {
    display: flex;
    justify-content: space-around;
  }

  a {
    background-color: #f0dfad;
    border-radius: 5px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.1);
    font-family: ${({ theme }) => theme.typography.archivo};
    color: rgba(31, 45, 61, 0.2);
    display: inline-block;
    font-size: 0.8rem;
    padding: 0.5rem 1rem 0.5rem 2rem;
    position: relative;
    text-decoration: none;
    text-transform: lowercase;

    &:before {
      display: inline-block;
      font-family: ${({ theme }) => theme.typography.material};
      font-size: 1.25rem;
      left: 0.5rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  dl.website a:before {
    content: '\\e157';
  }

  dl.phone a:before {
    content: '\\e61d';
  }

  dl.email a:before {
    content: '\\e0be';
  }
`;
