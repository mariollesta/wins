import { useState, useEffect } from 'react'

function App() {
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
  
  const [description, setdescription] = useState('')
  const [day, setDay] = useState('hoy')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function addTask() {
    if (description.trim() === "") return

    const newTask = {
      id: Date.now(),
      description: description,
      day: day,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setdescription('')
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

  return (
    <div>
      <h1>Wins</h1>

      <input
        type="description"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
        placeholder="Nueva tarea"
      />
      <select value={day} onChange={(e) => setDay(e.target.value)}>
        <option value="hoy">Hoy</option>
        <option value="mañana">Mañana</option>
      </select>
      <button onClick={addTask}>Agregar</button>

      <h2>Hoy</h2>
      <ul>
        {todayTasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task.id)}
            />
            <span
              style={{
                descriptionDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.description}
            </span>
            <button onClick={() => removeTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <h2>Mañana</h2>
      <ul>
        {tomorrowTasks.map((task) => (
          <li key={task.id}>
            <span>{task.description}</span>
            <button onClick={() => removeTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
