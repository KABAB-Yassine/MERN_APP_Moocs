import React, { useState } from 'react';
import './Header.css';

const Header = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">🇲🇦</div>
            <span className="logo-text">شباب المغرب</span>
          </div>

          {/* Desktop Navigation */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" className="nav-link">الرئيسية</a>
            <a href="#features" className="nav-link">الخدمات</a>
            <a href="#events" className="nav-link">الفعاليات</a>
            <a href="#community" className="nav-link">المجتمع</a>
            <a href="#opportunities" className="nav-link">الفرص</a>
            <a href="#contact" className="nav-link">اتصل بنا</a>
          </nav>

          {/* User Menu */}
          <div className="header-actions">
            <div className="user-menu">
              <button className="user-button" onClick={toggleUserMenu}>
                <div className="user-avatar">
                  {user?.avatar ? (
                    <img src={user.avatar} alt="User" />
                  ) : (
                    <span>{user?.name?.charAt(0) || 'U'}</span>
                  )}
                </div>
                <span className="user-name">{user?.name || 'المستخدم'}</span>
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </button>

              {isUserMenuOpen && (
                <div className="user-dropdown">
                  <a href="#profile" className="dropdown-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    الملف الشخصي
                  </a>
                  <a href="#settings" className="dropdown-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M12 1v6m0 6v6"></path>
                      <path d="m15.4 8.4 4.2-4.2m-4.2 11.6 4.2 4.2"></path>
                      <path d="m8.6 8.4-4.2-4.2m4.2 11.6-4.2 4.2"></path>
                    </svg>
                    الإعدادات
                  </a>
                  <a href="#notifications" className="dropdown-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                    الإشعارات
                    <span className="notification-badge">3</span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item logout" onClick={onLogout}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16,17 21,12 16,7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    تسجيل الخروج
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button className="mobile-menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;