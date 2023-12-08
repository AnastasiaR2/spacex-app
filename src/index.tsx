import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppRoute } from '~/libs/enums/enums.ts';

import { App } from './app.tsx';
import { RouterProvider } from './components/components.ts';

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
