"use client";

import { useEffect } from "react";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/16/solid";

import { Flame, Code2, Palette, Database, Container } from "lucide-react";

const skills = [
  { label: "Phoenix Framework", pct: 55, icon: Flame },
  { label: "JavaScript / TypeScript", pct: 70, icon: Code2 },
  { label: "CSS / Tailwind", pct: 90, icon: Palette },
  { label: "PostgreSQL", pct: 60, icon: Database },
  { label: "Docker", pct: 75, icon: Container },
];

export default function Home() {
  useEffect(() => {
    // Scroll reveal
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            e.target.querySelectorAll<HTMLElement>(".skill-bar-fill").forEach((bar) => {
              bar.style.width = (bar.dataset.w ?? "0") + "%";
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));

    // Smooth scroll nav
    document.querySelectorAll<HTMLElement>("[data-target]").forEach((li) => {
      li.addEventListener("click", () => {
        const target = document.getElementById(li.dataset.target ?? "");
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <nav className="fixed top-0 left-0 right-0 z-100 h-nav flex items-center justify-center px-48 bg-black-glass backdrop-blur border-b-white-05">
        <ul className="flex gap-36 list-none nav-links mx-auto cursor-grab underline-hover">
          <li data-target="home" className="text-white text-sm font-regular tracking-wide opacity-85 transition-base hover-yellow">Home</li>
          <li data-target="experience" className="text-white text-sm font-regular tracking-wide opacity-85 transition-base hover-yellow">Experience</li>
          <li data-target="skills" className="text-white text-sm font-regular tracking-wide opacity-85 transition-base hover-yellow">Skills</li>
          <li data-target="process" className="text-white text-sm font-regular tracking-wide opacity-85 transition-base hover-yellow">Process</li>
          <li data-target="portfolios" className="text-white text-sm font-regular tracking-wide opacity-85 transition-base hover-yellow">Portfolios</li>
          <li data-target="contact" className="text-white text-sm font-regular tracking-wide opacity-85 transition-base hover-yellow">Contact Me</li>
        </ul>
      </nav>

      <section id="home" className="hero-section relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 hero-radial-bg hero-noise"></div>
        <div className="absolute left-0 top-0 bottom-0 w-4px accent-line opacity-6"></div>

        <div className="hero-shell relative z-2">
          <div className="hero-content">
            <p className="hero-eyebrow text-xs tracking-max uppercase text-yellow anim-fade-up-1">
              Welcome to my portfolio
            </p>
            <h1 className="hero-title font-barlow font-light text-hero leading-close text-white anim-fade-up-2">
              I&apos;m <span className="font-bold">Ashish Rai</span>
            </h1>
            <div className="hero-role font-bebas text-display text-yellow leading-snug tracking-widest anim-fade-up-3">
              Software Engineer
            </div>
            <p className="hero-summary text-md leading-normal text-white-55 font-light anim-fade-up-4">
              Every line of codes are written with purpose, precision, and performance in mind.
              Passionate about building fast, beautiful, and accessible web applications.
            </p>
            <div className="hero-actions anim-fade-up-5">
              <a
                href="https://docs.google.com/document/d/1aCsC9aEFjGXJJfrPuwrKg46Q4rhIkNdmXC1-XZMNSpM/edit?tab=t.97772lb2p596#heading=h.zi7mtip6oes9"
                className="bg-yellow text-black font-barlow font-bold text-sm tracking-wider p-14-32 border-none cursor-pointer no-underline uppercase inline-block transition-btn hover-lift-lg"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="hero-visual anim-slide-right">
            <div className="hero-portrait-wrap">
              <img src="/image.png" alt="Ashish Rai" className="hero-portrait" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-32 left-80 flex items-center gap-12 text-xs tracking-ultra uppercase text-white-30 scroll-hint-line anim-fade-in md-hide">
          Scroll down
        </div>
      </section>

      <section id="experience" className="bg-dark py-100 px-80 md-py-60 md-px-24">
        <div>
          <p className="text-xs tracking-5 uppercase text-yellow mb-12">My Journey</p>
          <h2 className="font-bebas text-section text-white tracking-wide leading-tight">Experience</h2>
          <div className="w-40px h-3px bg-yellow mt-20 mb-48"></div>
        </div>

        <div className="flex flex-col border-l-yellow-20 reveal mt-10">
          <div className="relative timeline-dot mb-48">
            <div className="text-xs tracking-ultra uppercase text-yellow mb-6">2025 — Present</div>
            <div className="font-bold text-xl text-white">Junior Software Engineer</div>
            <div className="text-sm text-gray mt-2">T3 Cloud.</div>
            <p className="text-base text-white-50 leading-normal mt-10 max-w-560">
              Contributing to full-stack development using Phoenix and Next.js.
              Developed hands-on experience with PostgreSQL, Docker, and agile workflows
              while growing fast in a professional team environment.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-black py-100 px-80 md-py-60 md-px-24">
          <div className="reveal">
            <p className="text-xs tracking-5 uppercase text-yellow mb-12">What I know</p>
            <h2 className="font-bebas text-section text-white tracking-wide leading-tight">Skills</h2>
            <div className="w-40px h-3px bg-yellow mt-20 mb-48"></div>
          </div>

          <div className="grid grid-skills gap-24 mt-10">
           {skills.map(({ label, pct, icon: Icon }) => (
            <div key={label} className="skill-card bg-dark border-white-05 p-28-24 relative overflow-hidden transition-all hover-card reveal">
           <Icon
            size={28}
            color="var(--yellow)"
            strokeWidth={1.5}
            style={{ marginBottom: "14px" }}
           />
           <div className="font-bold text-lg text-white mb-8">{label}</div>
            <div className="w-full h-3px skill-bar-bg mt-12">
              <div className="h-full skill-bar-fill" data-w={pct} style={{ width: "0%" }}></div>
            </div>
           <div className="text-xs text-yellow mt-6" style={{ textAlign: "right" }}>{pct}%</div>
         </div>
         ))}
       </div>
      </section>

      <section id="process" className="bg-dark py-100 px-80 md-py-60 md-px-24">
        <div className="reveal">
          <p className="text-xs tracking-5 uppercase text-yellow mb-12">How I work</p>
          <h2 className="font-bebas text-section text-white tracking-wide leading-tight">Process</h2>
          <div className="w-40px h-3px bg-yellow mt-20 mb-48"></div>
        </div>

        <div className="grid grid-process gap-32 mt-10">
          {[
            { num: "01", title: "Discover", desc: "Understanding our goals, audience, and business needs through in-depth conversations and research." },
            { num: "02", title: "Design", desc: "Wireframes, prototypes, and high-fidelity mockups refined until every pixel earns its place." },
            { num: "03", title: "Develop", desc: "Clean, tested, and performant code using Phoenix LiveView and modern frontend tools." },
            { num: "04", title: "Deliver", desc: "Smooth deployment, documentation, and ongoing support to ensure lasting success." },
          ].map(({ num, title, desc }) => (
            <div key={num} className="relative reveal">
              <div className="font-bebas text-step-num step-num-ghost leading-tight mt-neg16">{num}</div>
              <div className="font-bold text-lg text-white">{title}</div>
              <p className="text-base text-white-45 leading-normal mt-8">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolios" className="bg-black py-100 px-80 md-py-60 md-px-24">
        <div className="reveal">
          <p className="text-xs tracking-5 uppercase text-yellow mb-12">My work</p>
          <h2 className="font-bebas text-section text-white tracking-wide leading-tight">Portfolios</h2>
          <div className="w-40px h-3px bg-yellow mt-20 mb-48"></div>
        </div>

        <div className="grid grid-portfolio gap-20 mt-10">
          <div className="portfolio-card relative overflow-hidden aspect-4-3 bg-dark border-white-05 cursor-pointer reveal">
            <div className="w-full h-full flex items-center justify-center">
              <div style={{ fontSize: "3rem" }} className="opacity-15">PlayBT</div>
            </div>
            <div className="portfolio-overlay">
              <div className="font-bebas text-black" style={{ fontSize: "1.6rem", letterSpacing: "1px" }}>
                PlayBT Platform
              </div>
              <div className="text-xs tracking-ultra uppercase text-black-60 mt-4">
                Phoenix · LiveView
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-dark py-100 px-80 grid grid-cols-2 gap-80 md-py-60 md-px-24 md-grid-1 md-gap-40">
        <div className="reveal">
          <p className="text-xs tracking-5 uppercase text-yellow mb-12">Get in touch</p>
          <h2 className="font-bebas text-section text-white tracking-wide leading-tight">Contact</h2>
          <div className="w-40px h-3px bg-yellow mt-20 mb-48"></div>
          <p className="text-md text-white-50 leading-relaxed max-w-380 mb-32">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s build something great together.
          </p>
          <div className="flex gap-12 items-center mb-16 text-white-70 text-base">
            <EnvelopeIcon className="w-6 h-6"/>
            <span>ashishsky619@gmail.com</span>
          </div>
          <div className="flex gap-12 items-center mb-16 text-white-70 text-base">
            <PhoneIcon className="w-6 h-6"/>
            <span>+975 77296119</span>
          </div>
          <div className="flex gap-12 items-center mb-16 text-white-70 text-base">
            <MapPinIcon className="w-6 h-6"/>
            <span>Thimphu, Bhutan</span>
          </div>
        </div>
      </section>

      <footer className="bg-black border-top-t py-32 px-80 flex items-center justify-between md-px-24">
        <div className="text-xs text-white-25 tracking-wide">
          © {new Date().getFullYear()} Ashish Rai. All rights reserved.
        </div>
        <div className="flex gap-16 cursor-pointer">
          <a href="https://www.linkedin.com/in/ashish-rai-776022383/" className="w-36px h-36px bg-white-05 flex items-center justify-center no-underline text-base text-white-50 transition-bg hover-yellow-bg">
            In
          </a>
          <a href="https://twitter.com/AshishR43228723" className="w-36px h-36px bg-white-05 flex items-center justify-center no-underline text-base text-white-50 transition-bg hover-yellow-bg">
            X
          </a>
        </div>
      </footer>
    </main>
  );
}