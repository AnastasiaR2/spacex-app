import styled from 'styled-components';

import ArrowDown from '~/assets/images/icons/arrow-down.svg?react';
import { Button, FlexWrapper, Text, Title } from '~/components/atoms/atoms.ts';
import { BackgroundSlider } from '~/components/molecules/molecules.ts';

const StyledHomeBanner = styled(FlexWrapper)`
  flex-direction: column;
  align-items: center;
`;

const HomeTitle = styled(Title)`
  width: fit-content;
  font-size: 48px;
  font-weight: 800;

  & span {
    font-size: 310px;
  }
`;

const ExploreToursButton = styled(Button)`
  width: 240px;
  font-size: 32px;
  color: var(--white);
  text-shadow: 0 4px 4px var(--black-25);
  text-transform: none;
  background-color: transparent;
  transform: translateY(-50px);

  & svg {
    margin-left: 18px;
  }
`;

const HomeBanner: React.FC = () => {
  const ScrollToToursSection = () => {
    const toursSection = document.querySelector('#toursSection');
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
