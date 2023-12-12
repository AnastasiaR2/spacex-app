import { BackgroundContainer, Slider } from '~/components/atoms/atoms.ts';
import { DotControls } from '~/components/molecules/molecules.ts';
import { IMAGES_URLS } from '~/libs/constants/constants.ts';

const BackgroundSlider: React.FC = () => {
  const renderedSlides = [...IMAGES_URLS].map((item, index) => (
    <BackgroundContainer key={index} $backgroundImage={item} height="740px" />
  ));

  return (
    <>
      <Slider slides={renderedSlides} indicators={<DotControls />} />
    </>
  );
};

export { BackgroundSlider };
