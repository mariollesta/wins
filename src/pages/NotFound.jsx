import styles from './NotFound.module.css'
import BaseLayout from '../layouts/BaseLayout'
import { Link } from '../components/Link'

function NotFoundPage() {
  return (
    <BaseLayout>
      <div className={styles.container}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Esta página no existe</h1>
        <p className={styles.text}>
          Parece que esta tarea se perdió por el camino. Volvamos a algo que sí exista.
        </p>
        <Link href="/" className={styles.link}>
          Volver al inicio
        </Link>
      </div>
    </BaseLayout>
  )
}

export default NotFoundPage