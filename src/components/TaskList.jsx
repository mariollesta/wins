import styles from './TaskList.module.css'
import TaskItem from './TaskItem'

function TaskList({ title, tasks, onToggle, onRemove }) {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>{title}</h2>
      <ul className={styles.list}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </div>
  )
}

export default TaskList