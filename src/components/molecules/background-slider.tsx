import styled from 'styled-components';

import { BackgroundContainer } from '~/components/atoms/atoms.ts';
import { DotControls } from '~/components/molecules/molecules.ts';
import { SliderContext } from '~/context/slider.ts';
import { BACKGROUND_IMAGES } from '~/libs/constants/constants.ts';
import { useSlider } from '~/libs/hooks/hooks.ts';

const DotControlsWrapper = styled.div`
  transform: translate(-45px, -195px);
`;

const BackgroundSlider: React.FC = () => {
  const slidesCount = BACKGROUND_IMAGES.length;

  const { currentSlideIndex, goToSlide, changeSlide } = useSlider({
    slidesCount,
    autoPlay: true,
  });

  const renderedSlides = BACKGROUND_IMAGES.map((_, index) => (
    <BackgroundContainer
      key={index}
      $backgroundImage={BACKGROUND_IMAGES[currentSlideIndex]}
      height="740px"
    />
  ));

  return (
    <SliderContext.Provider
      value={{ goToSlide, changeSlide, currentSlideIndex, slidesCount }}
    >
      {renderedSlides}
      <DotControlsWrapper>
        <DotControls color="--white" />
      </DotControlsWrapper>
    </SliderContext.Provider>
  );
};

export { BackgroundSlider };
