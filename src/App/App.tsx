import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';

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
        <Route path="/" element={<Main />}>
          <Route index element={<RecipesListPage />} />
          <Route path="recipes" element={<RecipesListPage />} />
          <Route path="recipes/:id" element={<SingleRecipePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
