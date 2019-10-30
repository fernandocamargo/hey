import styled, { css } from 'styled-components';

const getColorBasedOnType = () => ({ employment_type: type }) =>
  ({
    full_time: '#2ec4b6',
    part_time: '#e71d36',
    contract: '#011627',
    internship: '#ff9f1c',
  }[type]);

const getIcon = content => css`
  content: "${content}";
  display: block;
  font-family: ${({ theme }) => theme.typography.material};
  font-size: 2.5rem;
`;

const getIconBasedOnType = () => ({ employment_type: type }) =>
  ({
    full_time: css`
      &:before {
        ${getIcon('\\e8f9')};
      }
    `,
    part_time: css`
      &:before {
        ${getIcon('\\e8f9')};
      }

      &:after {
        ${getIcon('\\e192')};
        color: #fff;
        font-size: 1.25rem;
        position: absolute;
        top: 50%;
        transform: translateY(calc(-50% - 4px));
      }
    `,
    contract: css`
      &:before {
        ${getIcon('\\e878')};
      }
    `,
    internship: css`
      &:before {
        ${getIcon('\\e80c')};
      }
    `,
  }[type]);

export default component => styled(component)`
  dd {
    align-items: center;
    border: solid 5px ${getColorBasedOnType()};
    border-radius: 50%;
    color: ${getColorBasedOnType()};
    display: inline-flex;
    flex-direction: column;
    font-family: ${({ theme }) => theme.typography.source};
    font-size: 0.6rem;
    height: 5rem;
    justify-content: center;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    width: 5rem;

    ${getIconBasedOnType()};
  }
`;
