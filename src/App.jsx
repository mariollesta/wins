import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  function addTask() {
    if (text.trim() === "") return

    const newTask = {
      id: Date.now(),
      text: text,
      day: "hoy",
      completed: false,
    }

    setTasks([...tasks, newTask])
    setText('')
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

  return (
    <div>
      <h1>Wins</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={addTask}>Agregar</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
