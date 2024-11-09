import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';

import { ROUTES } from 'config/routes';

import Header from './pages/Header';
import RecipesListPage from './pages/RecipesListPage';
import SingleRecipePage from './pages/SingleRecipePage';

import 'styles/styles.scss';

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.recipes()} element={<Main />}>
          <Route index element={<RecipesListPage />} />
          <Route path=":id" element={<SingleRecipePage />} />
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.recipes()} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
