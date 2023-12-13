import styled from 'styled-components';

type Props = {
  $currentSlideIndex: number;
};

const Slide = styled.div<Props>`
  display: flex;
  flex: 0 0 100%;
  gap: 24px;
  justify-items: flex-start;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $currentSlideIndex }) =>
    `translateX(-${$currentSlideIndex * 100}%)`};
`;

export { Slide };
