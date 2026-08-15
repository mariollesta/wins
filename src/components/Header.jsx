import styles from './Header.module.css'
import { useTheme } from '../context/ThemeContext.jsx'
import { Sun } from '../icons/Sun'
import { Moon } from '../icons/Moon'
import { Coffee } from '../icons/HandLoveYou.jsx'

function Header() {
  const { theme, toggleTheme } = useTheme()
  const isDarkMode = theme === 'dark'

  return (
    <header className={styles.header}>
      <span className={styles.logo}>Wins</span>
      <div className={styles.actions}>
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
          {isDarkMode ? (
            <Moon width={20} height={20} className={styles.themeIcon} />
          ) : (
            <Sun width={20} height={20} className={styles.themeIcon} />
          )}
        </button>
      </div>
    </header>
  )
}

export default Header