export const getBrowserFullscreenElementProp = () => {
  if (typeof document.fullscreenElement !== 'undefined') {
    return 'fullscreenElement'
  }
}
