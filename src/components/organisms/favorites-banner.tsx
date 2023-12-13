import styled from 'styled-components';

import { BackgroundContainer, Title } from '~/components/atoms/atoms.ts';
import { BACKGROUND_IMAGES } from '~/libs/constants/constants.ts';

const FavoritesTitle = styled(Title)`
  font-size: 48px;
  font-weight: 800;
`;

const FavoritesBanner = () => {
  return (
    <>
      <BackgroundContainer
        $backgroundImage={BACKGROUND_IMAGES[2]}
        height="440px"
      />
      <FavoritesTitle color="--white">Favourites</FavoritesTitle>
    </>
  );
};

export { FavoritesBanner };
