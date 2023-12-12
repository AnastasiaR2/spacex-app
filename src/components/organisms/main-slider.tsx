import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

import { FlexWrapper, Title } from '~/components/atoms/atoms.ts';
import {
  ArrowControls,
  DotControls,
  TourCard,
} from '~/components/molecules/molecules.ts';
import { SliderContext } from '~/context/slider.ts';
import { useSlider } from '~/libs/hooks/hooks.ts';

const ROCKETS_QUERY = gql`
  query RocketsQuery {
    rockets {
      id
      description
      name
    }
  }
`;

const StyledMainSlider = styled.div`
  min-width: 1281px;
  overflow: hidden;
  position: relative;
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

  const rockets = data?.rockets ?? [];

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
  const slidesCount = 2;

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
            width: '100%',
            display: 'flex',
            overflow: 'hidden',
            height: '100%',
            position: 'relative',
            transition: 'transform 0.5s ease-in-out',
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
