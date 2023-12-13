import { createContext, useContext } from 'react';

type isFavoritesValue = {
  isFavorites: boolean;
};
const isFavoritesContext = createContext<isFavoritesValue | null>(null);

const useIsFavoritesContext = () => {
  const context = useContext(isFavoritesContext);
  if (!context) {
    throw new Error(
      'useIsFavorites must be used within a <IsFavoritesContext.Provider>',
    );
  }
  return context;
};

export { isFavoritesContext, useIsFavoritesContext };
