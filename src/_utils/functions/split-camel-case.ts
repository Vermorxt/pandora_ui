export const splitCamelCase = (str: string) => str?.replace(/([a-z])([A-Z])/g, '$1 $2')?.toLocaleLowerCase()
