import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider as LibraryRouterProvider,
} from 'react-router-dom';

type Props = {
  routes: RouteObject[];
};

const RouterProvider: React.FC<Props> = ({ routes }) => (
  <LibraryRouterProvider router={createBrowserRouter(routes)} />
);

export { RouterProvider };
