import styled from 'styled-components';

type Props = {
  color?: string;
};

const Title = styled.h2<Props>`
  font-family: Syne, sans-serif;
  color: ${({ color = 'var(--dark-gray)' }) => `var(${color})`};
  text-align: center;
  text-transform: uppercase;
`;

export { Title };
