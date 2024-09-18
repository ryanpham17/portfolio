import React from 'react'
import styles from './Projects.module.css';
import { getImageURL } from '../../utils';

export const Projects = () => {
  return (
    <section id = "projects">
        <div className={styles.spacer}>
            <p className={styles.title1}>Check Out My Recent</p>
            <h1 className= {styles.title2}>Projects</h1>
        </div>
        <div className={styles.projectsOuterContainer}>
          <div className={styles.projectsContainer}>
            <p>Currently Working on Projects</p>
          </div>
        </div>
    </section>
  )
}

