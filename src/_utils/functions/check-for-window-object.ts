export const checkForWindowObject = async () => {
  let index = 0

  const checkObject = () =>
    new Promise(resolve => {
      const interval = setInterval(() => {
        index += 1

        if (index >= 10) {
          clearInterval(interval)

          resolve(false)
        }

        if (typeof window === 'object') {
          clearInterval(interval)

          resolve(window)
        }
      }, 1000)
    })

  return await checkObject()
}
