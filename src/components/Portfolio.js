// src/components/Portfolio.js
import React from 'react';

const Portfolio = () => (
    <div>
        <h1 className='Heading-4-portfolio' data-aos="fade-up-right" data-aos-delay="500">
        Projects
    </h1>
  <section className="Portfolio">
    <img src="/assets/project1.jpg" alt="Project 1" data-aos="fade-right" data-aos-delay="400" />
    <img src="/assets/project2.jpg" alt="Project 2" data-aos="fade-left" data-aos-delay="400" />
  </section>
    </div>
);

export default Portfolio;
