import './Experience.css';

const BULLETS = [
  {
    pre: 'Built MCP integration layer — reduced token usage by',
    metric: '~78%',
    post: ' and inference costs by',
    metric2: '~57%',
    post2: '',
  },
  {
    pre: 'Engineered multi-agent system (LangGraph + FastAPI) for SRE incident analysis, processing',
    metric: '~5B records/week',
    post: ' across SAP BTP',
  },
  {
    pre: 'Maintained Kubernetes infrastructure serving',
    metric: '~70%',
    post: ' of Fortune-500 customers',
  },
  {
    pre: 'Built Databricks lakehouse (bronze/silver/gold), reducing outage MTTR by',
    metric: '35%',
    post: '',
  },
];

const STACK = ['Python', 'LangGraph', 'FastAPI', 'MCP', 'Kubernetes', 'Databricks', 'SAP BTP', 'PostgreSQL', 'Spark'];

const OTHER_ROLES = [
  {
    role: 'AI Trainee',
    org: 'Acmegrade',
    period: 'Dec 2024 – Feb 2025',
    desc: 'Developed models using autoencoders, GPT-4, and deep learning pipelines.',
  },
  {
    role: 'Data Analyst Intern',
    org: 'Unified Mentor',
    period: 'Jun – Jul 2024',
    desc: 'Built analytics dashboards and KPI reports from large datasets.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-container experience">
      <div className="section-label">02 — experience</div>
      <h2 className="section-title">Where I've built.</h2>

      <div className="exp__card glass-card" data-aos="fade-up">
        <div className="exp__header">
          <div className="exp__header-left">
            <div className="exp__company-row">
              <span className="exp__company">SAP Labs</span>
              <span className="exp__badge">Intern</span>
            </div>
            <div className="exp__role">AI &amp; Data Engineering</div>
            <div className="exp__sub">Cloud Integration &amp; Data Engineering · Bangalore</div>
          </div>
          <div className="exp__header-right">
            <span className="exp__date">Aug 2025 – Jun 2026</span>
            <span className="exp__platform">SAP BTP</span>
          </div>
        </div>

        <ul className="exp__bullets">
          {BULLETS.map((b, i) => (
            <li key={i} className="exp__bullet">
              <span className="exp__arrow">→</span>
              <p>
                {b.pre} <span className="metric">{b.metric}</span>
                {b.post}
                {b.metric2 && <span className="metric">{b.metric2}</span>}
                {b.post2}
              </p>
            </li>
          ))}
        </ul>

        <div className="exp__stack">
          {STACK.map((s) => (
            <span key={s} className="stack-tag">{s}</span>
          ))}
        </div>
      </div>

      {/* Earlier roles */}
      <div className="exp__other-label">earlier roles</div>
      <div className="exp__other-grid">
        {OTHER_ROLES.map((r, i) => (
          <div key={i} className="exp__other-card glass-card" data-aos="fade-up" data-aos-delay={i * 80}>
            <div className="exp__other-header">
              <span className="exp__other-role">{r.role}</span>
              <span className="exp__other-period">{r.period}</span>
            </div>
            <div className="exp__other-org">{r.org}</div>
            <p className="exp__other-desc">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
