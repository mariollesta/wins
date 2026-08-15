import styles from './TaskItem.module.css'
import { Trash } from '../icons/Trash'

function TaskItem({ task, onToggle, onRemove }) {
  return (
    <li className={styles.item}>
      {task.day === 'hoy' && (
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
      )}
      <span
        className={`${styles.description} ${task.completed ? styles.completed : ''}`}
      >
        {task.description}
      </span>
      <button
        className={styles.removeButton}
        onClick={() => onRemove(task.id)}
        aria-label="Eliminar tarea"
      >
        <Trash width={16} height={16} />
        <span className={styles.removeButtonText}>Eliminar</span>
      </button>
    </li>
  )
}

export default TaskItem