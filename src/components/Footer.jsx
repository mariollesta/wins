import { Link } from './Link'
import styles from './Footer.module.css'
import SupportWins from './SupportWins'

const COLUMNS = [
  {
    title: 'Público',
    links: [
      { label: 'Open Source', href: 'https://github.com/mariollesta/wins' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Cómo funciona', href: '/como-funciona', internal: true },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Términos', href: '/terminos-y-condiciones', internal: true },
      { label: 'Privacidad', href: '/politica-de-privacidad', internal: true },
    ],
  },
]

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>Wins</span>
            <p className={styles.slogan}>Planea tu día y comparte tus logros</p>
          </div>

          <nav className={styles.columns} aria-label="Enlaces del sitio">
            {COLUMNS.map((col) => (
              <div key={col.title} className={styles.column}>
                <h4 className={styles.columnTitle}>{col.title}</h4>
                <ul className={styles.list}>
                  {col.links.map((link) =>
                    link.internal ? (
                      <li key={link.label}>
                        <Link className={styles.link} href={link.href}>
                          {link.label}
                        </Link>
                      </li>
                    ) : (
                      <li key={link.label}>
                        <a className={styles.link} href={link.href} target="_blank" rel="noreferrer">
                          {link.label}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2026 Wins. Hecho por mariollesta</p>
          <SupportWins />
        </div>
      </div>
    </footer>
  )
}

export default Footer