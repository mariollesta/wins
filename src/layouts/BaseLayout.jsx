import styles from './BaseLayout.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SupportWins from '../components/SupportWins'

function BaseLayout({ children }) {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
      <SupportWins />
    </div>
  )
}

export default BaseLayout