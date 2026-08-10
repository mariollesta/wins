import styles from './ShareButton.module.css'

function ShareButton({ tasks }) {
  function shareTasks() {
    const completed = tasks.filter((t) => t.day === 'hoy' && t.completed)

    if (completed.length === 0) {
      alert('Aún no has completado ninguna tarea hoy')
      return
    }

    const texto =
      'Mis tareas completadas hoy:\n\n' +
      completed.map((t) => `- ${t.description}`).join('\n')

    if (navigator.share) {
      navigator.share({
        title: 'Mis tareas de hoy',
        text: texto,
      })
    } else {
      navigator.clipboard.writeText(texto)
      alert('Copiado al portapapeles (tu navegador no soporta compartir directo)')
    }
  }

  return (
    <button className={styles.button} onClick={shareTasks}>
      Compartir tareas completadas
    </button>
  )
}

export default ShareButton