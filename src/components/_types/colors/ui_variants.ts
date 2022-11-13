export type T_Variants =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'ghost'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'neutral'

export interface I_Variants {
  variant?: T_Variants
}
