// src/components/Intro.js
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Intro = () => (
  <section className="intro">
    <h1 data-aos="fade-right" data-aos-delay="200">Hi there 👋, I'm</h1>
    <h2 data-aos="fade-left" data-aos-delay="400">adeola.</h2>
    <p className="role" data-aos="fade-up-right" data-aos-delay="500">
      Designer + Developer 💻
    </p>
    <p id="extra-text" data-aos="fade-up-left" data-aos-delay="700">
      I'm a design-minded front-end developer <br /> based in Lagos, Nigeria.
    </p>
    <button className="hire-me" data-aos="fade-up-right" data-aos-delay="800">Hire Me</button>
  </section>
);

export default Intro;
