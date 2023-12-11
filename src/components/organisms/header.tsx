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
import { useLocation } from '~/libs/hooks/hooks.ts';

type FavoritesButtonProps = {
  $isFavorites?: boolean;
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 35px;
  padding: 19px 80px;
  background-color: var(--dark-gray-48);
`;

const SignInButton = styled(Button)`
  &:active {
    transform: translateY(10px);
  }
`;

const FavoritesButton = styled(IconButton)<FavoritesButtonProps>`
  background-color: ${({ $isFavorites }) =>
    $isFavorites ? 'var(--pink)' : 'var(--light-gray)'};
`;

const Header = () => {
  const location = useLocation();

  const isFavorites = location.pathname === AppRoute.FAVORITES;

  return (
    <StyledHeader>
      <Logo />
      <Navbar />
      <FlexWrapper gap="12">
        <FavoritesButton
          $isFavorites={isFavorites}
          as={Link}
          to={AppRoute.FAVORITES}
        >
          <HeartIcon $isFavorites={isFavorites} />
        </FavoritesButton>
        <SignInButton>Sign in</SignInButton>
      </FlexWrapper>
    </StyledHeader>
  );
};

export { Header };
