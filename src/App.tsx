import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';

function App() {
  return (
    <Router>
      <Helmet>
        <html lang="en" />
        <title>SkyElectronica - Advanced Drone Technology</title>
        <meta name="description" content="Leading provider of advanced drone technology and electronics solutions for commercial, industrial, and professional applications worldwide." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;