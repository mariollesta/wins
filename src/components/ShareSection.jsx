import { useState } from 'react'
import styles from './ShareSection.module.css'
import ShareButton from './ShareButton'
import ShareCard from './ShareCard'
import PreviewModal from './PreviewModal'
import useShare from '../hooks/useShare'
import { Eye } from '../icons/Eye'
import { Share } from '../icons/Share'
import { Instagram } from '../icons/Instagram'

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
        />

        <ShareButton
          variant="capsule"
          icon={<Share width={20} height={20} />}
          onClick={shareAsText}
          ariaLabel="Compartir tareas completadas"
        />
        <ShareButton
          variant="capsule"
          icon={<Instagram width={20} height={20} />}
          onClick={shareAsImage}
          ariaLabel="Compartir en Instagram"
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