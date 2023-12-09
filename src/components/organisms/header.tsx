import styled from 'styled-components';

import {
  Button,
  FlexWrapper,
  HeartIcon,
  IconButton,
  Link,
} from '~/components/atoms/atoms.ts';
import { Logo, Navbar } from '~/components/molecules/molecules.ts';
import { AppRoute } from '~/libs/enums/enums.ts';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 35px;
  padding: 19px 80px;
  background-color: var(--dark-gray-48);
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navbar />
      <FlexWrapper gap="12">
        <IconButton as={Link} to={AppRoute.FAVORITES}>
          <HeartIcon />
        </IconButton>
        <Button>Sign in</Button>
      </FlexWrapper>
    </StyledHeader>
  );
};

export { Header };
