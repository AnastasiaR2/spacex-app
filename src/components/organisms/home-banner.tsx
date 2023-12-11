import styled from 'styled-components';

import Background1 from '~/assets/images/background-1.jpg';
import { BackgroundContainer, Title } from '~/components/atoms/atoms.ts';
import { DotControls } from '~/components/molecules/molecules.ts';

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
      <BackgroundContainer $backgroundImage={Background1} height="740px" />
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
