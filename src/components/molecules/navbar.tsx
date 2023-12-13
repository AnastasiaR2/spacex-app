import styled from 'styled-components';

import { Link } from '~/components/atoms/atoms.ts';
import { AppRoute } from '~/libs/enums/enums.ts';

const StyledNavbar = styled.nav`
  display: flex;
  gap: 32px;
  align-items: center;
`;

const NavbarLink = styled(Link)`
  position: relative;
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: var(--white);
  text-transform: uppercase;
  transition: 0.2s;

  &::before {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    content: '';
    background-color: var(--white);
    transition: 0.4s;
  }

  &.active {
    &::before {
      width: 100%;
    }
  }

  &:hover:not(.active) {
    &::before {
      width: 100%;
    }
  }
`;

const Navbar: React.FC = () => {
  const handleNavLinkClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };

  return (
    <StyledNavbar>
      <NavbarLink exact="true" to={AppRoute.ROOT}>
        Home
      </NavbarLink>
      <NavbarLink exact="true" to={AppRoute.TOURS} onClick={handleNavLinkClick}>
        Tours
      </NavbarLink>
      <NavbarLink exact="true" to={AppRoute.ABOUT} onClick={handleNavLinkClick}>
        About
      </NavbarLink>
      <NavbarLink exact="true" to={AppRoute.HELP} onClick={handleNavLinkClick}>
        Help
      </NavbarLink>
    </StyledNavbar>
  );
};

export { Navbar };
