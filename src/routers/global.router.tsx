import { Route, Routes } from 'react-router-dom';

import { Layout } from '../layouts/default.layout';
import { HomePage } from '../pages/home.page';
import { NotFoundPage } from '../pages/not-found.page';

export const GlobalRouter = () => {
  // TODO: Create ProtectedRoute to limit access to authenticated users
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
