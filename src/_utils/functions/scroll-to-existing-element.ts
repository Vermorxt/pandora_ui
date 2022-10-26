export const scrollToExistingElement = (element: Element) => {
  if (!element) return

  element.scrollIntoView({ block: 'center', behavior: 'smooth' })
}
