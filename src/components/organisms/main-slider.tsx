import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import { FlexWrapper, Title } from '~/components/atoms/atoms.ts';
import {
  ArrowControls,
  DotControls,
  TourCard,
} from '~/components/molecules/molecules.ts';
import { SliderContext } from '~/context/slider.ts';
import { ROCKETS_QUERY } from '~/libs/constants/constants.ts';
import { useSlider } from '~/libs/hooks/hooks.ts';

const StyledMainSlider = styled.div`
  min-width: 1281px;
`;

const MainSliderTitle = styled(Title)`
  font-size: 32px;
  font-weight: 800;
`;

type Rocket = {
  id: number;
  name: string;
  description: string;
};

const MainSlider: React.FC = () => {
  const { loading, data } = useQuery(ROCKETS_QUERY);

  const rockets = data?.rockets;

  const renderTourCards = () => {
    const divs = [];

    for (let i = 0; i < rockets.length; i += 3) {
      const divKey = `div-${i / 3 + 1}`;
      const divContent = rockets
        .slice(i, i + 3)
        .map((item: Rocket, index: number) => (
          <TourCard
            key={`card-${i + index}`}
            index={i + index}
            name={item.name}
            description={item.description}
          />
        ));

      divs.push(
        <div
          style={{
            display: 'flex',
            justifyItems: 'flex-start',
            gap: '24px',
            transform: `translateX(-${currentSlideIndex * 100}%)`,
            flex: '0 0 100%',
            transition: 'transform 0.3s ease-in-out',
          }}
          key={divKey}
        >
          {divContent}
        </div>,
      );
    }

    return divs;
  };

  // const slidesArr = renderTourCards();

  // const slidesCount = slidesArr.length;
  const slidesCount = 3;

  const { changeSlide, goToSlide, currentSlideIndex } = useSlider({
    slidesCount,
  });

  return (
    <StyledMainSlider>
      <SliderContext.Provider
        value={{ changeSlide, goToSlide, currentSlideIndex, slidesCount }}
      >
        <FlexWrapper gap="712">
          <MainSliderTitle>Popular Tours</MainSliderTitle>
          <ArrowControls />
        </FlexWrapper>
        <div
          style={{
            display: 'flex',
            overflow: 'hidden',
            margin: '40px 0px',
          }}
        >
          {loading ? <></> : rockets && renderTourCards()}
        </div>
        <DotControls />
      </SliderContext.Provider>
    </StyledMainSlider>
  );
};

export { MainSlider };
