import styles from './ShareButton.module.css'

function ShareButton({ icon, children, onClick, ariaLabel, variant, label }) {
  const isIconOnly = icon && !children
  const className = isIconOnly
    ? [styles.iconButton, variant === 'capsule' && styles.capsule]
        .filter(Boolean)
        .join(' ')
    : styles.button

  return (
    <button
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
      {children}
      {label && <span className={styles.tooltip}>{label}</span>}
    </button>
  )
}

export default ShareButton