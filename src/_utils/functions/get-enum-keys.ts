export const getEnumKeys = (target: Record<string, number | string>): string[] => {
  const allKeys: string[] = Object.keys(target)
  const parsedKeys: string[] = []

  for (const key of allKeys) {
    const needToIgnore: boolean = target[target[key]]?.toString() === key && !isNaN(parseInt(key, 10))

    if (!needToIgnore) {
      parsedKeys.push(key)
    }
  }

  return parsedKeys
}
