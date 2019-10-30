import styled from 'styled-components';

export default component => styled(component)`
  background-color: #ccc9dc;
  border-radius: 0 0 5px 5px;
  bottom: -1px;
  color: #324a5f;
  font-family: ${({ theme }) => theme.typography.vollkorn};
  font-size: 1rem;
  left: -1px;
  padding: 0.5rem 0;
  position: absolute;
  text-align: center;
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.25);
  width: calc(100% + 2px);
`;
