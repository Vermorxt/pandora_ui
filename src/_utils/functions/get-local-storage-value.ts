export const getLocalStorageValue = (value: string) => {
  if (typeof window !== 'undefined') {
    const localStorage = window.localStorage.getItem(value)

    if (localStorage) {
      return localStorage
    }
  }

  return null
}
