import './About.css';

const TIMELINE = [
  {
    year: '2021',
    tag: 'Education',
    title: 'Joined SRM Institute',
    desc: 'M.Tech Integrated CS + Data Science. Five years of learning & building real systems — gradutaed June 2026.',
  },
  {
    year: '2024',
    tag: 'Milestone',
    title: 'First Hackathon Win',
    desc: 'Citibank Hackathon — 4th place nationally. Built AI-integrated financial systems in under 24 hours.',
  },
  {
    year: '2025',
    tag: 'Recognition',
    title: 'Volkswagen Hackathon — PPO Opportunity',
    desc: 'Top 50 out of 60,000+ participants. PPO extended for OEM infrastructure work using reinforcement learning.',
  },
  {
    year: '2025',
    tag: 'Industry',
    title: 'SAP Labs Intern',
    desc: 'AI & Data Engineering at SAP BTP, Bangalore. Shipped enterprise-scale infrastructure serving Fortune-500 — wrapped up June 2026.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-container about">
      <div className="about__grid">
        <div className="about__left">
          <div className="section-label">01 — about</div>
          <h2 className="section-title">
            The builder behind<br />the systems.
          </h2>
          <p className="about__bio">
            I'm an AI &amp; Data Engineer who cares about what happens at scale.
            I build backend infrastructure, data pipelines, and AI systems
            that run in production — not just demos.
          </p>
          <p className="about__bio">
            Currently interning at SAP Labs in Bangalore, working on enterprise
            AI infrastructure that touches Fortune-500 operations. Alongside that,
            pursuing M.Tech in CS + Data Science at SRM with a 9.57 GPA.
          </p>
          <p className="about__bio">
            When I'm not optimizing token pipelines or debugging distributed systems,
            I'm thinking about how AI agents should actually work in production.
          </p>
        </div>

        <div className="about__right">
          <div className="about__timeline">
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className="about__timeline-item"
                data-aos="fade-left"
                data-aos-delay={i * 90}
              >
                <div className="about__year">{item.year}</div>
                <div className="about__card glass-card">
                  <span className="about__tag">{item.tag}</span>
                  <h4 className="about__card-title">{item.title}</h4>
                  <p className="about__card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
