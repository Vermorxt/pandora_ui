import { ChangeEventHandler } from 'react'

export type OnChange = (arg1?: { value?: number }) => void & ChangeEventHandler<HTMLInputElement>
