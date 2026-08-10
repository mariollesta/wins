function TaskItem({ task, onToggle, onRemove }) {
  return (
    <li>
      {task.day === 'hoy' && (
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
      )}
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
        }}
      >
        {task.description}
      </span>
      <button onClick={() => onRemove(task.id)}>Eliminar</button>
    </li>
  )
}

export default TaskItem