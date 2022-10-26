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
    style,
    loading,
    wide,
    block,
    full,
    square,
    large,
    medium,
    small,
    tiny,
    circle,
    disabled,
    noAnimation,
    allowFullScreen,
    info,
    warning,
    success,
    error,
    primary,
    secondary,
    accent,
    ghost,
    link,
    neutral,
    outline,
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
      <div ref={ref} style={style} className={defaultClassNames}>
        {children}
      </div>
    )
  }

  if (label && !content) {
    return (
      <div className={defaultClassNames}>
        <Ui_Dropdown.Label tabIndex={tabIndex || 0} className="btn m-1">
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
          className={`btn m-1 
          btn${' '}
        ${primary ? 'btn-primary' : ''}
        ${secondary ? 'btn-secondary' : ''}
        ${warning ? 'btn-warning' : ''}
        ${info ? 'btn-info' : ''}
        ${success ? 'btn-success' : ''}
        ${error ? 'btn-error' : ''}
        ${accent ? 'btn-accent' : ''}
        ${ghost ? 'btn-ghost' : ''}
        ${link ? 'btn-link' : ''}
        ${neutral ? 'btn-neutral' : ''}
        ${outline ? 'btn-outline' : ''}
        ${loading ? 'loading' : ''}
        ${wide ? 'btn-wide' : ''}
        ${square ? 'btn-square' : ''}
        ${circle ? 'btn-circle' : ''}
        ${disabled ? 'btn-disabled' : ''}
        ${medium ? 'btn-md' : ''}
        ${small ? 'btn-sm' : ''}
        ${tiny ? 'btn-xs' : ''}
        ${large ? 'btn-lg' : ''}
        ${noAnimation ? 'no-animation' : ''}
        ${block || full ? 'btn-block' : ''}`.trim()}
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

const Label: FC = forwardRef<HTMLLabelElement, Ui_DropdownProps>(({ children, className, tabIndex }, ref) => {
  return (
    <label tabIndex={tabIndex || 0} className={`${className ? className : ''}`} ref={ref}>
      {children}
    </label>
  )
})

const Content: FC = forwardRef<HTMLDivElement, Ui_DropdownProps>(({ children, className }, ref) => {
  const classNamesArray = className?.split(' ') || ([] as string[])
  const hasBgClass = classNamesArray.find(t => t.includes('bg-'))

  let defaultClasses = `dropdown-content rounded-box shadow-2xl border border-base-content border-opacity-5`
  const defaultBgClass = ' bg-base-100 '

  if (hasBgClass) defaultClasses += hasBgClass
  if (!hasBgClass) defaultClasses += defaultBgClass

  return (
    <div className={`${defaultClasses} ${className ? className : ''}`} ref={ref}>
      {children}
    </div>
  )
})

Ui_Dropdown.Label = Label
Ui_Dropdown.Content = Content

export default Ui_Dropdown
