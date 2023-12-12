import styled from 'styled-components';

import { Title } from '~/components/atoms/atoms.ts';
import { ArrowControls } from '~/components/molecules/molecules.ts';

const MainSliderTitle = styled(Title)`
  font-size: 32px;
  font-weight: 800;
`;

const MainSlider: React.FC = () => {
  return (
    <>
      <MainSliderTitle>Popular Tours</MainSliderTitle>
    </>
  );
};

export { MainSlider };
