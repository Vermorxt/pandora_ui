export const splitCamelCaseMinus = (str: string) => str?.replace(/([0-9a-z])([0-9A-Z])/g, '$1-$2')?.toLocaleLowerCase()
