declare type Enum = {
  [id: number]: string
}
export const enumToArray = (enumeration: Enum) => Object.values(enumeration)
