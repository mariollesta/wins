import { useState } from 'react'

function TaskForm({ onAdd }) {
  const [description, setDescription] = useState('')
  const [day, setDay] = useState('hoy')

  function handleSubmit() {
    if (description.trim() === '') return

    onAdd({
      id: Date.now(),
      description: description,
      day: day,
      completed: false,
    })

    setDescription('')
  }

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Nueva tarea"
      />
      <select value={day} onChange={(e) => setDay(e.target.value)}>
        <option value="hoy">Hoy</option>
        <option value="mañana">Mañana</option>
      </select>
      <button onClick={handleSubmit}>Agregar</button>
    </div>
  )
}

export default TaskForm