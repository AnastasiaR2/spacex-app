import {
  FavoritesBanner,
  FavoritesList,
} from '~/components/organisms/organisms.ts';
import { FavoritesTemplate } from '~/components/templates/templates.ts';

const Favorites = () => {
  return (
    <FavoritesTemplate>
      <FavoritesBanner />
      <FavoritesList />
    </FavoritesTemplate>
  );
};

export { Favorites };
