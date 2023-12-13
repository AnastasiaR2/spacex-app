import styled from 'styled-components';

type Props = {
  as?: React.ReactNode;
};

const Button = styled.button<Props>`
  position: relative;
  width: 164px;
  height: 53px;
  padding: 12px 0;
  overflow: hidden;
  font-family: Syne, sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: var(--black);
  text-transform: uppercase;
  cursor: pointer;
  background-color: var(--blue);
  border: none;
  transition: transform 0.4s ease-in-out;
`;

export { Button };
