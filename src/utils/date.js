export function formatToday() {
  return new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
  })
}