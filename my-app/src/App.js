import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Events from './Components/Events';
import Community from './Components/Community';
import Footer from './Components/Footer';
import Auth from './Components/Auth';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
      // You would typically validate the token here
    }
    setLoading(false);
  }, []);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem('authToken', userData.token);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('authToken');
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>جاري التحميل...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <Header user={user} onLogout={handleLogout} />
      <Hero />
      <Features />
      <Events />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
