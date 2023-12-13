import { selector } from 'recoil';

import { favoritesListState } from '~/recoil/atoms.ts';

const filteredFavoritesList = selector({
  key: 'filteredFavoritesList',
  get: ({ get }) => {
    const list = get(favoritesListState);
    const uniqueIds = new Set();

    const filteredList = list.filter((item) => {
      if (!uniqueIds.has(item.id)) {
        uniqueIds.add(item.id);
        return true;
      }
      return false;
    });

    return filteredList;
  },
});

export { filteredFavoritesList };
