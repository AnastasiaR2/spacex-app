import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from '~/components/components.ts';
import { AppRoute } from '~/libs/enums/enums.ts';
import { Favorites, Home } from '~/pages/pages.ts';

import { App } from './app.tsx';

createRoot(document.querySelector('#root') as HTMLElement).render(
  <StrictMode>
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
  </StrictMode>,
);
