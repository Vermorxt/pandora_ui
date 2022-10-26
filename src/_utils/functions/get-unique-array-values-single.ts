export const getUniqueArrayValueSingle = (arr: string[]) => arr.filter((v, i, a) => a.indexOf(v) === i)
