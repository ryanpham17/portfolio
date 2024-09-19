import React from 'react'
import styles from './Contact.module.css';
import { getImageURL } from '../../utils';

export const Contact = () => {
  return (
    <section id="contact">
    <div className={styles.spacer}>
        <p className={styles.title1}>Get in Touch</p>
        <h1 className={styles.title2}>Contact Me</h1>
    </div>
    <div className={styles.contactContainerOuter}>
        <div className={styles.contactContainer}>
            <img src={getImageURL("contact/email.png")} alt="email-icon" className={styles.emailIcon}/>
            <p className={styles.gmail}>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ryandphambusiness@gmail.com" target="_blank">rpham817@gmail.com</a>
            </p>
        </div>
        <div className={styles.contactContainer}>
            <img src={getImageURL("contact/linkedin.png")} alt="linkedin-icon" className={styles.icon}/>
            <p className={styles.linkedIn}>
                <a href="https://www.linkedin.com/in/ryan-pham-0a1479268/" target="_blank">LinkedIn</a>
            </p>
        </div>
    </div>
    </section>
  )
}

