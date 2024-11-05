import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import RecipesListPage from './pages/RecipesListPage';
import SingleRecipePage from './pages/SingleRecipePage';

import 'styles/styles.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipesListPage />} />
        <Route path="/recipes" element={<RecipesListPage />} />
        <Route path="/recipes/:id" element={<SingleRecipePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
