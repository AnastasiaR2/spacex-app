import { BackgroundContainer } from '~/components/atoms/atoms.ts';
import { IMAGES_URLS } from '~/libs/constants/constants.ts';

const BackgroundSlides = () =>
  [...IMAGES_URLS].map((item, index) => (
    <BackgroundContainer key={index} $backgroundImage={item} height="740px" />
  ));

export { BackgroundSlides };
