import styled from 'styled-components';

import { Button, HeartIcon, IconButton } from '~/components/atoms/atoms.ts';
import { Logo, Navbar } from '~/components/molecules/molecules.ts';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 19px 80px;
  background-color: var(--dark-gray-48);
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navbar />
      <IconButton>
        <HeartIcon />
      </IconButton>
      <Button>Sign in</Button>
    </StyledHeader>
  );
};

export { Header };
