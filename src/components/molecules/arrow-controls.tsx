import ArrowLeft from '~/assets/images/icons/arrow-left.svg?react';
import ArrowRight from '~/assets/images/icons/arrow-right.svg?react';
import { FlexWrapper, IconButton } from '~/components/atoms/atoms.ts';
import { useSliderContext } from '~/context/slider';

const ArrowControls: React.FC = () => {
  const { changeSlide } = useSliderContext();

  return (
    <FlexWrapper gap="16">
      <IconButton>
        <ArrowLeft />
      </IconButton>
      <IconButton>
        <ArrowRight />
      </IconButton>
    </FlexWrapper>
  );
};

export { ArrowControls };
