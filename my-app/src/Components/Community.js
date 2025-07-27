import React from 'react';
import './Community.css';

const Community = () => {
  const testimonials = [
    {
      id: 1,
      name: 'أميمة الزهراني',
      role: 'طالبة هندسة',
      city: 'الرباط',
      avatar: '👩‍💻',
      testimonial: 'تطبيق شباب المغرب ساعدني في العثور على فرص تدريبية رائعة وتطوير مهاراتي التقنية. الآن أعمل في شركة تقنية كبيرة!',
      rating: 5
    },
    {
      id: 2,
      name: 'يوسف الحسني',
      role: 'رائد أعمال',
      city: 'الدار البيضاء',
      avatar: '👨‍💼',
      testimonial: 'الشبكة التي بنيتها من خلال التطبيق ساعدتني في إطلاق مشروعي الناشئ. أنصح كل شاب مغربي بالانضمام.',
      rating: 5
    },
    {
      id: 3,
      name: 'سلمى القادري',
      role: 'مصممة جرافيك',
      city: 'مراكش',
      avatar: '👩‍🎨',
      testimonial: 'وجدت شغفي في التصميم من خلال الورش التدريبية. المجتمع هنا داعم ومشجع للإبداع والتطوير.',
      rating: 5
    }
  ];

  const stats = [
    { icon: '🎯', number: '95%', label: 'معدل الرضا' },
    { icon: '🚀', number: '500+', label: 'قصة نجاح' },
    { icon: '🤝', number: '10K+', label: 'عضو نشط' },
    { icon: '🌟', number: '4.9', label: 'تقييم التطبيق' }
  ];

  return (
    <section className="community section" id="community">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">مجتمعنا المتميز</h2>
          <p className="section-subtitle">
            اكتشف قصص نجاح ملهمة من الشباب المغربي الذين غيروا حياتهم من خلال منصتنا
          </p>
        </div>

        <div className="community-stats fade-in-up">
          <div className="stats-grid grid grid-4">
            {stats.map((stat, index) => (
              <div key={index} className="community-stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-section">
          <h3 className="testimonials-title fade-in-up">ماذا يقول أعضاؤنا</h3>
          <div className="testimonials-grid grid grid-3">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card card fade-in-up">
                <div className="testimonial-header">
                  <div className="user-avatar">{testimonial.avatar}</div>
                  <div className="user-info">
                    <h4 className="user-name">{testimonial.name}</h4>
                    <p className="user-role">{testimonial.role}</p>
                    <p className="user-city">{testimonial.city}</p>
                  </div>
                  <div className="rating">
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                </div>
                <p className="testimonial-text">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="community-cta fade-in-up">
          <div className="cta-content">
            <h3 className="cta-title">انضم إلى مجتمعنا اليوم</h3>
            <p className="cta-subtitle">كن جزءاً من قصة نجاح جديدة</p>
            <button className="btn btn-primary">انضم الآن</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;