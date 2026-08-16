import styles from './Privacy.module.css'
import BaseLayout from '../layouts/BaseLayout'

function PrivacyPage() {
  return (
    <BaseLayout>
      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>Política de privacidad</h1>
          <p className={styles.subtitle}>Última actualización: agosto de 2026</p>
        </header>

        <p className={styles.intro}>
          [En Wins, tu privacidad es simple: no recopilamos tus datos, porque no hay dónde guardarlos.]
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Qué datos maneja Wins</h2>
          <p className={styles.paragraph}>
            Wins no tiene servidor ni base de datos propia. Tus tareas se guardan únicamente en el localStorage de tu navegador, en tu propio dispositivo. Nunca las enviamos, almacenamos ni tenemos acceso a ellas.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Qué NO recopilamos</h2>
          <p className={styles.paragraph}>
            No pedimos registro, no usamos cookies de seguimiento, no recopilamos tu email, ubicación ni ningún dato personal para usar la app.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Servicios de terceros</h2>
          <p className={styles.paragraph}>
            Si decides apoyar el proyecto a través del botón de donación, esa transacción la procesa un proveedor externo (Stripe o Buy Me a Coffee), fuera de Wins. Esos servicios tienen sus propias políticas de privacidad, ya que ellos sí pueden recopilar datos de pago (como tu email o método de pago) para procesar la donación.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Analítica</h2>
          <p className={styles.paragraph}>
            Wins no usa ninguna herramienta de analítica ni seguimiento por el momento. Si en el futuro se añade alguna (por ejemplo, para entender el uso general de la app de forma anónima), esta política se actualizará para reflejarlo.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Cambios en esta política</h2>
          <p className={styles.paragraph}>
            Esta política puede actualizarse. Los cambios importantes se reflejarán en esta página.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contacto</h2>
          <p className={styles.paragraph}>
            ¿Dudas sobre privacidad? Escríbeme a través del enlace de contacto en la app.
          </p>
        </section>
      </article>
    </BaseLayout>
  )
}

export default PrivacyPage