import React, { useState } from 'react';
import './Events.css';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'ورشة تطوير مهارات البرمجة',
      date: '15 يناير 2025',
      time: '14:00 - 17:00',
      location: 'الدار البيضاء',
      type: 'ورشة عمل',
      attendees: 45,
      maxAttendees: 60,
      image: '💻',
      description: 'تعلم أساسيات البرمجة وتطوير التطبيقات مع خبراء في المجال',
      tags: ['تكنولوجيا', 'تعلم', 'برمجة']
    },
    {
      id: 2,
      title: 'مؤتمر ريادة الأعمال الشبابية',
      date: '22 يناير 2025',
      time: '09:00 - 18:00',
      location: 'الرباط',
      type: 'مؤتمر',
      attendees: 120,
      maxAttendees: 200,
      image: '🚀',
      description: 'ملتقى لرواد الأعمال الشباب لتبادل الخبرات والشراكات',
      tags: ['ريادة أعمال', 'شبكة', 'استثمار']
    },
    {
      id: 3,
      title: 'معرض الفرص الوظيفية',
      date: '28 يناير 2025',
      time: '10:00 - 16:00',
      location: 'فاس',
      type: 'معرض',
      attendees: 89,
      maxAttendees: 150,
      image: '💼',
      description: 'لقاء مباشر مع أهم الشركات والمؤسسات لاستكشاف الفرص الوظيفية',
      tags: ['وظائف', 'مقابلات', 'مهن']
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'ملتقى الثقافة المغربية',
      date: '10 ديسمبر 2024',
      attendees: 150,
      image: '🎭',
      rating: 4.8,
      highlights: ['معارض تراثية', 'عروض فولكلورية', 'ورش حرفية']
    },
    {
      id: 5,
      title: 'هاكاثون الابتكار التقني',
      date: '05 ديسمبر 2024',
      attendees: 80,
      image: '⚡',
      rating: 4.9,
      highlights: ['24 ساعة تطوير', 'جوائز قيمة', 'شراكات تقنية']
    }
  ];

  const eventTypes = [
    { id: 'all', name: 'الكل', count: upcomingEvents.length },
    { id: 'workshop', name: 'ورش عمل', count: 1 },
    { id: 'conference', name: 'مؤتمرات', count: 1 },
    { id: 'exhibition', name: 'معارض', count: 1 }
  ];

  return (
    <section className="events section" id="events">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">فعالياتنا وأنشطتنا</h2>
          <p className="section-subtitle">
            اكتشف مجموعة متنوعة من الفعاليات والأنشطة المصممة لتطوير مهاراتك وتوسيع شبكة علاقاتك
          </p>
        </div>

        {/* Tabs */}
        <div className="events-tabs fade-in-up">
          <button 
            className={`tab ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            الفعاليات القادمة
            <span className="tab-count">{upcomingEvents.length}</span>
          </button>
          <button 
            className={`tab ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            فعاليات سابقة
            <span className="tab-count">{pastEvents.length}</span>
          </button>
        </div>

        {/* Event Filters */}
        {activeTab === 'upcoming' && (
          <div className="event-filters fade-in-up">
            {eventTypes.map(type => (
              <button key={type.id} className="filter-btn">
                {type.name}
                <span className="filter-count">{type.count}</span>
              </button>
            ))}
          </div>
        )}

        {/* Events Content */}
        <div className="events-content">
          {activeTab === 'upcoming' ? (
            <div className="upcoming-events">
              <div className="events-grid grid grid-3">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="event-card card fade-in-up">
                    <div className="event-header">
                      <div className="event-icon">{event.image}</div>
                      <div className="event-type">{event.type}</div>
                    </div>
                    
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-description">{event.description}</p>
                    
                    <div className="event-details">
                      <div className="detail-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {event.date}
                      </div>
                      
                      <div className="detail-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12,6 12,12 16,14"></polyline>
                        </svg>
                        {event.time}
                      </div>
                      
                      <div className="detail-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {event.location}
                      </div>
                    </div>
                    
                    <div className="event-attendance">
                      <div className="attendance-bar">
                        <div 
                          className="attendance-fill"
                          style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        ></div>
                      </div>
                      <span className="attendance-text">
                        {event.attendees} / {event.maxAttendees} مشارك
                      </span>
                    </div>
                    
                    <div className="event-tags">
                      {event.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                    
                    <button className="event-btn btn btn-primary">
                      سجل الآن
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12,5 19,12 12,19"></polyline>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="past-events">
              <div className="events-grid grid grid-2">
                {pastEvents.map(event => (
                  <div key={event.id} className="past-event-card card fade-in-up">
                    <div className="past-event-header">
                      <div className="event-icon">{event.image}</div>
                      <div className="event-rating">
                        <span className="rating-stars">⭐</span>
                        <span className="rating-value">{event.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="event-title">{event.title}</h3>
                    <div className="event-meta">
                      <span className="event-date">{event.date}</span>
                      <span className="event-attendees">{event.attendees} مشارك</span>
                    </div>
                    
                    <div className="event-highlights">
                      <h4>أبرز الفعاليات:</h4>
                      <ul>
                        {event.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="event-btn btn btn-outline">
                      شاهد التفاصيل
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="events-newsletter fade-in-up">
          <div className="newsletter-content">
            <h3 className="newsletter-title">ابق على اطلاع بأحدث الفعاليات</h3>
            <p className="newsletter-subtitle">اشترك في نشرتنا البريدية لتصلك آخر الأخبار والفعاليات</p>
            <div className="newsletter-form">
              <input type="email" placeholder="أدخل بريدك الإلكتروني" className="newsletter-input" />
              <button className="newsletter-btn btn btn-primary">اشترك الآن</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;