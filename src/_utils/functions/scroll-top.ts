export const scrollTop = (id?: string): void => {
  if (typeof window !== 'undefined') {
    const mainElement = document.getElementById(id || 'main-content')
    if (mainElement) {
      mainElement.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
