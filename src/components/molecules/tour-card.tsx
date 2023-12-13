import styled from 'styled-components';

import {
  Button,
  FlexWrapper,
  HeartIcon,
  IconButton,
  Image,
  Text,
  Title,
} from '~/components/atoms/atoms.ts';
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

const TourCardBody = styled.div`
  margin: 32px 32px 24px;
`;

const TourCard: React.FC<Props> = ({ name, description, index }) => {
  const imageIndex = index % TOUR_IMAGES.length;

  return (
    <StyledTourCard>
      <Image src={TOUR_IMAGES[imageIndex]} alt={name} />
      <TourCardBody>
        <TourCardTitle>{name}</TourCardTitle>
        <Text>{description}</Text>
        <FlexWrapper gap="16">
          <TourCardButton>Buy</TourCardButton>
          <IconButton>
            <HeartIcon />
          </IconButton>
        </FlexWrapper>
      </TourCardBody>
    </StyledTourCard>
  );
};

export { TourCard };
