import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppRoute } from '~/libs/enums/enums.ts';

import { RouterProvider } from './components/components.ts';
import { App } from './pages/pages.ts';

createRoot(document.querySelector('#root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider
      routes={[
        {
          path: AppRoute.ROOT,
          element: <App />,
        },
      ]}
    />
  </StrictMode>,
);
