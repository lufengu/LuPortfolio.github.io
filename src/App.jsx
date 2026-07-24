import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Typewriter from 'typewriter-effect';
import { FaCheckCircle } from "react-icons/fa";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaTerminal,
  FaLanguage
} from "react-icons/fa";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => observer.observe(element));

    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateParallax = () => {
      const offset = window.scrollY;
      document.documentElement.style.setProperty('--bg-parallax-1', `${offset * 0.04}px`);
      document.documentElement.style.setProperty('--bg-parallax-2', `${offset * 0.02}px`);
      document.documentElement.style.setProperty('--bg-parallax-3', `${offset * 0.06}px`);
      ticking = false;
    };

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
    {/* primera sección */}
      <main>
        <section id="home" className="reveal">
          <div className="text-content">
            <h1>
              Hi There!
              <br />
              I'm <Typewriter
                options={{
                  strings: [
                    '<span class="typewriter-name">Luisa Fernanda Arias</span>'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="box-1">
              <p id="about">Computer Engineering | Front-End Developer</p>
            </div>
            <div className="container-1">
              <p id="description">I develop responsive websites using front-end technologies and focus on creating attractive and user-friendly interfaces.</p>
            </div>
          </div>
          <div className="photo-container">
            <div className="box-border"></div>

            <div className="box-image">
              <img src="./src/assets/luisa.png" alt="Luisa" />
            </div>
          </div>

      {/* botones */}
        </section>
        <section id="actions" className="reveal">
          <button
            type="button"
            className="btn-contact"
            onClick={() => window.open('https://www.linkedin.com/in/luisa-ar/', '_blank', 'noopener,noreferrer')}
          >
            HIRE ME
          </button>
          <button
            type="button"
            className="btn-cv"
            onClick={() => window.open('https://github.com/lufengu', '_blank', 'noopener,noreferrer')}
          >
            VIEW MY WORK
          </button>
        </section>

      {/* Segunda sección */}
        <section id="what-i-do" className="reveal">
          <h2>What  <span className="purple">I Do</span></h2>

          <div className="cards-container">
            <div className="card">
              <img src="./src/assets/frontend.jpg" alt="Web Development" />
              <p>WEB DEVELOPMENT</p>
              <p id="text2">I develop responsive websites and web applications using technologies such as <span className="purple">React</span>, <span className="purple">Tailwind CSS</span>, <span className="purple">HTML</span>, <span className="purple">CSS</span>, and <span className="purple">JavaScript</span>, creating modern and functional interfaces for different devices.</p>
            </div>

            <div className="card reveal">
              <img src="./src/assets/uiux.jpg" alt="UI/UX Design" />
              <p>UI/UX Design</p>
              <p id="text2">I transform <span className="purple">ideas </span> and designs into intuitive web experiences, focusing on usability, visual appeal, and responsiveness across mobile and desktop devices.</p>
            </div>

            <div className="card reveal">
              <img src="./src/assets/appdevelopment.jpg" alt="MOBILE APP DEVELOPMENT" />
              <p>MOBILE APP DEVELOPMENT</p>
              <p id="text2">I have experience developing mobile applications with <span className="purple">Flutter</span>, exploring cross-platform solutions that combine performance with an engaging user experience.</p>

            </div>
          </div>
        </section>

      {/* Tercera sección */}
        <section id="about-me" className="reveal">
          <div className="about-image">
            <div className="image-border"></div>

            <div className="image-box">
              <img src="./src/assets/about.png" alt="About me" />
            </div>
          </div>

          <div className="about-content">
            <h2>
              About <span className="purple">Me</span>
            </h2>

            <p>
              I am a recent Computer Engineering graduate passionate about front-end
              and mobile development. I focus on building modern, responsive, and
              user-friendly digital experiences using current web technologies.
            </p>

            <div className="about-item">
              <FaCheckCircle className="check-icon" />
              <p>Passionate about creating modern and responsive web applications.</p>
            </div>

            <div className="about-item">
              <FaCheckCircle className="check-icon" />
              <p>Focused on clean code, usability, and intuitive user interfaces.</p>
            </div>

            <div className="about-item">
              <FaCheckCircle className="check-icon" />
              <p>Always learning new technologies and improving my skills.</p>
            </div>
          </div>
        </section>
      {/* Cuarta sección */}
        <section id="portfolio" className="reveal">
          <h2>
            Portfolio
          </h2>

          <div className="portfolio-container">

            <a
              href="https://github.com/lufengu/IDS_UNIPAZ"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card"
            >
              <img src="./src/assets/IDS.png" alt="Website Project 1" />
              <p>Intrusion Detection System</p>
            </a>

            <a
              href="https://github.com/lufengu/LexMovil"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card"
            >
              <img src="./src/assets/LexMovil.png" alt="Website Project 2" />
              <p>LexMovil</p>
            </a>

            <a
              href="https://github.com/lufengu/Proyecto_ML_Cabello"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card"
            >
              <img src="./src/assets/RizoSmart.png" alt="Website Project 3" />
              <p>Proyecto ML Cabello</p>
            </a>

            <a
              href="https://github.com/lufengu/Charkea"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card"
            >
              <img src="./src/assets/Charkea.png" alt="Website Project 4" />
              <p>Charkea</p>
            </a>

          </div>
        </section>

        <section id="skills" className="reveal">
  <h2>
    <span className="purple">Skills</span>
  </h2>

  <div className="skills-container">
    <div className="skill-card">
      <h3><FaLaptopCode className="skill-icon frontend-icon" />FRONT-END DEVELOPMENT</h3>
      <p>React | JavaScript | HTML5 | CSS3 | Tailwind CSS.</p>
    </div>

    <div className="skill-card">
      <h3><FaMobileAlt className="skill-icon" />MOBILE DEVELOPMENT</h3>
      <p>Flutter | Responsive Apps</p>
    </div>

    <div className="skill-card">
      <h3><FaPaintBrush className="skill-icon" /> UI DESIGN</h3>
      <p>Figma | Responsive Apps</p>
    </div>

    <div className="skill-card">
      <h3> <FaTerminal className="skill-icon" /> TOOLS</h3>
      <p>Git | GitHub | VS Code | Canva</p>
    </div>

    <div className="skill-card">
      <h3><FaLanguage className="skill-icon" /> LANGUAGES</h3>
      <p>Spanish (Native) | English (B1)</p>
    </div>
  </div>
</section>
      </main>

      <footer className="site-footer reveal">
        <div className="footer-content">
          <h2>LET'S BUILD SOMETHING REMARKABLE TOGETHER</h2>
          <div className="footer-buttons">
            <button
              type="button"
              className="btn-contact"
              onClick={() => window.open('https://www.linkedin.com/in/luisa-ar/', '_blank', 'noopener,noreferrer')}
            >
              HIRE ME
            </button>
            <button
              type="button"
              className="btn-cv"
              onClick={() => window.open('https://github.com/lufengu', '_blank', 'noopener,noreferrer')}
            >
              VIEW MY WORK
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

