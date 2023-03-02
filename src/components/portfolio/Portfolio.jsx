import React from "react";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

import "./portfolio.css";

const data = [
  {
    id:1,
    image:IMG1,
    title: 'Shopify Ecommerce App',
    github: 'https://github.com/EngrAminullah?tab=repositories',
    demo:'https://dribble.com/Alien_pixels'
  },
  {
    id:2,
    image:IMG2,
    title: 'Chat App',
    github: 'https://github.com/EngrAminullah?tab=repositories',
    demo:'https://dribble.com/Alien_pixels'
  },
  {
    id:3,
    image:IMG3,
    title: 'Ecommerce App',
    github: 'https://github.com/EngrAminullah?tab=repositories',
    demo:'https://dribble.com/Alien_pixels'
  },
  {
    id:4,
    image:IMG4,
    title: 'Chat App',
    github: 'https://github.com/EngrAminullah?tab=repositories',
    demo:'https://dribble.com/Alien_pixels'
  },
  {
    id:5,
    image:IMG5,
    title: 'Expense Management Web App',
    github: 'https://github.com/EngrAminullah?tab=repositories',
    demo:'https://dribble.com/Alien_pixels'
  },
  {
    id:6,
    image:IMG6,
    title: 'Crypto Dashboard',
    github: 'https://github.com/EngrAminullah?tab=repositories',
    demo:'https://dribble.com/Alien_pixels'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo})=>{
          return (
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn"
              >
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          )
        })
       }
       
      </div>
    </section>
  );
};

export default Portfolio;
