import styled from 'styled-components';

import Icon from '~/assets/images/icons/heart.svg?react';

type Props = {
  isFavorites?: boolean;
};

const HeartIcon = styled(Icon)<Props>`
  fill: ${({ isFavorites }) =>
    isFavorites ? 'var(--white)' : 'var(--dark-gray)'};
`;

export { HeartIcon };
