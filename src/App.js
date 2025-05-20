import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Header } from './components/header';
import { Footer } from './components/footer';
import AnimatedCursor from 'react-animated-cursor';

export default function App() {
  return (

    <Router>
      <AnimatedCursor 
        innerSize={10}
        outerSize={20}
        color='204, 0, 0'
        outerAlpha={0.3}
        innerScale={0.4}
        outerScale={2.5}
      />
      <Header />
      <AppRoutes />
      <Footer />
    </Router>

  );
}
