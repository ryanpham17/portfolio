import styles from './Experience.module.css';
import config from './config.json';

export const Experience = () => {
  return (
    <section id="experience">
      <div className={styles.spacer}>
        <p className={styles.title1}>02 / Experience</p>
        <h1 className={styles.title2}>What I use.</h1>
      </div>
      <div className={styles.cardContainer}>
        {config.map((category, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>0{index + 1}</span>
              <h2 className={styles.cardTitle}>{category.title}</h2>
            </div>
            <ul className={styles.skillList}>
              {category.skills.map((skill, skillIndex) => (
                <li className={styles.skillItem} key={skillIndex}>
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
