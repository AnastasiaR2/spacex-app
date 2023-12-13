import { TourCard } from '~/components/molecules/molecules.ts';
import { useRecoilValue } from '~/libs/hooks/hooks.ts';
import { favoritesListState } from '~/recoil/atoms';

const FavoritesList: React.FC = () => {
  const favoritesList = useRecoilValue(favoritesListState);
  console.log(favoritesList);
  return (
    <>
      {favoritesList.map((item) => (
        <TourCard key={item.id} index={item.index} rocket={item} />
      ))}
    </>
  );
};

export { FavoritesList };
