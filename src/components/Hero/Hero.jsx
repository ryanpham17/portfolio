import React from 'react';
import styles from './Hero.module.css';
import { getImageURL } from '../../utils';
import Pdf from '../../../assets/hero/RyanPhamResume.pdf'


export const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <img src={getImageURL("hero/ProfilePicture.png")} alt="profile-pic" className={styles.profilePicture}/>
      <div className={styles.content}>
        <p className={styles.text1}>Hello, I'm</p>
        <h1 className={styles.title}>Ryan Pham</h1>
        <p className={styles.description}>Software Developer Engineer</p>
        <div className={styles.BtnContainer}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rpham817@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>Contact Me</a>
          <a href={Pdf} target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>Resume</a>
        </div>
        <div className={styles.socialContainer}>
        <a href="https://github.com/ryanpham17" target="_blank" rel="noopener noreferrer">
          <img src={getImageURL("contact/github.png")} alt="github-button" />
        </a>
        <a href={"https://www.linkedin.com/in/ryan-pham-0a1479268/"} target="_blank" rel="noopener noreferrer">
        <img src={getImageURL("contact/linkedin.png")} alt="linkedIn-button" />
        </a>
        </div>
      </div>
    </section>
  );
}
