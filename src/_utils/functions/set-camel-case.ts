export const setCamelCase = (key: string) => {
  if (key) {
    return key.replace(/[-_\s.]+(.)?/g, (_, changedString: string) =>
      changedString ? changedString.toUpperCase() : key
    )
  }
}
