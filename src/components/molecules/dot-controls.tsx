import styled from 'styled-components';

import { Dot, FlexWrapper } from '~/components/atoms/atoms.ts';
import { useSliderContext } from '~/context/slider';

type Props = {
  color?: string;
};

const DotWrapper = styled(FlexWrapper)`
  justify-content: center;
`;

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
  return <DotWrapper gap="8">{renderDots()}</DotWrapper>;
};

export { DotControls };
