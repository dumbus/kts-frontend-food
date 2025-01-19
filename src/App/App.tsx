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

  const needTransition = location.state?.noTransition !== true;

  useEffect(() => {
    if (needTransition) {
      window.scrollTo({ top: 0, left: 0 });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location, needTransition]);

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
    <BrowserRouter basename="/kts-frontend-food">
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
