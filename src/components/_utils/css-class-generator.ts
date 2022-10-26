import { AnyType } from '../../_types/AnyType'
import { Helper } from '../../_utils/cms-utils'

export interface GetClassNameAttributesProps {
  names: any
  convert: string[][]
  withoutPrefix: string[]
  addPrefix: string | null
  defaultValue?: string | null
}

const convertCssClasses = (name: string, value: boolean, addPrefix: string | null, convert: string[][]) => {
  const convertIndex = convert[0].findIndex(c => c === name && (value === true || typeof value === 'string'))

  if (convertIndex >= 0) {
    if (addPrefix) {
      if (convert[1].length > 0) {
        return `${addPrefix}-${convert[1][convertIndex]}`
      } else {
        return `${addPrefix}-${convert[0][convertIndex]}`
      }
    }

    if (convert[1].length > 0) {
      return `${convert[1][convertIndex]}`
    } else {
      return `${convert[0][convertIndex]}`
    }
  }

  return null
}

export const getClassNamesFromAttributes = ({
  names,
  convert,
  withoutPrefix,
  addPrefix,
  defaultValue,
}: GetClassNameAttributesProps) => {
  const classNamesEntries = Object.entries(names as string).map(r => {
    if (!r) return
    const name = r[0]
    const value = r[1] as unknown as boolean
    const hasToBeConverted = convert[0] && convert[0].includes(name)

    if (hasToBeConverted) {
      const res = convertCssClasses(name, value, addPrefix, convert)
      if (res) return res
    }

    if (!hasToBeConverted) {
      if (addPrefix) {
        return `${addPrefix}-${name}`
      }
    }

    if (!withoutPrefix.includes(name) && value === true) {
      if (addPrefix) {
        return `${addPrefix}-${name}`
      }
    }
  })

  // NOTE: add values without prefix that not found above
  withoutPrefix.forEach(s => {
    if (!s) return

    const entries = Object.entries(names as string)
    const keys = entries[0] as any[]

    if (keys?.[0] === s && keys?.[1] === true) {
      classNamesEntries.push(Helper.splitCamelCaseMinus(s))
    }
  })

  let classAttributes = classNamesEntries.toString().replace(/,/g, ' ')

  // NOTE: add default value if no class was added
  if (defaultValue) {
    const addedClassNames = convert[1]
      .map(c => (classAttributes.includes(`${addPrefix ? addPrefix + '-' + c : c}`) ? c : false))
      .filter(n => n)

    if (addedClassNames.length <= 0) classAttributes += ` ${defaultValue}`
  }

  return classAttributes
}

export const getUsedAttributes = (rest: AnyType, objects: AnyType) =>
  Object.keys(rest).filter(k => Object.keys(objects).includes(k))

export const getUsedVariables = (objects: AnyType) =>
  Object.entries(objects)
    .filter(([key, value]) => {
      return value === true ? key : null
    })
    .filter(n => n)

export const convertObjectToArray = (arr: string[]) => arr.reduce((a, v) => ({ ...a, [v]: v }), {})
export const splitAllCamelCase = (arr: string[]) => arr.map(a => Helper.splitCamelCaseMinus(a))

export const generateClassNames = (props: AnyType, prefix: string) => {
  const usedProps = getUsedVariables(props)
  const usedValues = convertObjectToArray([usedProps[0]?.[0]] || [])

  const classAttributes = getClassNamesFromAttributes({
    names: usedValues,
    convert: [],
    withoutPrefix: [],
    addPrefix: prefix,
    defaultValue: '',
  })

  const classAttributesText = getClassNamesFromAttributes({
    names: usedValues,
    convert: [],
    withoutPrefix: [],
    addPrefix: 'text',
    defaultValue: '',
  })

  return {
    classNames: classAttributes as string,
    usedProps: usedValues,
    classAttributesText,
  }
}
