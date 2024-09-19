import React from 'react';
import styles from './Projects.module.css';
import './cards.css';
import { getImageURL } from '../../utils';
import config from './config.json';

export const Projects = () => {
  let cardArr = config;

  return (
    <section id="projects">
      <div className={styles.spacer}>
        <p className={styles.title1}>Check Out My Recent</p>
        <h1 className={styles.title2}>Projects</h1>
      </div>
      <div className={styles.cardContainer}>
        {cardArr.map((eachCard, index) => (
          <div className="card" style={{ width: '18rem' }} key={index}>
            <img
              src={getImageURL(`projects/${eachCard.image}.png`)} className="card-img-top" alt={eachCard.title}
            />
            <div className="card-body">
              <h5 className="card-title">{eachCard.title}</h5>
              <p className="card-text">{eachCard.text}</p>
              <a href={eachCard.link} target="_blank" className="btn btn-primary">
                {eachCard.button}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
