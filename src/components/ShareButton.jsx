import styles from './ShareButton.module.css'

function ShareButton({ icon, children, onClick, ariaLabel }) {
  const isIconOnly = icon && !children

  return (
    <button
      className={isIconOnly ? styles.iconButton : styles.button}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
      {children}
    </button>
  )
}

export default ShareButton