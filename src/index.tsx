import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from '~/components/components.ts';
import { AppRoute } from '~/libs/enums/enums.ts';
import { Favorites, Home } from '~/pages/pages.ts';

import { App } from './app.tsx';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
});

createRoot(document.querySelector('#root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <RouterProvider
      routes={[
        {
          path: AppRoute.ROOT,
          element: <App />,
          children: [
            {
              path: AppRoute.ROOT,
              element: <Home />,
            },
            {
              path: AppRoute.FAVORITES,
              element: <Favorites />,
            },
          ],
        },
      ]}
    />
  </ApolloProvider>,
);
