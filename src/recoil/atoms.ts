import { atom } from 'recoil';

import { RocketWithIndex } from '~/libs/types/types.ts';

const favoritesListState = atom<RocketWithIndex[]>({
  key: 'favoritesListState',
  default: [],
});

export { favoritesListState };
