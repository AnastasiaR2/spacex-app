import { atom } from 'recoil';

import { Rocket } from '~/libs/types/types.ts';

const favoritesListState = atom<Rocket[]>({
  key: 'favoritesListState',
  default: [],
});

export { favoritesListState };
