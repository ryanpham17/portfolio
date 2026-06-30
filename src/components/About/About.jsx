import React from 'react';
import styles from './About.module.css';
import { getImageURL } from '../../utils';


export const About = () => {
  return (
    <section id="about" >
    <p className={styles.title1}>Get To Know More</p>
    <h1 className={styles.title2}>About Me</h1>

    <div className={styles.sectionContainer}>
        <div className={styles.aboutContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.aboutImg} src={getImageURL("about/aboutColor.png")} alt="" />
            </div>
            <div className={styles.aboutDetailsContainer}>
                <div className={styles.mainDetailsContainer}>
                    <div className={styles.detailsContainer}></div>
                    <div className={styles.detailsContainer1}>
                        <img src={getImageURL("about/eye.png")} alt="eye-icon" className={styles.experienceIcon}/>
                        <h3 className={styles.experience}>Focus</h3>
                        <p className={styles.experienceDescription}>AI/ML • Full-Stack • Embedded </p>
                    </div>
                    <div className={styles.detailsContainer2}>
                        <img src={getImageURL("about/education.png")} alt="education-icon" className={styles.educationIcon}/>
                        <h3 className={styles.experience}>Education</h3>
                        <p className={styles.experienceDescription}>California State Polytechnic University, Pomona</p>
                    </div>
                </div>
                <div>
                    <p className={styles.textContainer}>Hi, I'm Ryan Pham, a fourth-year Computer Science student at California State Polytechnic University, Pomona. I enjoy building software across AI, machine learning, full-stack development, and embedded systems. After earning my bachelor's degree, I plan to pursue a master's in Computer Science with a focus on machine learning. I'm currently seeking internship and full-time software engineering opportunities where I can continue learning, solve meaningful problems, and contribute to impactful projects.</p>
                </div>
            </div>
        </div>
            
        </div>
    </section>

  )
}
