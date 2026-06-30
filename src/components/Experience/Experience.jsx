import React from 'react';
import styles from './Experience.module.css';
import { getImageURL } from '../../utils';
import config from './config.json';

export const Experience = () => {
  return (
    <section id="experience">
      <div className={styles.spacer}>
        <p className={styles.title1}>Learn About My</p>
        <h1 className={styles.title2}>Experience</h1>
      </div>
      <div className={styles.cardContainer}>
        {config.map((category, index) => (
          <div className={styles.card} key={index}>
            <h2 className={styles.cardTitle}>{category.title}</h2>
            <ul className={styles.skillList}>
              {category.skills.map((skill, skillIndex) => (
                <li className={styles.skillItem} key={skillIndex}>
                  <img
                    src={getImageURL('experience/checkmark.png')}
                    alt=""
                    className={styles.checkmarkImg}
                  />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
