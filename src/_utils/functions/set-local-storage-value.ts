export const setLocalStorageValue = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, value)
  }
}
