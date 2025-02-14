import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BackOfficePage from '../pages/bo/BackOfficePage';
import LoginPage from '../pages/bo/LoginPage';
import HomePage from '../pages/client/HomePage';
import { isAuthenticated } from '../services/authService';
import Header from '../components/client/Header';
import CoursesPage from '../pages/client/CoursesPage';
import Footer from '../components/client/Footer';
import AboutUsPage from '../pages/client/AboutUsPage';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = isAuthenticated(); 
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

const AppRoutes = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/about" element={<AboutUsPage />} />

      <Route
        path="/backoffice"
        element={
          <PrivateRoute>
            <BackOfficePage />
          </PrivateRoute>
        }
      />
    </Routes>
    <Footer />
  </Router>
);

export default AppRoutes;
