import { Slide } from '~/components/atoms/atoms.ts';
import { TourCard } from '~/components/molecules/molecules.ts';
import { type Rocket } from '~/libs/types/types.ts';

const renderSlides = (
  arr: Rocket[],
  currentSlideIndex: number,
): React.ReactNode[] => {
  const sliderItems = [];
  for (let i = 0; i < arr.length; i += 3) {
    const slideKey = `slide-${i / 3 + 1}`;
    const divContent = arr
      .slice(i, i + 3)
      .map((item: Rocket, index: number) => (
        <TourCard
          key={`card-${i + index}`}
          index={i + index}
          name={item.name}
          description={item.description}
        />
      ));

    sliderItems.push(
      <Slide $currentSlideIndex={currentSlideIndex} key={slideKey}>
        {divContent}
      </Slide>,
    );
  }
  return sliderItems;
};

export { renderSlides };
