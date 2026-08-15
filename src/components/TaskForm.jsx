import styles from './TaskForm.module.css'
import { useState, useRef, useEffect } from 'react'
import { Plus } from '../icons/Plus'
import { ChevronDown } from '../icons/ChevronDown'

const DAY_OPTIONS = [
  { value: 'hoy', label: 'Hoy' },
  { value: 'mañana', label: 'Mañana' },
]

function TaskForm({ onAdd }) {
  const [description, setDescription] = useState('')
  const [day, setDay] = useState('hoy')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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

  const selectedLabel = DAY_OPTIONS.find((opt) => opt.value === day)?.label

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <div className={styles.dropdown} ref={dropdownRef}>
          <button
            type="button"
            className={styles.dropdownTrigger}
            onClick={() => setIsOpen((open) => !open)}
          >
            {selectedLabel}
            <ChevronDown
              width={14}
              height={14}
              className={isOpen ? styles.chevronOpen : styles.chevron}
            />
          </button>

          {isOpen && (
            <ul className={styles.dropdownList}>
              {DAY_OPTIONS.map((opt) => (
                <li key={opt.value}>
                  <button
                    type="button"
                    className={
                      opt.value === day
                        ? styles.dropdownOptionActive
                        : styles.dropdownOption
                    }
                    onClick={() => {
                      setDay(opt.value)
                      setIsOpen(false)
                    }}
                  >
                    {opt.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <input
          type="text"
          className={styles.input}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Nueva tarea"
        />
      </div>

      <button className={styles.button} onClick={handleSubmit} aria-label="Añadir tarea">
        <Plus width={18} height={18} className={styles.icon} />
        <span className={styles.buttonText}>Añadir tarea</span>
      </button>
    </div>
  )
}

export default TaskForm