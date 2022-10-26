export const scrollToElementClass = (elementClass: string) => {
  if (!elementClass) return

  const elementScrollTo = document?.getElementsByClassName(elementClass) as unknown as HTMLElement[]

  if (elementScrollTo) {
    elementScrollTo[0].scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
}
