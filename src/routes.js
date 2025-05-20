import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';

export const AppRoutes = () => {
    return (
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
      </Routes>
    );
  };
