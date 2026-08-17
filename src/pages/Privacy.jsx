import ArticleLayout from '../layouts/ArticleLayout'

const SECTIONS = [
  {
    title: 'Qué datos maneja Wins',
    paragraph:
      'Wins no tiene servidor ni base de datos propia. Tus tareas se guardan únicamente en el localStorage de tu navegador, en tu propio dispositivo. Nunca las enviamos, almacenamos ni tenemos acceso a ellas.',
  },
  {
    title: 'Qué NO recopilamos',
    paragraph:
      'No pedimos registro, no usamos cookies de seguimiento, no recopilamos tu email, ubicación ni ningún dato personal para usar la app.',
  },
  {
    title: 'Servicios de terceros',
    paragraph:
      'Si decides apoyar el proyecto a través del botón de donación, esa transacción la procesa un proveedor externo (Stripe o Buy Me a Coffee), fuera de Wins. Esos servicios tienen sus propias políticas de privacidad, ya que ellos sí pueden recopilar datos de pago (como tu email o método de pago) para procesar la donación.',
  },
  {
    title: 'Analítica',
    paragraph:
      'Wins no usa ninguna herramienta de analítica ni seguimiento por el momento. Si en el futuro se añade alguna (por ejemplo, para entender el uso general de la app de forma anónima), esta política se actualizará para reflejarlo.',
  },
  {
    title: 'Cambios en esta política',
    paragraph: 'Esta política puede actualizarse. Los cambios importantes se reflejarán en esta página.',
  },
  {
    title: 'Contacto',
    paragraph: '¿Dudas sobre privacidad? Escríbeme a través del enlace de contacto en la app.',
  },
]

function PrivacyPage() {
  return (
    <ArticleLayout
      title="Política de privacidad"
      intro="En Wins, tu privacidad es simple: no recopilamos tus datos, porque no hay dónde guardarlos."
      sections={SECTIONS}
      updates={[
        {
          date: 'Agosto 2026',
          description: 'Publicación inicial de la política de privacidad.',
        },
      ]}
    />
  )
}

export default PrivacyPage