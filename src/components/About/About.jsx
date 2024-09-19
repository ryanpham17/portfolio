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
                        <img src={getImageURL("about/experience.png")} alt="experience-icon" className={styles.experienceIcon}/>
                        <h3 className={styles.experience}>Experience</h3>
                        <p className={styles.experienceDescription}>N/A <br /> Software Developer Engineer</p>
                    </div>
                    <div className={styles.detailsContainer2}>
                        <img src={getImageURL("about/education.png")} alt="education-icon" className={styles.educationIcon}/>
                        <h3 className={styles.experience}>Education</h3>
                        <p className={styles.experienceDescription}>California State Polytechnic University, Pomona</p>
                    </div>
                </div>
                <div>
                    <p className={styles.textContainer}>Hello, I am Ryan Pham, a third year Computer Science major at California State Polytechnic University, Pomona. I am actively looking for Summer internship opportunities. I enjoy participating in Hackathons and developing my technical skillset whatever way possible.</p>
                </div>
            </div>
        </div>
            
        </div>
    </section>

  )
}
