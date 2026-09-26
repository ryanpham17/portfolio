import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <section id="contact">
    <div className={styles.spacer}>
        <h1 className={styles.title2}>Let&apos;s connect.</h1>
    </div>
    <div className={styles.bottomSpacer} aria-hidden="true" />
    <p className={styles.footer}>© 2026 Ryan Pham</p>
    </section>
  )
}

