import styled from 'styled-components';

import { Button, FlexWrapper, Text } from '~/components/atoms/atoms.ts';
import { TourCard } from '~/components/molecules/molecules.ts';
import { useRecoilValue, useResetRecoilState } from '~/libs/hooks/hooks.ts';
import { favoritesListState } from '~/recoil/atoms.ts';
import { filteredFavoritesList } from '~/recoil/selectors.ts';

const StyledFavoritesList = styled.div`
  display: flex;
  flex-direction: column;
`;

const FavoriteListWrapper = styled(FlexWrapper)`
  flex-wrap: wrap;
  margin-top: 40px;
`;

const ClearAllButton = styled(Button)`
  background-color: transparent;
  text-transform: none;
  text-align: right;
  align-self: flex-end;
`;

const FavoritesList: React.FC = () => {
  const favoritesList = useRecoilValue(filteredFavoritesList);
  const handleFavoritesListReset = useResetRecoilState(favoritesListState);

  console.log(favoritesList);
  return (
    <StyledFavoritesList>
      <ClearAllButton as={Text} onClick={handleFavoritesListReset}>
        Clear All
      </ClearAllButton>
      <FavoriteListWrapper gap="24">
        {favoritesList.map((item) => (
          <TourCard key={item.id} index={item.index} rocket={item} />
        ))}
      </FavoriteListWrapper>
    </StyledFavoritesList>
  );
};

export { FavoritesList };
