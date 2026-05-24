import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const FEATURED = [
  {
    num: '01',
    date: 'Mar 2026',
    title: 'Code Execution Runtime for MCP Systems',
    desc: 'Dynamic execution layer for MCP tool ecosystems. Implements selective tool loading to reduce context overhead, enabling efficient multi-step agentic workflows at scale.',
    metrics: [
      { value: '88%', label: 'context overhead cut' },
      { value: '67%', label: 'LLM input reduction' },
      { value: '100+', label: 'tools mapped' },
    ],
    stack: ['LangChain', 'LangGraph', 'MCP', 'FastAPI', 'PostgreSQL', 'Python'],
    github: 'https://github.com/aadiithyyya',
  },
  {
    num: '02',
    date: 'May 2025',
    title: 'Enterprise Supply Chain Intelligence Platform',
    desc: 'End-to-end supply chain intelligence with ensemble forecasting, graph-based demand propagation, and OSRM path optimization. Deployed across 10+ operational dashboards.',
    metrics: [
      { value: '22%', label: 'transit time reduction' },
      { value: '10+', label: 'dashboards deployed' },
      { value: 'LSTM', label: 'procurement model' },
    ],
    stack: ['Python', 'TensorFlow', 'PyTorch', 'GraphSAGE', 'Node.js', 'React', 'Firebase', 'SQL'],
    github: 'https://github.com/aadiithyyya/VolksNet-AI-Supply-Chain-and-OEM-Management',
    demo: 'https://www.linkedin.com/posts/aadiithyyya_imobilothon2024-hackathon-mobility-activity-7271881174862454784-Rl_L',
  },
];

const MORE = [
  {
    title: 'CitiFI — Financial AI Relationship Manager',
    desc: 'Full-stack wealth insights app with real-time transactions and ML analytics.',
    stack: ['React', 'GPT-4o', 'Streamlit', 'PLAID API', 'Flask'],
    github: 'https://github.com/aadiithyyya/CitiFI-AI-Fintech-Software-Citibank-Hackathon-2024',
    demo: 'https://www.linkedin.com/posts/aadiithyyya_hackathon-fintech-innovation-activity-7249408479587639296-q5aM',
  },
  {
    title: 'HealthEZY — Smart Healthcare App',
    desc: 'AI-powered mobile platform for diagnostics, IoT monitoring, and emergency alerts.',
    stack: ['React Native', 'Firebase', 'AWS', 'Node.js'],
    github: 'https://github.com/aadiithyyya/EY-Techathon-HealthEZY',
    demo: 'https://www.linkedin.com/posts/aadiithyyya_eytechathon-healthezy-hackathonexperience-activity-7297650760220057600-GBn0',
  },
  {
    title: 'SafeZone — Attendance Checker',
    desc: 'Automated college portal bot with secure backend and one-click frontend sync.',
    stack: ['Node.js', 'Render', 'Vercel', 'Web Scraping'],
    github: 'https://github.com/aadiithyyya/SafeZone-Attendance',
    demo: 'https://www.linkedin.com/posts/aadiithyyya_safezone-attendance-checker-this-is-activity-7290009516413239296-9tJA',
  },
  {
    title: 'Conversational AI Chatbot',
    desc: 'University query assistant using DistilBERT with real-time WebSocket communication.',
    stack: ['Django', 'DistilBERT', 'WebSockets', 'Python'],
    github: 'https://github.com/aadiithyyya/Conversational-AI-Chatbot-for-University-Queries',
  },
  {
    title: 'SRMingle — Campus Networking Platform',
    desc: 'Prototype for student-driven campus engagement and digital interaction.',
    stack: ['Django', 'SQLite', 'HTML/CSS'],
    github: 'https://github.com/aadiithyyya/SRMingle-University-Networking-Platform',
  },
  {
    title: 'Amazon Sales Data Analytics',
    desc: 'Trend analysis on large-scale Amazon sales data using visual and statistical metrics.',
    stack: ['Pandas', 'ETL', 'Matplotlib'],
    github: 'https://github.com/aadiithyyya/Amazon-Sales-Data-Analytics',
  },
  {
    title: 'Crop Production Analysis — India',
    desc: 'Spatio-temporal insights on agricultural yields, seasons, and regions across India.',
    stack: ['Python', 'GeoPandas', 'Pandas'],
    github: 'https://github.com/aadiithyyya/Crop-Production-Analysis-in-India',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container projects">
      <div className="section-label">03 — projects</div>
      <h2 className="section-title">Things I've shipped.</h2>

      {/* Featured */}
      <div className="projects__grid">
        {FEATURED.map((p, i) => (
          <div key={i} className="project__card glass-card" data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="project__top">
              <div className="project__meta-row">
                <span className="project__num">{p.num}</span>
                <span className="project__date">{p.date}</span>
              </div>
              <h3 className="project__title">{p.title}</h3>
              <p className="project__desc">{p.desc}</p>
            </div>

            <div className="project__metrics">
              {p.metrics.map((m, j) => (
                <div key={j} className="project__metric-item">
                  <span className="project__metric-value">{m.value}</span>
                  <span className="project__metric-label">{m.label}</span>
                </div>
              ))}
            </div>

            <div className="project__footer">
              <div className="project__stack">
                {p.stack.map((s) => <span key={s} className="stack-tag">{s}</span>)}
              </div>
              <div className="project__links">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project__link" aria-label="GitHub">
                  <FaGithub size={14} />
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project__link" aria-label="Demo">
                    <FaExternalLinkAlt size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More projects */}
      <div className="projects__more-label">more projects</div>
      <div className="projects__more-grid">
        {MORE.map((p, i) => (
          <div key={i} className="project__card--compact glass-card" data-aos="fade-up" data-aos-delay={i * 50}>
            <div className="compact__header">
              <h4 className="compact__title">{p.title}</h4>
              <div className="compact__links">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project__link" aria-label="GitHub">
                  <FaGithub size={13} />
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project__link" aria-label="Demo">
                    <FaExternalLinkAlt size={11} />
                  </a>
                )}
              </div>
            </div>
            <p className="compact__desc">{p.desc}</p>
            <div className="compact__stack">
              {p.stack.map((s) => <span key={s} className="stack-tag">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
