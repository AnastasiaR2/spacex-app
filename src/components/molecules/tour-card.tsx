import styled from 'styled-components';

import TrashBinIcon from '~/assets/images/icons/trash-bin.svg?react';
import {
  Button,
  FlexWrapper,
  HeartIcon,
  IconButton,
  Image,
  Text,
  Title,
} from '~/components/atoms/atoms.ts';
import { useIsFavoritesContext } from '~/context/is-favorites.ts';
import { TOUR_IMAGES } from '~/libs/constants/constants.ts';
import { useRecoilState } from '~/libs/hooks/hooks.ts';
import { type Rocket } from '~/libs/types/types.ts';
import { favoritesListState } from '~/recoil/atoms';

type Props = {
  rocket: Rocket;
  index: number;
};

const StyledTourCard = styled.div`
  width: 411px;
  height: 572px;
  border: 1px solid var(--blue);
`;

const TourCardTitle = styled(Title)`
  font-size: 24px;
  font-weight: 700;
`;

const TourCardButton = styled(Button)`
  width: 278px;
`;

const TourCardBody = styled(FlexWrapper)`
  flex-direction: column;
  padding: 32px 32px 24px;
`;

const TourCardText = styled(Text)`
  display: -webkit-box;
  max-height: 106px;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const TourCard: React.FC<Props> = ({ rocket, index }) => {
  const { isFavorites } = useIsFavoritesContext();
  const { name, description, id } = rocket;

  const [favoritesList, setFavoritesList] = useRecoilState(favoritesListState);

  const handleAddToFavorites = () => {
    setFavoritesList([...favoritesList, { id, name, description, index }]);
  };

  const handleDeleteFromFavorites = () => {
    setFavoritesList(favoritesList.filter((item) => item.id !== id));
  };

  const imageIndex = index % TOUR_IMAGES.length;

  return (
    <StyledTourCard>
      <Image src={TOUR_IMAGES[imageIndex]} alt={name} />
      <TourCardBody gap="16">
        <TourCardTitle>{name}</TourCardTitle>
        <TourCardText>{description}</TourCardText>
        <FlexWrapper gap="16">
          <TourCardButton>Buy</TourCardButton>
          {isFavorites ? (
            <IconButton onClick={handleDeleteFromFavorites}>
              <TrashBinIcon />
            </IconButton>
          ) : (
            <IconButton onClick={handleAddToFavorites}>
              <HeartIcon />
            </IconButton>
          )}
        </FlexWrapper>
      </TourCardBody>
    </StyledTourCard>
  );
};

export { TourCard };
