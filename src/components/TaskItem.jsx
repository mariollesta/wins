import styles from './TaskItem.module.css'

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
      <button className={styles.removeButton} onClick={() => onRemove(task.id)}>
        Eliminar
      </button>
    </li>
  )
}

export default TaskItem