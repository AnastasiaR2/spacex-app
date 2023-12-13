import { Header, Layout, RouterOutlet } from '~/components/components.ts';
import { isFavoritesContext } from '~/context/is-favorites.ts';
import GlobalStyle from '~/global-style.ts';
import { AppRoute } from '~/libs/enums/enums.ts';
import { useLocation } from '~/libs/hooks/hooks.ts';

const App: React.FC = () => {
  const location = useLocation();

  const isFavorites = location.pathname === AppRoute.FAVORITES;

  return (
    <isFavoritesContext.Provider value={{ isFavorites }}>
      <GlobalStyle />
      <Header />
      <Layout>
        <RouterOutlet />
      </Layout>
    </isFavoritesContext.Provider>
  );
};

export { App };
