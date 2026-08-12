import { useLayoutEffect, useRef, useState } from 'react'
import styles from './PreviewModal.module.css'
import ShareCard from './ShareCard'

function PreviewModal({ tasks, shareText, onClose }) {
  const [tab, setTab] = useState('text')
  const modalRef = useRef(null)
  const previousHeightRef = useRef(0)
  const isInitialMount = useRef(true)

  useLayoutEffect(() => {
    const modal = modalRef.current
    if (!modal) return

    if (isInitialMount.current) {
      isInitialMount.current = false
      previousHeightRef.current = modal.offsetHeight
      return
    }

    const targetHeight = modal.offsetHeight
    if (previousHeightRef.current === targetHeight) return

    modal.style.height = `${previousHeightRef.current}px`

    requestAnimationFrame(() => {
      modal.style.height = `${targetHeight}px`
    })
    previousHeightRef.current = targetHeight

    const onTransitionEnd = (e) => {
      if (e.propertyName !== 'height') return
      modal.style.height = 'auto'
      modal.removeEventListener('transitionend', onTransitionEnd)
    }
    modal.addEventListener('transitionend', onTransitionEnd)

    return () => modal.removeEventListener('transitionend', onTransitionEnd)
  }, [tab])

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        ref={modalRef}
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <div className={styles.tabs}>
            <button
              className={tab === 'text' ? styles.tabActive : styles.tab}
              onClick={() => setTab('text')}
            >
              Texto
            </button>
            <button
              className={tab === 'social' ? styles.tabActive : styles.tab}
              onClick={() => setTab('social')}
            >
              Redes sociales
            </button>
          </div>
          <button
            className={styles.close}
            onClick={onClose}
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className={styles.content}>
          {tab === 'text' ? (
            <pre className={styles.textPreview}>{shareText}</pre>
          ) : (
            <div className={styles.cardScaler}>
              <ShareCard tasks={tasks} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PreviewModal