import styles from './HowItWorks.module.css'
import BaseLayout from '../layouts/BaseLayout'

function HowItWorksPage() {
  return (
    <BaseLayout>
      <article className={styles.article}>
        <h1 className={styles.title}>Cómo funciona</h1>

        <p className={styles.lead}>
          <span className={styles.leadPhrase}>Wins nace de una idea simple:</span>{' '}
          cada día es una hoja en blanco.
        </p>

        <p className={styles.paragraph}>
          <span className={styles.leadIn}>Cuando abres la app,</span>{' '}
          ves tus tareas de hoy — nada más. No hay listas eternas ni backlogs que crecen sin parar. Si algo no lo terminaste ayer, no se arrastra: hoy empiezas de cero, con espacio real para lo que importa ahora.
        </p>

        <p className={styles.paragraph}>
          <span className={styles.leadIn}>¿Y si ya sabes qué quieres hacer mañana?</span>{' '}
          Anótalo. Esas tareas esperan tranquilas hasta que cambie el día — entonces, automáticamente, pasan a ser las tareas de "hoy". Así puedes cerrar el día pensando en el siguiente, sin perder la idea.
        </p>

        <p className={styles.paragraph}>
          <span className={styles.leadIn}>Marca lo que completas, y celébralo.</span>{' '}
          Cada tarea que tachas es un pequeño "win". Al final del día, puedes compartir tus logros — como texto simple o como una imagen bonita, lista para tus redes.
        </p>

        <p className={styles.paragraph}>
          <span className={styles.leadIn}>Eso es todo.</span>{' '}
          Sin cuentas, sin nube, sin complicaciones — tus tareas viven en tu propio navegador. Wins no quiere ser otra app que gestionar. Quiere ser la más simple que uses hoy.
        </p>
      </article>
    </BaseLayout>
  )
}

export default HowItWorksPage