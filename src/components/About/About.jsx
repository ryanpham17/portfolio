import styles from './About.module.css';


export const About = () => {
  return (
    <section id="about" >
    <div className={styles.sectionHeader}><p className={styles.title1}>01 / About</p><h1 className={styles.title2}>About me.</h1></div>

    <div className={styles.sectionContainer}>
        <div className={styles.aboutContainer}>
            <div className={styles.aboutDetailsContainer}>
                <div>
                    <p className={styles.textContainer}>I&apos;m a Computer Science student at Cal Poly Pomona who enjoys building practical software. My interests span AI/ML, computer vision, full-stack development, and embedded systems. I&apos;m currently seeking software engineering opportunities where I can keep learning and contribute to meaningful work.</p>
                </div>
            </div>
        </div>
            
        </div>
    </section>

  )
}
