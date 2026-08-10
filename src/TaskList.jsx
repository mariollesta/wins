import TaskItem from './TaskItem'

function TaskList({ title, tasks, onToggle, onRemove }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
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