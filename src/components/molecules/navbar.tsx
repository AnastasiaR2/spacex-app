import styled from 'styled-components';

import { Link } from '~/components/atoms/atoms.ts';
import { AppRoute } from '~/libs/enums/enums.ts';

const StyledNavbar = styled.nav`
  display: flex;
  gap: 32px;
  align-items: center;
`;

type Properties = {
  exact?: boolean;
  disabled?: boolean;
};

const NavbarLink = styled(Link)<Properties>`
  color: var(--white);
  font-family: Lato;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  transition: 0.2s;
  position: relative;
  &::before {
    content: '';
    height: 1px;
    width: 0;
    left: 0;
    bottom: -4px;
    position: absolute;
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

const Navbar = () => {
  const handleNavLinkClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };

  return (
    <StyledNavbar>
      <NavbarLink exact to={AppRoute.ROOT}>
        Home
      </NavbarLink>
      <NavbarLink exact to={AppRoute.TOURS} onClick={handleNavLinkClick}>
        Tours
      </NavbarLink>
      <NavbarLink exact to={AppRoute.ABOUT} onClick={handleNavLinkClick}>
        About
      </NavbarLink>
      <NavbarLink exact to={AppRoute.HELP} onClick={handleNavLinkClick}>
        Help
      </NavbarLink>
    </StyledNavbar>
  );
};

export { Navbar };
