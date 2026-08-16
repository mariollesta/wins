import styles from './TermsAndConditions.module.css'
import BaseLayout from '../layouts/BaseLayout'

function TermsAndConditions() {
  return (
    <BaseLayout>
      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>Términos y condiciones</h1>
          <p className={styles.subtitle}>Última actualización: agosto de 2026</p>
        </header>

        <p className={styles.intro}>
          [Al usar Wins, aceptas estos términos. Si no estás de acuerdo, simplemente no uses la app.]
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Qué es Wins</h2>
          <p className={styles.paragraph}>
            Wins es una aplicación gratuita de lista de tareas diarias. Es un proyecto personal de código abierto, sin garantías de disponibilidad continua ni soporte formal.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tus datos</h2>
          <p className={styles.paragraph}>
            Wins no tiene servidor ni base de datos. Todas tus tareas se guardan únicamente en el localStorage de tu navegador — nunca salen de tu dispositivo, no las vemos, no las almacenamos. Si borras los datos de tu navegador o cambias de dispositivo, perderás tus tareas.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Uso del servicio</h2>
          <p className={styles.paragraph}>
            Usa Wins de forma responsable y legal. No está permitido intentar dañar, sobrecargar o explotar vulnerabilidades de la aplicación.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Enlaces y servicios de terceros</h2>
          <p className={styles.paragraph}>
            Wins enlaza a servicios externos (como GitHub o Stripe/Buy Me a Coffee para donaciones). No somos responsables del contenido o las políticas de esos sitios.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Código abierto</h2>
          <p className={styles.paragraph}>
            El código de Wins es público bajo licencia MIT. Puedes revisarlo, usarlo o modificarlo según los términos de esa licencia.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sin garantías</h2>
          <p className={styles.paragraph}>
            Wins se ofrece "tal cual", sin garantías de ningún tipo. No nos hacemos responsables de pérdidas de datos, interrupciones del servicio o cualquier daño derivado de su uso.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Cambios</h2>
          <p className={styles.paragraph}>
            Estos términos pueden actualizarse. Los cambios importantes se reflejarán en esta página.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contacto</h2>
          <p className={styles.paragraph}>
            ¿Dudas? Escríbeme a través del enlace de contacto en la app.
          </p>
        </section>
      </article>
    </BaseLayout>
  )
}

export default TermsAndConditions