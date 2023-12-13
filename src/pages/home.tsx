import { HomeBanner, MainSlider } from '~/components/organisms/organisms.ts';
import { HomeTemplate } from '~/components/templates/templates.ts';

const Home = () => {
  return (
    <HomeTemplate>
      <HomeBanner />
      <MainSlider />
    </HomeTemplate>
  );
};

export { Home };
