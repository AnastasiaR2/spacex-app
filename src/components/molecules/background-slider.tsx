import styled from 'styled-components';

import { BackgroundContainer } from '~/components/atoms/atoms.ts';
import { DotControls } from '~/components/molecules/molecules.ts';
import { SliderContext } from '~/context/slider.ts';
import { IMAGES_URLS } from '~/libs/constants/constants.ts';
import { useSlider } from '~/libs/hooks/hooks.ts';

const DotControlsWrapper = styled.div`
  transform: translate(-45px, -195px);
`;

const BackgroundSlider: React.FC = () => {
  const slidesCount = IMAGES_URLS.length;

  const { currentSlideIndex, goToSlide } = useSlider({
    slidesCount,
    autoPlay: false,
  });

  const renderedSlides = IMAGES_URLS.map((_, index) => (
    <BackgroundContainer
      key={index}
      $backgroundImage={IMAGES_URLS[currentSlideIndex]}
      height="740px"
    />
  ));

  return (
    <SliderContext.Provider
      value={{ goToSlide, currentSlideIndex, slidesCount }}
    >
      {renderedSlides}
      <DotControlsWrapper>
        <DotControls color="--white" />
      </DotControlsWrapper>
    </SliderContext.Provider>
  );
};

export { BackgroundSlider };
