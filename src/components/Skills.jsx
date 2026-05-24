import './Skills.css';

const SKILL_CATEGORIES = [
  {
    label: 'Languages',
    skills: ['Python', 'SQL'],
  },
  {
    label: 'Backend & Data',
    skills: ['FastAPI', 'REST APIs', 'Node.js', 'PostgreSQL', 'SAP HANA'],
  },
  {
    label: 'Infrastructure',
    skills: ['Docker', 'Kubernetes', 'Databricks', 'Spark', 'Kafka', 'CI/CD', 'SAP BTP'],
  },
  {
    label: 'AI / ML',
    skills: ['RAG', 'LangChain', 'LangGraph', 'MCP', 'TensorFlow', 'PyTorch', 'MLOps'],
  },
  {
    label: 'Cloud',
    skills: ['SAP HANA Cloud', 'Cloud Foundry', 'AWS'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'Jira', 'Firebase', 'Postman', 'VS Code'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container skills">
      <div className="section-label">04 — skills</div>
      <h2 className="section-title">What I work with.</h2>

      <div className="skills__grid">
        {SKILL_CATEGORIES.map((cat, i) => (
          <div
            key={i}
            className="skills__group glass-card"
            data-aos="fade-up"
            data-aos-delay={i * 60}
          >
            <div className="skills__category">{cat.label}</div>
            <div className="skills__tags">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill__tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
