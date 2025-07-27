import React from 'react';
import './Footer.css';

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: 'الرئيسية', href: '#home' },
      { name: 'الخدمات', href: '#features' },
      { name: 'الفعاليات', href: '#events' },
      { name: 'المجتمع', href: '#community' }
    ],
    support: [
      { name: 'مركز المساعدة', href: '#' },
      { name: 'اتصل بنا', href: '#' },
      { name: 'الأسئلة الشائعة', href: '#' },
      { name: 'التقارير', href: '#' }
    ],
    legal: [
      { name: 'سياسة الخصوصية', href: '#' },
      { name: 'شروط الاستخدام', href: '#' },
      { name: 'ملفات تعريف الارتباط', href: '#' },
      { name: 'إخلاء المسؤولية', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'YouTube', icon: '📺', href: '#' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">🇲🇦</div>
                <span className="logo-text">شباب المغرب</span>
              </div>
              <p className="footer-description">
                منصة شاملة لتمكين الشباب المغربي وتطوير قدراتهم نحو مستقبل أفضل. 
                نحن هنا لدعم أحلامكم وتحويلها إلى واقع.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} className="social-link" title={social.name}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="footer-links">
              <div className="footer-section">
                <h4 className="footer-title">المنصة</h4>
                <ul className="footer-list">
                  {footerLinks.platform.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-section">
                <h4 className="footer-title">الدعم</h4>
                <ul className="footer-list">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-section">
                <h4 className="footer-title">قانوني</h4>
                <ul className="footer-list">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="footer-contact">
              <h4 className="footer-title">تواصل معنا</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span className="contact-text">info@shabab-morocco.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span className="contact-text">+212 5XX-XXXXXX</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span className="contact-text">المغرب، الرباط</span>
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="footer-newsletter">
                <h5 className="newsletter-title">اشترك في النشرة البريدية</h5>
                <div className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="البريد الإلكتروني" 
                    className="newsletter-input"
                  />
                  <button className="newsletter-btn">اشترك</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 شباب المغرب. جميع الحقوق محفوظة.
            </p>
            <div className="footer-badges">
              <span className="badge">🇲🇦 صنع في المغرب</span>
              <span className="badge">✨ بحب للشباب</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;