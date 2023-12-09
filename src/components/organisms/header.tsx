import styled from 'styled-components';

import { Button, HeartIcon, IconButton } from '~/components/atoms/atoms.ts';

type Properties = {
  isFavorite?: boolean;
};

const StyledHeader = styled.header<Properties>`
  display: flex;
  justify-content: flex-end;
  padding: 19px 80px;
  background-color: var(--dark-gray-48);
`;

const Header: React.FC<Properties> = ({ isFavorite }) => {
  return (
    <StyledHeader isFavorite={isFavorite}>
      <IconButton>
        <HeartIcon />
      </IconButton>
      <Button>Sign in</Button>
    </StyledHeader>
  );
};

export { Header };
