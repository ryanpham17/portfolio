import React from 'react'
import styles from './Experience.module.css';
import { getImageURL } from '../../utils';

export const Experience = () => {
  return (
    <section id = "experience">
    <div className={styles.spacer}>
      <p className={styles.title1}>Learn Abouy My</p>
      <h1 className={styles.title2}>Experience</h1>
    </div>
    <div className={styles.experienceDetailsContainer}>
      <div className={styles.aboutContainer}>
        <div className={styles.detailsContainer}>
          <h2 className={styles.experienceSubTitle}>Languages</h2>
          <div className={styles.articleContainer}>
            <article>
              <img src={getImageURL("experience/checkmark.png")} alt="checkmarkIcon" className={styles.checkmarkImg}/>
              <div>
                <h3>HTML</h3>
              </div>
            </article>
            <article>
              <img src={getImageURL("experience/checkmark.png")} alt="checkmarkIcon" className={styles.checkmarkImg}/>
              <div>
                <h3>CSS</h3>
              </div>
            </article>
            <article>
              <img src={getImageURL("experience/checkmark.png")} alt="checkmarkIcon" className={styles.checkmarkImg}/>
              <div>
                <h3>SQL</h3>
              </div>
            </article>
            <article>
              <img src={getImageURL("experience/checkmark.png")} alt="checkmarkIcon" className={styles.checkmarkImg}/>
              <div>
                <h3>C#</h3>
              </div>
            </article>
            <article>
              <img src={getImageURL("experience/checkmark.png")} alt="checkmarkIcon" className={styles.checkmarkImg}/>
              <div>
                <h3>JavaScript</h3>
              </div>
            </article>
            <article>
              <img src={getImageURL("experience/checkmark.png")} alt="checkmarkIcon" className={styles.checkmarkImg}/>
              <div>
                <h3>Python</h3>
              </div>
            </article>
            <article>
              <img src={getImageURL("experience/checkmark.png")} alt="checkmarkIcon" className={styles.checkmarkImg}/>
              <div>
                <h3>C++</h3>
              </div>
            </article>
            <article>
              <img src={getImageURL("experience/checkmark.png")} alt="checkmarkIcon" className={styles.checkmarkImg}/>
              <div>
                <h3>Java</h3>
              </div>
            </article>
          </div>
        </div>
        <div className={styles.detailsContainer}>
          <h2 className={styles.experienceSubTitle}>Technologies</h2>
          <div className={styles.articleContainer}>
            <article>
              <img src={getImageURL("experience/checkmark.png")} alt="checkmarkIcon" className={styles.checkmarkImg}/>
              <div>
                <h3>React</h3>
              </div>
            </article>
            <article>
              <img src={getImageURL("experience/checkmark.png")} alt="checkmarkIcon" className={styles.checkmarkImg}/>
              <div>
                <h3>Node.js</h3>
              </div>
            </article>
            <article>
              <img src={getImageURL("experience/checkmark.png")} alt="checkmarkIcon" className={styles.checkmarkImg}/>
              <div>
                <h3>Express.js</h3>
              </div>
            </article>
            <article>
              <img src={getImageURL("experience/checkmark.png")} alt="checkmarkIcon" className={styles.checkmarkImg}/>
              <div>
                <h3>MongoDB</h3>
              </div>
            </article>
            <article>
              <img src={getImageURL("experience/checkmark.png")} alt="checkmarkIcon" className={styles.checkmarkImg}/>
              <div>
                <h3>TensorFlow</h3>
              </div>
            </article>
            <article>
              <img src={getImageURL("experience/checkmark.png")} alt="checkmarkIcon" className={styles.checkmarkImg}/>
              <div>
                <h3>MySQL</h3>
              </div>
            </article>
            <article>
              <img src={getImageURL("experience/checkmark.png")} alt="checkmarkIcon" className={styles.checkmarkImg}/>
              <div>
                <h3>Flask</h3>
              </div>
            </article>
            <article>
              <img src={getImageURL("experience/checkmark.png")} alt="checkmarkIcon" className={styles.checkmarkImg}/>
              <div>
                <h3>Git</h3>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
