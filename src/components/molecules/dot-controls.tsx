import { Dot, FlexWrapper } from '~/components/atoms/atoms.ts';
import { useSliderContext } from '~/context/slider';

type Props = {
  color?: string;
};

const DotControls: React.FC<Props> = ({ color }) => {
  const { goToSlide, slidesCount, currentSlideIndex } = useSliderContext();

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(
        <Dot
          key={i}
          selected={i === currentSlideIndex}
          color={color}
          onClick={() => goToSlide(i)}
        />,
      );
    }
    return dots;
  };
  return <FlexWrapper gap="8">{renderDots()}</FlexWrapper>;
};

export { DotControls };
