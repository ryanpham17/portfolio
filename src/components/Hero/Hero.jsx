import styles from './Hero.module.css';
import { getImageURL } from '../../utils';
import Pdf from '../../../assets/hero/RyanPhamResume.pdf'


export const Hero = () => {
  return (
    <section id="home" className={styles.heroContainer}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Hello, I&apos;m</p>
        <div className={styles.nameGroup}>
          <h1 className={styles.title}>Ryan Pham</h1>
          <div className={styles.interestStrip} aria-label="Interests">
            <div className={styles.interestTrack}>
              {['Computer Vision', 'AI / Machine Learning', 'Full-Stack Development', 'Embedded Systems', 'Software Engineering', 'Computer Vision', 'AI / Machine Learning', 'Full-Stack Development', 'Embedded Systems', 'Software Engineering'].map((interest, index) => (
                <span className={styles.interestTag} key={`${interest}-${index}`}><span className={styles.interestDot} />{interest}</span>
              ))}
            </div>
          </div>
        </div>
        <p className={styles.description}>Software engineer focused on AI/ML, full-stack development, and embedded systems.</p>
        <div className={styles.BtnContainer}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ryandphambusiness@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>Contact Me</a>
          <a href={Pdf} target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>Resume</a>
        </div>
        <div className={styles.socialContainer} aria-label="Social links">
        <a href="https://github.com/ryanpham17" target="_blank" rel="noopener noreferrer">
          <img src={getImageURL("contact/github.png")} alt="GitHub" />
        </a>
        <a href={"https://www.linkedin.com/in/ryan-pham-0a1479268/"} target="_blank" rel="noopener noreferrer">
        <img src={getImageURL("contact/linkedin.png")} alt="LinkedIn" />
        </a>
        </div>
      </div>
    </section>
  );
}
