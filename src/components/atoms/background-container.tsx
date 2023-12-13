import styled from 'styled-components';

type Props = {
  $backgroundImage: string;
  height: string;
};

const BackgroundContainer = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: ${({ height }) => height};
  background-color: var(--blue);
  background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
  background-size: cover;
  transition: 1s ease-in-out;
`;

export { BackgroundContainer };
