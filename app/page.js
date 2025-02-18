'use client';

import { useEffect } from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Cursor from '../components/Cursor';

export default function Page() {
  useEffect(() => {
    const homeSectionSubtitleAnim = document.getElementById('homeSection_subtitle_anim');
    const aboutSectionAnim = document.getElementById('aboutSection_anim');
    const aboutSectionTitleAnim = document.getElementById('about_section_title');
    const aboutSectionTextAnim = document.getElementById('aboutSection_text_anim');

    const homeSectionSubtitleAnimObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              homeSectionSubtitleAnim.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const aboutSectionAnimObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              aboutSectionAnim.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const aboutSectionTitleAnimObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              aboutSectionTitleAnim.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const aboutSectionTextAnimObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              aboutSectionTextAnim.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (homeSectionSubtitleAnim) {
      homeSectionSubtitleAnimObserver.observe(homeSectionSubtitleAnim);
    }
    if (aboutSectionAnim) {
      aboutSectionAnimObserver.observe(aboutSectionAnim);
    }
    if (aboutSectionTitleAnim) {
      aboutSectionTitleAnimObserver.observe(aboutSectionTitleAnim);
    }
    if (aboutSectionTextAnim) {
      aboutSectionTextAnimObserver.observe(aboutSectionTextAnim);
    }

    return () => {
      if (homeSectionSubtitleAnim) {
        homeSectionSubtitleAnimObserver.unobserve(homeSectionSubtitleAnim);
      }
      if (aboutSectionAnim) {
        aboutSectionAnimObserver.unobserve(aboutSectionAnim);
      }
      if (aboutSectionTitleAnim) {
        aboutSectionTitleAnimObserver.unobserve(aboutSectionTitleAnim);
      }
      if (aboutSectionTextAnim) {
        aboutSectionTextAnimObserver.unobserve(aboutSectionTextAnim);
      }
    };
  }, []);

  return (
    <div className="container">
      <Cursor />
      <Home />
      <About />
    </div>
  );
}
