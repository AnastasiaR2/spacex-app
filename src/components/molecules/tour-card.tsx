import styled from 'styled-components';

import TrashBin from '~/assets/images/icons/trash-bin.svg?react';
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

type Props = {
  name: string;
  description: string;
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
  padding: 32px 32px 24px;
  flex-direction: column;
`;

const TourCardText = styled(Text)`
  display: -webkit-box;
  max-height: 106px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const TourCard: React.FC<Props> = ({ name, description, index }) => {
  const { isFavorites } = useIsFavoritesContext();

  const imageIndex = index % TOUR_IMAGES.length;

  return (
    <StyledTourCard>
      <Image src={TOUR_IMAGES[imageIndex]} alt={name} />
      <TourCardBody gap="16">
        <TourCardTitle>{name}</TourCardTitle>
        <TourCardText>{description}</TourCardText>
        <FlexWrapper gap="16">
          <TourCardButton>Buy</TourCardButton>
          <IconButton>{isFavorites ? <TrashBin /> : <HeartIcon />}</IconButton>
        </FlexWrapper>
      </TourCardBody>
    </StyledTourCard>
  );
};

export { TourCard };
