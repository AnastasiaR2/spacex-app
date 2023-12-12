import styled from 'styled-components';

import { FlexWrapper, Title } from '~/components/atoms/atoms.ts';
import { BackgroundSlider } from '~/components/molecules/molecules.ts';

const StyledHomeBanner = styled(FlexWrapper)`
  align-items: center;
  flex-direction: column;
`;

const HomeTitle = styled(Title)`
  font-weight: 800;
  font-size: 48px;
  width: fit-content;
  margin-top: 159px;

  & span {
    font-size: 310px;
  }
`;

const HomeBanner: React.FC = () => {
  return (
    <StyledHomeBanner>
      <HomeTitle color="--white" as="h1">
        The space is waiting for <span>You</span>
      </HomeTitle>
      <BackgroundSlider />
    </StyledHomeBanner>
  );
};

export { HomeBanner };
