import styled from 'styled-components';

import Background3 from '~/assets/images/background-3.jpg';
import { BackgroundContainer, Title } from '~/components/atoms/atoms.ts';

const FavoritesTitle = styled(Title)`
  font-weight: 800;
  font-size: 48px;
  margin-top: 140px;
`;

const FavoritesBanner = () => {
  return (
    <>
      <BackgroundContainer $backgroundImage={Background3} height="440px" />
      <FavoritesTitle color="--white">Favourites</FavoritesTitle>
    </>
  );
};

export { FavoritesBanner };
