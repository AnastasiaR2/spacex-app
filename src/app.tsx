import { Header, Layout, RouterOutlet } from '~/components/components.ts';
import GlobalStyle from '~/global-style.ts';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Layout>
        <RouterOutlet />
      </Layout>
    </>
  );
};

export { App };
