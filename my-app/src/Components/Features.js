import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🎓',
      title: 'تعليم وتطوير',
      description: 'دورات تدريبية متخصصة، ورش عمل تطويرية، ومحتوى تعليمي عالي الجودة لتنمية مهاراتك',
      benefits: ['دورات مجانية', 'شهادات معتمدة', 'خبراء متخصصون'],
      color: 'primary'
    },
    {
      icon: '💼',
      title: 'فرص عمل',
      description: 'ربط الشباب بفرص العمل المناسبة، التدريبات المهنية، والمشاريع الناشئة',
      benefits: ['وظائف حديثة', 'شركات رائدة', 'رواتب تنافسية'],
      color: 'secondary'
    },
    {
      icon: '🤝',
      title: 'شبكة تواصل',
      description: 'مجتمع نشط من الشباب المغربي للتواصل، التعلم المشترك، وتبادل الخبرات',
      benefits: ['شراكات قوية', 'تعلم جماعي', 'دعم مستمر'],
      color: 'accent'
    },
    {
      icon: '🎯',
      title: 'إنجازات وأهداف',
      description: 'نظام متقدم لتتبع تقدمك، تحديد أهدافك، والاحتفال بإنجازاتك',
      benefits: ['تتبع التقدم', 'أهداف واضحة', 'مكافآت مميزة'],
      color: 'primary'
    },
    {
      icon: '🌍',
      title: 'ثقافة مغربية',
      description: 'احتفاء بالثقافة المغربية الأصيلة مع الانفتاح على الثقافات العالمية',
      benefits: ['تراث عريق', 'قيم أصيلة', 'انفتاح عالمي'],
      color: 'secondary'
    },
    {
      icon: '🚀',
      title: 'ريادة الأعمال',
      description: 'دعم المشاريع الناشئة، التوجيه في ريادة الأعمال، والتمويل الأولي',
      benefits: ['دعم الأفكار', 'توجيه خبراء', 'تمويل متاح'],
      color: 'accent'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'شاب مستفيد', icon: '👥' },
    { number: '500+', label: 'دورة تدريبية', icon: '📚' },
    { number: '200+', label: 'فرصة عمل شهرياً', icon: '💼' },
    { number: '50+', label: 'شريك استراتيجي', icon: '🤝' }
  ];

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">خدماتنا المتميزة</h2>
          <p className="section-subtitle">
            مجموعة شاملة من الخدمات المصممة خصيصاً لتمكين الشباب المغربي وتحقيق طموحاتهم
          </p>
        </div>

        <div className="features-grid grid grid-3">
          {features.map((feature, index) => (
            <div key={index} className={`feature-card card fade-in-up feature-${feature.color}`}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              
              <ul className="feature-benefits">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="benefit-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <button className="feature-btn">
                اكتشف المزيد
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="features-stats">
          <div className="stats-container">
            <h3 className="stats-title">أرقام تتحدث عن نجاحنا</h3>
            <div className="stats-grid grid grid-4">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card fade-in-up">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="features-cta">
          <div className="cta-content">
            <h3 className="cta-title">مستعد لبدء رحلتك؟</h3>
            <p className="cta-subtitle">انضم إلى آلاف الشباب المغربي وابدأ في تطوير مهاراتك اليوم</p>
            <div className="cta-actions">
              <button className="btn btn-primary">ابدأ الآن مجاناً</button>
              <button className="btn btn-outline">تعرف على المزيد</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;