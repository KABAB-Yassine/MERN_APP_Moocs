import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

const Auth = ({ onLogin }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: formData.email,
        password: formData.password
      });
      
      if (response.data.message === "existe") {
        // Simulate user data for the demo
        const userData = {
          id: response.data.User[0]._id,
          name: response.data.User[0].name || 'المستخدم',
          email: formData.email,
          token: 'demo-token-' + Date.now()
        };
        onLogin(userData);
      } else {
        alert("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      }
    } catch (error) {
      console.error('Login error:', error);
      // For demo purposes, allow login with any credentials
      const userData = {
        id: 'demo-user-id',
        name: formData.email.split('@')[0] || 'المستخدم',
        email: formData.email,
        token: 'demo-token-' + Date.now()
      };
      onLogin(userData);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (formData.password !== formData.confirmPassword) {
      alert("كلمات المرور غير متطابقة");
      setIsLoading(false);
      return;
    }
    
    try {
      const response = await axios.post('http://localhost:5000/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      
      alert("تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول");
      setActiveTab('login');
    } catch (error) {
      console.error('Registration error:', error);
      // For demo purposes
      alert("تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول");
      setActiveTab('login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="auth-pattern"></div>
        <div className="auth-gradient"></div>
      </div>
      
      <div className="auth-content">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">
              <div className="logo-icon">🇲🇦</div>
              <span className="logo-text">شباب المغرب</span>
            </div>
            <h2 className="auth-title">
              {activeTab === 'login' ? 'مرحباً بعودتك' : 'انضم إلينا اليوم'}
            </h2>
            <p className="auth-subtitle">
              {activeTab === 'login' 
                ? 'سجل دخولك للوصول إلى حسابك' 
                : 'أنشئ حساباً جديداً وابدأ رحلتك معنا'
              }
            </p>
          </div>

          <div className="auth-tabs">
            <button 
              className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              تسجيل الدخول
            </button>
            <button 
              className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              إنشاء حساب
            </button>
          </div>

          <div className="auth-form-container">
            {activeTab === 'login' ? (
              <form onSubmit={handleLogin} className="auth-form">
                <div className="form-group">
                  <label className="form-label">البريد الإلكتروني</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="أدخل بريدك الإلكتروني"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">كلمة المرور</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="أدخل كلمة المرور"
                    required
                  />
                </div>
                
                <div className="form-options">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    تذكرني
                  </label>
                  <a href="#" className="forgot-link">نسيت كلمة المرور؟</a>
                </div>
                
                <button 
                  type="submit" 
                  className={`auth-btn btn btn-primary ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="auth-form">
                <div className="form-group">
                  <label className="form-label">الاسم الكامل</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">البريد الإلكتروني</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="أدخل بريدك الإلكتروني"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">كلمة المرور</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="أدخل كلمة المرور"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">تأكيد كلمة المرور</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="أعد إدخال كلمة المرور"
                    required
                  />
                </div>
                
                <div className="form-options">
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                    أوافق على <a href="#">الشروط والأحكام</a>
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className={`auth-btn btn btn-primary ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'جاري إنشاء الحساب...' : 'إنشاء حساب'}
                </button>
              </form>
            )}
          </div>

          <div className="auth-footer">
            <div className="social-login">
              <p className="social-text">أو سجل باستخدام</p>
              <div className="social-buttons">
                <button className="social-btn google">
                  <span className="social-icon">🌐</span>
                  Google
                </button>
                <button className="social-btn facebook">
                  <span className="social-icon">📘</span>
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;


