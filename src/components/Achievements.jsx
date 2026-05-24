import './Achievements.css';

const ACHIEVEMENTS = [
  {
    rank: 'Award',
    org: 'SAP',
    year: '2026',
    title: 'SAP Recognition Award',
    desc: 'Recognized for contributions to enterprise AI infrastructure at SAP Labs. Building production systems that serve Fortune-500 operations globally.',
    premium: true,
  },
  {
    rank: 'Top 50',
    sub: '/ 60,000+ participants',
    org: 'Volkswagen',
    year: '2025',
    title: 'Volkswagen Hackathon',
    desc: 'Ranked Top 50 out of 60,000+ participants nationally. Implemented PPO-based reinforcement learning for OEM infrastructure optimization.',
    premium: false,
  },
  {
    rank: '4th Place',
    org: 'Citibank',
    year: '2024',
    title: 'Citibank Hackathon',
    desc: 'Built AI-integrated financial systems for real-time transaction analysis and risk assessment at a national-level fintech competition.',
    premium: false,
  },
  {
    rank: '3 Medals',
    org: 'WSCS',
    year: '2019',
    title: "World Scholar's Cup — Global Round",
    desc: 'Represented at the Global Round in Manila, Philippines. Awarded medals across collaborative writing, debate, and essay disciplines.',
    premium: false,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-container achievements">
      <div className="section-label">05 — achievements</div>
      <h2 className="section-title">Recognition &amp; wins.</h2>

      <div className="achievements__grid">
        {ACHIEVEMENTS.map((item, i) => (
          <div
            key={i}
            className={`achievement__card glass-card ${item.premium ? 'achievement__card--premium' : ''}`}
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            <div className="achievement__top">
              <div className="achievement__org-row">
                <span className="achievement__org">{item.org}</span>
                <span className="achievement__year">{item.year}</span>
              </div>
              <div className="achievement__rank-row">
                <span className={`achievement__rank ${item.premium ? 'achievement__rank--award' : ''}`}>
                  {item.rank}
                </span>
                {item.sub && <span className="achievement__sub">{item.sub}</span>}
              </div>
            </div>
            <h3 className="achievement__title">{item.title}</h3>
            <p className="achievement__desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
