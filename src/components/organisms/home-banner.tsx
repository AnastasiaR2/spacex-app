import styled from 'styled-components';

import { Title } from '~/components/atoms/atoms.ts';
import {
  BackgroundSlides,
  DotControls,
} from '~/components/molecules/molecules.ts';

const HomeTitle = styled(Title)`
  font-weight: 800;
  font-size: 48px;
  margin-top: 159px;

  & span {
    font-size: 310px;
  }
`;

const DotControlsWrapper = styled.div`
  /* position: absolute;
  top: 480px;
  left: 785px; */
`;

const HomeBanner = () => {
  return (
    <>
      <BackgroundSlides />
      <HomeTitle color="--white" as="h1">
        The space is waiting for <span>You</span>
      </HomeTitle>
      <DotControlsWrapper>
        <DotControls />
      </DotControlsWrapper>
    </>
  );
};

export { HomeBanner };
