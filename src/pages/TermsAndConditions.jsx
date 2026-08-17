import ArticleLayout from '../layouts/ArticleLayout'

const SECTIONS = [
  {
    title: 'Tus datos',
    paragraph:
      'Wins no tiene servidor ni base de datos. Todas tus tareas se guardan únicamente en el localStorage de tu navegador — nunca salen de tu dispositivo, no las vemos, no las almacenamos. Si borras los datos de tu navegador o cambias de dispositivo, perderás tus tareas.',
  },
  {
    title: 'Uso del servicio',
    paragraph:
      'Usa Wins de forma responsable y legal. No está permitido intentar dañar, sobrecargar o explotar vulnerabilidades de la aplicación.',
  },
  {
    title: 'Enlaces y servicios de terceros',
    paragraph:
      'Wins enlaza a servicios externos (como GitHub o Stripe/Buy Me a Coffee para donaciones). No somos responsables del contenido o las políticas de esos sitios.',
  },
  {
    title: 'Código abierto',
    paragraph:
      'El código de Wins es público bajo licencia MIT. Puedes revisarlo, usarlo o modificarlo según los términos de esa licencia.',
  },
  {
    title: 'Sin garantías',
    paragraph:
      'Wins se ofrece "tal cual", sin garantías de ningún tipo. No nos hacemos responsables de pérdidas de datos, interrupciones del servicio o cualquier daño derivado de su uso.',
  },
  {
    title: 'Cambios',
    paragraph: 'Estos términos pueden actualizarse. Los cambios importantes se reflejarán en esta página.',
  },
  {
    title: 'Contacto',
    paragraph: '¿Dudas? Escríbeme a través del enlace de contacto en la app.',
  },
]

function TermsAndConditionsPage() {
  return (
    <ArticleLayout
      title="Términos y condiciones"
      intro={`Wins es una aplicación gratuita de lista de tareas diarias. Es un proyecto personal de código abierto, sin garantías de disponibilidad continua ni soporte formal.\n\nAl usar Wins, aceptas estos términos. Si no estás de acuerdo, simplemente no uses la app.`}
      sections={SECTIONS}
      updates={[
        {
          date: 'Agosto 2026',
          description: 'Publicación inicial de los términos y condiciones.',
        },
      ]}
    />
  )
}

export default TermsAndConditionsPage