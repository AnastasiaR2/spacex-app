import styled from 'styled-components';

type Props = {
  backgroundImage: string;
  height: string;
};

const BackgroundContainer = styled.div<Props>`
  width: 100%;
  height: ${({ height }) => height};
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-color: var(--blue);
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export { BackgroundContainer };
