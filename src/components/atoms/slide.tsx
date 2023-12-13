import styled from 'styled-components';

type Props = {
  $currentSlideIndex: number;
};

const Slide = styled.div<Props>`
  display: flex;
  justify-items: flex-start;
  gap: 24px;
  transform: ${({ $currentSlideIndex }) =>
    `translateX(-${$currentSlideIndex * 100}%)`};
  flex: 0 0 100%;
  transition: transform 0.3s ease-in-out;
`;

export { Slide };
