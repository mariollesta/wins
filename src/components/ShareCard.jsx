import { forwardRef } from 'react'
import styles from './ShareCard.module.css'

const ShareCard = forwardRef(function ShareCard({ tasks }, ref) {
  const today = new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
  })

  return (
    <div ref={ref} className={styles.card}>
      <span className={styles.date}>{today}</span>
      <h2 className={styles.title}>Mis Wins</h2>

      <ul className={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.item}>
            <span className={styles.check}>✓</span>
            {task.description}
          </li>
        ))}
      </ul>

      <span className={styles.footer}>Hecho con Wins</span>
    </div>
  )
})

export default ShareCard