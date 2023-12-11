import styled from 'styled-components';

import Background1 from '~/assets/images/background-1.jpg';
import {
  BackgroundContainer,
  Dot,
  FlexWrapper,
  Title,
} from '~/components/atoms/atoms.ts';

const HomeTitle = styled(Title)`
  font-weight: 800;
  font-size: 48px;
  margin-top: 159px;

  & span {
    font-size: 310px;
  }
`;

const HomeBanner = () => {
  return (
    <>
      <BackgroundContainer $backgroundImage={Background1} height="740px" />
      <HomeTitle color="--white" as="h1">
        The space is waiting for <span>You</span>
      </HomeTitle>
      <FlexWrapper gap="8">
        <Dot selected={true} color="--white" />
        <Dot selected={false} color="--white" />
      </FlexWrapper>
    </>
  );
};

export { HomeBanner };
