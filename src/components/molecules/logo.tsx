import SpacexLogo from '~/assets/images/spacex-logo.png';
import { Image, Link } from '~/components/atoms/atoms.ts';
import { AppRoute } from '~/libs/enums/enums.ts';

const Logo = () => {
  return (
    <Link to={AppRoute.ROOT}>
      <Image src={SpacexLogo} />
    </Link>
  );
};

export { Logo };
