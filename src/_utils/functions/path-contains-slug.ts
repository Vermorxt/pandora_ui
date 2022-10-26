export const pathContainsSlug = (slug: string, path: string) => {
  const slugs = path.split('/')

  return slugs.includes(slug)
}
