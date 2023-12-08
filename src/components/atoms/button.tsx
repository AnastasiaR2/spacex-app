import styled from 'styled-components';

type Properties = {};

const Button = styled.button<Properties>`
  width: 164px;
  height: 53px;
  padding: 12px 0px;
  color: #000000;
  font-family: 'Syne';
  font-weight: 500;
  text-transform: uppercase;
  font-size: 24px;
  background-color: #d3eaff;
  cursor: pointer;
  border: none;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:active {
    transform: translateY(10px);
  }
`;

export { Button };
