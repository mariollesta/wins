import styles from './App.module.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import ShareSection from './components/ShareSection'
import useTasks from './hooks/useTasks'

function App() {
  const { tasks, todayTasks, tomorrowTasks, addTask, toggleCompleted, removeTask } = useTasks()

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.card}>
          <TaskForm onAdd={addTask} />

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

          <ShareSection tasks={tasks} />
        </div>
      </div>
    </>
  )
}

export default App