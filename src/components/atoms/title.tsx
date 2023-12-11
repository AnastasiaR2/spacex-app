import styled from 'styled-components';

type Props = {
  color?: string;
};

const Title = styled.h2<Props>`
  color: ${({ color = 'var(--dark-gray)' }) => `var(${color})`};
  font-family: Syne;
  text-transform: uppercase;
  text-align: center;
`;

export { Title };
