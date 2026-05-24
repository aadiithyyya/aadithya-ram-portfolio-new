import React, { useState, useEffect } from 'react';
import './Hero.css';

const ROLES = ['AI Engineer', 'Data Engineer', 'Software Developer', 'Backend Systems'];

function useTypewriter(words, typeSpeed = 75, deleteSpeed = 45, pause = 1800) {
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const word = words[idx];

    if (!deleting && charIdx === word.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && charIdx === 0) {
      setDeleting(false);
      setIdx((prev) => (prev + 1) % words.length);
      return;
    }

    const t = setTimeout(() => {
      setText(word.substring(0, charIdx + (deleting ? 0 : 1)));
      setCharIdx((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(t);
  }, [charIdx, idx, deleting, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <div className={`hero__eyebrow ${visible ? 'hero__eyebrow--in' : ''}`}>
          <span className="hero__status">
            <span className="hero__dot" />
            Available for opportunities
          </span>
        </div>

        <h1 className={`hero__name ${visible ? 'hero__name--in' : ''}`}>
          Aadithya<br />Ram
        </h1>

        <div className={`hero__role ${visible ? 'hero__role--in' : ''}`}>
          <span className="hero__prompt">$ </span>
          <span className="hero__typed">{typed}</span>
          <span className="hero__cursor">|</span>
        </div>

        <p className={`hero__tagline ${visible ? 'hero__tagline--in' : ''}`}>
          Distributed systems, backend infrastructure &amp; enterprise AI.<br />
          Building at the intersection of scale and intelligence.
        </p>

        <div className={`hero__actions ${visible ? 'hero__actions--in' : ''}`}>
          <a
            href="/assets/resume/Aadithya%20Ram%20-%20Resume.pdf"
            download="Aadithya Ram - Resume.pdf"
            className="btn-primary"
          >
            Resume
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
          <a href="#contact" className="btn-secondary">
            Get in touch
          </a>
        </div>

        <div className={`hero__meta ${visible ? 'hero__meta--in' : ''}`}>
          <span>M.Tech CS + DS</span>
          <span className="hero__sep">·</span>
          <span>SRM Institute</span>
          <span className="hero__sep">·</span>
          <span>GPA 9.57</span>
        </div>
      </div>

      {/* Profile photo — HUD corner bracket treatment */}
      <div className={`hero__photo ${visible ? 'hero__photo--in' : ''}`}>
        <div className="hero__photo-float">
          <div className="hero__photo-frame">
            <img
              src="/assets/images/Image%20(1).jpg"
              alt="Aadithya Ram"
              className="hero__img"
            />
            <div className="hero__scan-beam" />
          </div>
          <span className="hero__corner hero__corner--tl" />
          <span className="hero__corner hero__corner--tr" />
          <span className="hero__corner hero__corner--bl" />
          <span className="hero__corner hero__corner--br" />
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span className="hero__scroll-label">scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
