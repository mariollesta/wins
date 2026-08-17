import { useState } from 'react'
import styles from './ShareSection.module.css'
import ShareButton from './ShareButton'
import ShareCard from './ShareCard'
import PreviewModal from './PreviewModal'
import useShare from '../hooks/useShare'
import { Eye } from '../icons/Eye'
import { ClipboardText } from '../icons/ClipboardText'
import { Share } from '../icons/Share'


function ShareSection({ tasks }) {
  const [showPreview, setShowPreview] = useState(false)
  const { shareCardRef, completedTasks, getShareText, shareAsText, shareAsImage } =
    useShare(tasks)

  return (
    <div className={styles.section}>
      
      <div className={styles.row}>
        <ShareButton
          variant="capsule"
          icon={<Eye width={18} height={18} />}
          onClick={() => setShowPreview(true)}
          ariaLabel="Vista previa"
          label="Vista previa"
        />

        <ShareButton
          variant="capsule"
          icon={<ClipboardText width={20} height={20} />}
          onClick={shareAsText}
          ariaLabel="Compartir tareas completadas como texto"
          label="Compartir como texto"
        />
        <ShareButton
          variant="capsule"
          icon={<Share width={20} height={20} />}
          onClick={shareAsImage}
          ariaLabel="Compartir tareas completadas como imagen"
          label="Compartir como imagen"
        />
      </div>

      <div className={styles.hiddenWrapper}>
        <ShareCard ref={shareCardRef} tasks={completedTasks} />
      </div>

      {showPreview && (
        <PreviewModal
          tasks={completedTasks}
          shareText={getShareText()}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  )
}

export default ShareSection