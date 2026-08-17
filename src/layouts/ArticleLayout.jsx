import styles from './ArticleLayout.module.css'
import BaseLayout from './BaseLayout'

function ArticleLayout({ title, intro, sections, updates }) {
  return (
    <BaseLayout>
      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
        </header>

        {intro && <p className={styles.intro}>{intro}</p>}

        {sections.map((section) => (
          <section key={section.title} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <p className={styles.paragraph}>{section.paragraph}</p>
          </section>
        ))}

        {updates && updates.length > 0 && (
          <section className={styles.updatesSection}>
            <h2 className={styles.updatesTitle}>Historial de actualizaciones</h2>
            <ul className={styles.updatesList}>
              {updates.map((update) => (
                <li key={update.date} className={styles.updateItem}>
                  <span className={styles.updateDate}>{update.date}</span>
                  <p className={styles.updateDescription}>{update.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </BaseLayout>
  )
}

export default ArticleLayout