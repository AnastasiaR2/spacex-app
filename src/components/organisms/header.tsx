import styled from 'styled-components';

import { Button, HeartIcon } from '~/components/components.ts';

type Properties = {
  isFavorite?: boolean;
};

const StyledHeader = styled.header<Properties>`
  background-color: rgba(30, 30, 30, 0.48);
  display: flex;
  justify-content: flex-end;
`;

const Header: React.FC<Properties> = ({ isFavorite }) => {
  return (
    <StyledHeader isFavorite={isFavorite}>
      <Button>Sign in</Button>
      <Button>
        <HeartIcon />
      </Button>
    </StyledHeader>
  );
};

export { Header };
