import styled from 'styled-components';

import { Title } from '~/components/atoms/atoms.ts';
import { BackgroundSlider } from '~/components/molecules/molecules.ts';

const HomeTitle = styled(Title)`
  font-weight: 800;
  font-size: 48px;
  margin-top: 159px;

  & span {
    font-size: 310px;
  }
`;

const HomeBanner: React.FC = () => {
  return (
    <>
      <HomeTitle color="--white" as="h1">
        The space is waiting for <span>You</span>
      </HomeTitle>
      <BackgroundSlider></BackgroundSlider>
    </>
  );
};

export { HomeBanner };
