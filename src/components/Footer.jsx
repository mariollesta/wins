import styles from './Footer.module.css'

const COLUMNS = [
  {
    title: 'Producto',
    links: [
      { label: 'Cómo funciona', href: '#' },
      { label: 'Open Source', href: 'https://github.com/mariollesta/wins' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidad', href: '#' },
      { label: 'Términos', href: '#' },
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
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a className={styles.link} href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <p className={styles.copyright}>© 2026 Wins. Hecho por mariollesta</p>
      </div>
    </footer>
  )
}

export default Footer