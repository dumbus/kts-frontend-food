import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';

import { ROUTES } from 'config/routes';

import FavoritesPage from './pages/FavouritesPage';
import Footer from './pages/Footer';
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
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.recipes()} element={<Main />}>
          <Route index element={<RecipesListPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path=":id" element={<SingleRecipePage pageType="single" />} />
          <Route path="random/:timestamp" element={<SingleRecipePage pageType="random" />} />
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.recipes()} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
