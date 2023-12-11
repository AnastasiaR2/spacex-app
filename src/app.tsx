import { Header, Layout } from '~/components/components.ts';
import GlobalStyle from '~/global-style.ts';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Layout></Layout>
    </>
  );
};

export { App };
