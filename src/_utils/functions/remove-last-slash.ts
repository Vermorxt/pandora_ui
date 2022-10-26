export const removeLastSlash = (path: string) =>
  path.charAt(path.length - 1) === '/' ? path.substr(0, path.length - 1) : path
