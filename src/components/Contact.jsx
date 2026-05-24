import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section-container contact">
      <div className="contact__inner">
        <div className="section-label">07 — contact</div>

        <p className="contact__eyebrow">Let's connect</p>
        <h2 className="contact__heading">
          Building something<br />interesting?
        </h2>
        <p className="contact__sub">
          Open to roles in AI engineering, data infrastructure, and backend systems.
          Always up for a good conversation about distributed systems or agent architectures.
        </p>

        <div className="contact__primary-row">
          <a
            href="https://linkedin.com/in/aadiithyyya"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__primary-link"
          >
            <FaLinkedin size={18} />
            linkedin.com/in/aadiithyyya
          </a>
          <a href="mailto:ramaadithya5@gmail.com" className="contact__primary-link">
            ramaadithya5@gmail.com
          </a>
        </div>

        <div className="contact__links">
          <a
            href="https://github.com/aadiithyyya"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <FaGithub size={14} />
            <span>GitHub</span>
          </a>
          <a
            href="https://aadithyaram.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <span className="contact__ext-icon">↗</span>
            <span>Portfolio</span>
          </a>
        </div>
      </div>
    </section>
  );
}
