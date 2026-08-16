import styles from './BaseLayout.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function BaseLayout({ children }) {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default BaseLayout