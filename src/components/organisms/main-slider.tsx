import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import { FlexWrapper, Title } from '~/components/atoms/atoms.ts';
import {
  ArrowControls,
  DotControls,
} from '~/components/molecules/molecules.ts';
import { SliderContext } from '~/context/slider.ts';
import { ROCKETS_QUERY } from '~/libs/constants/constants.ts';
import { renderSlides } from '~/libs/helpers/helpers.ts';
import { useSlider } from '~/libs/hooks/hooks.ts';

const ITEMS_PER_SLIDE = 3;

const StyledMainSlider = styled.div`
  min-width: 1281px;
`;

const MainSliderTitle = styled(Title)`
  font-size: 32px;
  font-weight: 800;
`;

const SlidesWrapper = styled.div`
  display: flex;
  margin: 40px 0;
  overflow: hidden;
`;

const MainSlider: React.FC = () => {
  const { loading, data } = useQuery(ROCKETS_QUERY);

  const rockets = data?.rockets ?? [];

  const toursToDisplay = [...rockets, ...rockets, ...rockets.slice(0, 1)];

  const slidesCount = Math.ceil(toursToDisplay.length / ITEMS_PER_SLIDE);

  const { changeSlide, goToSlide, currentSlideIndex } = useSlider({
    slidesCount,
  });

  return (
    <StyledMainSlider id="toursSection">
      {loading ? (
        <></>
      ) : (
        <SliderContext.Provider
          value={{ changeSlide, goToSlide, currentSlideIndex, slidesCount }}
        >
          <FlexWrapper gap="712">
            <MainSliderTitle>Popular Tours</MainSliderTitle>
            <ArrowControls />
          </FlexWrapper>
          <SlidesWrapper>
            {renderSlides(toursToDisplay, currentSlideIndex)}
          </SlidesWrapper>
          <DotControls />
        </SliderContext.Provider>
      )}
    </StyledMainSlider>
  );
};

export { MainSlider };
