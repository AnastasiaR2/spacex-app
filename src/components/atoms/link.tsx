import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  exact?: string;
};

const Link = styled(NavLink)<Props>`
  text-decoration: none;
`;

export { Link };
