import styles from './SupportWins.module.css'
import { HandLoveYou} from '../icons/HandLoveYou'

const SUPPORT_URL = import.meta.env.VITE_SUPPORT_URL

function SupportWins() {
  return (
    <a
      href={SUPPORT_URL}
      target="_blank"
      rel="noreferrer"
      className={styles.widget}
      aria-label="Apoya a Wins"
    >
      <HandLoveYou width={20} height={20} />
      <span className={styles.text}>Apoya a Wins</span>
    </a>
  )
}

export default SupportWins