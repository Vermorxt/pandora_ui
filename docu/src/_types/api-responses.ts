import { AnyType } from './AnyType'

export interface MetaDataInterface {
  lastSearchValue?: string
  filteredListLength?: number
  orderBy?: string
  listLength?: number
  cachedListLength?: number
}

export interface ApiData {
  meta?: MetaDataInterface
  data: AnyType[]
}

export interface ApiResponseData {
  status: (statusCode: number) => {
    (): any
    new (): any
    json: {
      (response: ApiData): void
      new (): any
    }
  }
}
