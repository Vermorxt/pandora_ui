export const deleteDuplicates = (arr: number[]) => arr.filter((v, i, a) => a.indexOf(v) === i)
