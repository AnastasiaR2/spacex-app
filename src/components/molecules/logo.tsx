import styled from 'styled-components';

import SpacexLogo from '~/assets/images/spacex-logo.png';
import { Image, Link } from '~/components/atoms/atoms.ts';
import { AppRoute } from '~/libs/enums/enums.ts';

const StyledLogo = styled.div`
  min-width: 229px;
`;

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <Link to={AppRoute.ROOT}>
        <Image src={SpacexLogo} />
      </Link>
    </StyledLogo>
  );
};

export { Logo };
