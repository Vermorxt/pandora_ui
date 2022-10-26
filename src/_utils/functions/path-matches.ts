import { Helper } from '../cms-utils'

export const pathMatches = (allowedRoutes: string[], path: string) => {
  if (path === '/' || !allowedRoutes) {
    return false
  }

  if (allowedRoutes.includes(Helper.removeLastSlash(path))) {
    return true
  }
}
