import styles from './App.module.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import ShareSection from './components/ShareSection'
import Footer from './components/Footer'
import SupportWins from './components/SupportWins'
import useTasks from './hooks/useTasks'

function App() {
  const { tasks, todayTasks, tomorrowTasks, addTask, toggleCompleted, removeTask } = useTasks()

  return (
    <>
      <Header />
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
      <Footer />
      <SupportWins />
    </>
  )
}

export default App