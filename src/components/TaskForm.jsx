import styles from './TaskForm.module.css'
import { useState } from 'react'
import { CirclePlus } from '../icons/CirclePlus'

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
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <input
          type="text"
          className={styles.input}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Nueva tarea"
        />
        <select
          className={styles.select}
          value={day}
          onChange={(e) => setDay(e.target.value)}
        >
          <option value="hoy">Hoy</option>
          <option value="mañana">Mañana</option>
        </select>
      </div>

      <button className={styles.button} onClick={handleSubmit} aria-label="Añadir tarea">
        <CirclePlus width={18} height={18} />
        <span className={styles.buttonText}>Añadir</span>
      </button>
    </div>
  )
}

export default TaskForm