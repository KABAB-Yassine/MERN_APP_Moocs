import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "اكتشف مستقبلك مع شباب المغرب",
      subtitle: "منصة شاملة للشباب المغربي للتطوير والإبداع والتواصل",
      image: "🌟",
      highlight: "التميز والإبداع"
    },
    {
      title: "فرص تعليمية وتدريبية متنوعة",
      subtitle: "برامج تدريبية، ورش عمل، ودورات تطويرية لتنمية مهاراتك",
      image: "🎓",
      highlight: "التعلم والنمو"
    },
    {
      title: "شبكة تواصل قوية",
      subtitle: "تواصل مع الشباب المغربي من جميع أنحاء العالم",
      image: "🤝",
      highlight: "التواصل والشراكة"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge fade-in-up">
              <span className="badge-icon">✨</span>
              {slides[currentSlide].highlight}
            </div>
            
            <h1 className="hero-title fade-in-up">
              {slides[currentSlide].title}
            </h1>
            
            <p className="hero-subtitle fade-in-up">
              {slides[currentSlide].subtitle}
            </p>
            
            <div className="hero-actions fade-in-up">
              <button className="btn btn-primary hero-btn">
                ابدأ رحلتك الآن
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </button>
              
              <button className="btn btn-outline hero-btn">
                اكتشف المزيد
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </div>
            
            <div className="hero-stats fade-in-up">
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">شاب مسجل</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">فعالية شهرياً</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">مدينة مغربية</div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-icon">
                {slides[currentSlide].image}
              </div>
              <div className="card-content">
                <div className="card-dots">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="floating-elements">
              <div className="floating-element element-1">💡</div>
              <div className="floating-element element-2">🚀</div>
              <div className="floating-element element-3">⭐</div>
              <div className="floating-element element-4">🎯</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>تمرير للأسفل</span>
      </div>
    </section>
  );
};

export default Hero;