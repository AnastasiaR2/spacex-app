import styled from 'styled-components';

import ArrowLeft from '~/assets/images/icons/arrow-left.svg?react';
import ArrowRight from '~/assets/images/icons/arrow-right.svg?react';
import { FlexWrapper, IconButton } from '~/components/atoms/atoms.ts';
import { useSliderContext } from '~/context/slider';

const StyledArrowControls = styled(IconButton)`
  width: 44px;
  height: 44px;
`;

const ArrowControls: React.FC = () => {
  const { changeSlide } = useSliderContext();

  return (
    <FlexWrapper gap="16">
      <StyledArrowControls onClick={() => changeSlide(-1)}>
        <ArrowLeft />
      </StyledArrowControls>
      <StyledArrowControls onClick={() => changeSlide(1)}>
        <ArrowRight />
      </StyledArrowControls>
    </FlexWrapper>
  );
};

export { ArrowControls };
