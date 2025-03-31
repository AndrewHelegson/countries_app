import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { CountryPage } from '../pages/country';
import { LoginPage } from '../pages/login';
import { ProtectedRoute } from '../shared/lib/routing/ProtectedRoute';
import { Header } from '../widgets/Header';
import { useLocation } from 'react-router-dom';

export const App = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';
  return (
    <>
     {!isLoginPage && <Header />}
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/country/:code"
        element={
          <ProtectedRoute>
            <CountryPage />
          </ProtectedRoute>
        }
      />
    </Routes>
    </>
  );
};
