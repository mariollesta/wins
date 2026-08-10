import { useState, useEffect } from 'react'

function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    let initialTasks = saved ? JSON.parse(saved) : []

    const today = new Date().toDateString()
    const lastDay = localStorage.getItem('lastDay')

    if (lastDay !== today) {
      initialTasks = initialTasks.map((task) =>
        task.day === 'mañana' ? { ...task, day: 'hoy' } : task
      )
      localStorage.setItem('lastDay', today)
      localStorage.setItem('tasks', JSON.stringify(initialTasks))
    }

    return initialTasks
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function addTask(newTask) {
    setTasks([...tasks, newTask])
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const todayTasks = tasks.filter((task) => task.day === 'hoy')
  const tomorrowTasks = tasks.filter((task) => task.day === 'mañana')

  return {
    tasks,
    todayTasks,
    tomorrowTasks,
    addTask,
    toggleCompleted,
    removeTask,
  }
}

export default useTasks