import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { FC, forwardRef } from 'react'
import { Ui_DropdownProps } from './type'
import React from 'react'

export const Ui_Dropdown: any = forwardRef<
  HTMLDivElement,
  Ui_DropdownProps & { Label: FC<Ui_DropdownProps>; Content: FC<Ui_DropdownProps> }
>((props, ref) => {
  const {
    children,
    className,
    tabIndex,
    label,
    content,
    position,
    style,
    loading,
    action,
    size,
    outline,
    disabled,
    noAnimation,
    allowFullScreen,
    variant,
    ...rest
  } = props

  const convertAttributeToSingleClass = [['full'], ['w-full']]

  const singleClasses = getClassNamesFromAttributes({
    names: rest,
    convert: convertAttributeToSingleClass,
    withoutPrefix: [],
    addPrefix: null,
  })

  const convertAttributeToClassName = [['rounded'], ['rounded-t-box rounded-b-box']]

  const classAttributes = getClassNamesFromAttributes({
    names: rest,
    convert: convertAttributeToClassName,
    withoutPrefix: [],
    addPrefix: 'dropdown',
  })
  const defaultClassNames = `dropdown ${`${classAttributes} ${singleClasses} ${(className as string) || ''}`}`

  if (!label && !content) {
    return (
      <div
        ref={ref}
        style={style}
        className={`dropdown m-1 dropdown-rounded ${position ? `dropdown-${position} ` : ''} 
        ${action ? `dropdown-${action} ` : ''}
        ${className ? className : ''}
        `}
      >
        {children}
      </div>
    )
  }

  if (label && !content) {
    return (
      <div className={defaultClassNames}>
        <Ui_Dropdown.Label
          tabIndex={tabIndex || 0}
          style={style}
          className={`btn m-1 
        ${className ? className : ''}
        ${variant ? `btn-${variant}` : ''}
        ${loading && loading === true ? 'loading' : ''}
        ${size && size === 'large' ? 'btn-lg' : ''} 
        ${size && size === 'medium' ? 'btn-md' : ''} 
        ${size && size === 'small' ? 'btn-sm' : ''} 
        ${size && size === 'mini' ? 'btn-xs' : ''} 
        ${size && size === 'tiny' ? 'btn-xxs' : ''} 
        ${size && size === 'block' ? 'btn-block' : ''} 
        ${size && size === 'full' ? 'btn-block' : ''} 
        ${size && size === 'wide' ? 'btn-wide' : ''} 
        ${loading && loading === true ? 'loading' : ''}
        ${outline && outline === true ? 'btn-outline' : ''}
        ${disabled ? 'btn-disabled' : ''}
        ${noAnimation ? 'no-animation' : ''}`.trim()}
        >
          {label}
        </Ui_Dropdown.Label>
        {children}
      </div>
    )
  }

  if (label && content) {
    return (
      <div className={defaultClassNames} ref={ref} style={style}>
        <Ui_Dropdown.Label
          tabIndex={0}
          style={style}
          className={`btn m-1 
          btn${' '}
        ${className ? className : ''}
        ${variant ? `btn-${variant}` : ''}
        ${loading && loading === true ? 'loading' : ''}
        ${size && size === 'large' ? 'btn-lg' : ''} 
        ${size && size === 'medium' ? 'btn-md' : ''} 
        ${size && size === 'small' ? 'btn-sm' : ''} 
        ${size && size === 'mini' ? 'btn-xs' : ''} 
        ${size && size === 'tiny' ? 'btn-xxs' : ''} 
        ${size && size === 'block' ? 'btn-block' : ''} 
        ${size && size === 'full' ? 'btn-block' : ''} 
        ${size && size === 'wide' ? 'btn-wide' : ''} 
        ${loading && loading === true ? 'loading' : ''}
        ${outline && outline === true ? 'btn-outline' : ''}
        ${disabled ? 'btn-disabled' : ''}
        ${noAnimation ? 'no-animation' : ''}`.trim()}
        >
          {label}
        </Ui_Dropdown.Label>
        <Ui_Dropdown.Content tabIndex={0} className="w-52">
          {content}
        </Ui_Dropdown.Content>
        {children}
      </div>
    )
  }

  return <></>
})

const Label: FC = forwardRef<HTMLLabelElement, Ui_DropdownProps>(
  ({ children, className, tabIndex, loading, size, disabled, noAnimation, variant, outline, style }, ref) => {
    return (
      <label
        tabIndex={tabIndex || 0}
        className={`btn m-1 
        ${className ? className : ''}
        ${variant ? `btn-${variant}` : ''}
        ${loading && loading === true ? 'loading' : ''}
        ${size && size === 'large' ? 'btn-lg' : ''} 
        ${size && size === 'medium' ? 'btn-md' : ''} 
        ${size && size === 'small' ? 'btn-sm' : ''} 
        ${size && size === 'mini' ? 'btn-xs' : ''} 
        ${size && size === 'tiny' ? 'btn-xxs' : ''} 
        ${size && size === 'block' ? 'btn-block' : ''} 
        ${size && size === 'full' ? 'btn-block' : ''} 
        ${size && size === 'wide' ? 'btn-wide' : ''} 
        ${loading && loading === true ? 'loading' : ''}
        ${outline && outline === true ? 'btn-outline' : ''}
        ${disabled ? 'btn-disabled' : ''}
        ${noAnimation ? 'no-animation' : ''}`.trim()}
        ref={ref}
        style={style}
      >
        {children}
      </label>
    )
  }
)

const Content: FC = forwardRef<HTMLDivElement, Ui_DropdownProps>(({ children, className, type, style }, ref) => {
  const classNamesArray = className?.split(' ') || ([] as string[])
  const hasBgClass = classNamesArray.find(t => t.includes('bg-'))

  let defaultClasses = `dropdown-content rounded-box shadow-2xl border border-base-content border-opacity-5`
  const defaultBgClass = ' bg-base-100 '

  if (hasBgClass) defaultClasses += hasBgClass
  if (!hasBgClass) defaultClasses += defaultBgClass

  return (
    <div
      className={`${defaultClasses} ${className ? className : ''} 
      ${type && type === 'card' ? 'card card-compact w-64' : ''} ${type && type === 'full' ? 'w-full' : ''}`}
      ref={ref}
      style={style}
    >
      {children}
    </div>
  )
})

Ui_Dropdown.Label = Label
Ui_Dropdown.Content = Content

export default Ui_Dropdown
