import { useRef } from 'react'
import { toPng } from 'html-to-image'

function useShare(tasks) {
  const shareCardRef = useRef()

  const completedTasks = tasks.filter((t) => t.day === 'hoy' && t.completed)

  function getCompletedTasks() {
    if (completedTasks.length === 0) {
      alert('Aún no has completado ninguna tarea hoy')
      return null
    }
    return completedTasks
  }

  function getShareText() {
    return (
      'Mis Wins:\n\n' +
      completedTasks.map((t) => `- ${t.description}`).join('\n')
    )
  }

  function shareAsText() {
    const completed = getCompletedTasks()
    if (!completed) return

    const texto = getShareText()

    if (navigator.share) {
      navigator.share({ title: 'Mis Wins', text: texto })
    } else {
      navigator.clipboard.writeText(texto)
      alert('Copiado al portapapeles (tu navegador no soporta compartir directo)')
    }
  }

  async function shareAsImage() {
    const completed = getCompletedTasks()
    if (!completed) return

    await new Promise((resolve) => requestAnimationFrame(resolve))

    const dataUrl = await toPng(shareCardRef.current, { pixelRatio: 2 })
    const blob = await (await fetch(dataUrl)).blob()
    const file = new File([blob], 'wins.png', { type: 'image/png' })

    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      navigator.share({ files: [file], title: 'Mis Wins' })
    } else {
      const link = document.createElement('a')
      link.href = dataUrl
      link.download = 'wins.png'
      link.click()
    }
  }

  return {
    shareCardRef,
    completedTasks,
    getShareText,
    shareAsText,
    shareAsImage,
  }
}

export default useShare