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

      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </div>
  )
}

export default App
