import styled from 'styled-components';

import ArrowDown from '~/assets/images/icons/arrow-down.svg?react';
import { Button, FlexWrapper, Text, Title } from '~/components/atoms/atoms.ts';
import { BackgroundSlider } from '~/components/molecules/molecules.ts';

const StyledHomeBanner = styled(FlexWrapper)`
  align-items: center;
  flex-direction: column;
`;

const HomeTitle = styled(Title)`
  font-weight: 800;
  font-size: 48px;
  width: fit-content;

  & span {
    font-size: 310px;
  }
`;

const ExploreToursButton = styled(Button)`
  background-color: transparent;
  text-transform: none;
  font-size: 32px;
  color: var(--white);
  text-shadow: 0px 4px 4px var(--black-25);
  width: 240px;
  transform: translateY(-50px);

  & svg {
    margin-left: 18px;
  }
`;

const HomeBanner: React.FC = () => {
  const toursSection = document.querySelector('#toursSection');

  const ScrollToToursSection = () => {
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledHomeBanner>
      <HomeTitle color="--white" as="h1">
        The space is waiting for <span>You</span>
      </HomeTitle>
      <BackgroundSlider />
      <ExploreToursButton as={Text} onClick={ScrollToToursSection}>
        Explore tours
        <ArrowDown />
      </ExploreToursButton>
    </StyledHomeBanner>
  );
};

export { HomeBanner };
