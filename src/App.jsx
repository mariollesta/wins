import styles from './App.module.css'
import BaseLayout from './layouts/BaseLayout'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import ShareSection from './components/ShareSection'
import useTasks from './hooks/useTasks'

function App() {
  const { tasks, todayTasks, tomorrowTasks, addTask, toggleCompleted, removeTask } = useTasks()

  return (
    <BaseLayout>
      <div className={styles.container}>
        <TaskForm onAdd={addTask} />

        <div className={styles.lists}>
          <TaskList
            title="Hoy"
            tasks={todayTasks}
            onToggle={toggleCompleted}
            onRemove={removeTask}
          />

          <TaskList
            title="Mañana"
            tasks={tomorrowTasks}
            onToggle={toggleCompleted}
            onRemove={removeTask}
          />
        </div>

        <ShareSection tasks={tasks} />
      </div>
    </BaseLayout>
  )
}

export default App