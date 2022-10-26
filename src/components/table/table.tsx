import { FC, forwardRef } from 'react'
import { generateClassNames } from '../_utils/css-class-generator'
import { Ui_TableProps } from './type'
import React from 'react'

const Ui_Table: any = forwardRef<
  HTMLTableElement,
  Ui_TableProps & {
    Body: FC<Ui_TableProps>
    Footer: FC<Ui_TableProps>
    Head: FC<Ui_TableProps>
    Row: FC<Ui_TableProps>
    Th: FC<Ui_TableProps>
    Td: FC<Ui_TableProps>
  }
>(
  (
    {
      children,
      className,
      style,
      bgColor,
      compact,
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
      ...rest
    },
    ref
  ) => {
    return (
      <table
        tabIndex={0}
        className={`table w-full 
        ${className ? className : ''}
        ${compact ? 'table-compact table-auto ' : ''}
        ${bgColor === 'primary' ? `bg-primary text-primary-content` : ''}
        ${bgColor === 'secondary' ? `bg-secondary text-secondary-content` : ''}
        ${primary ? `bg-primary text-primary-content` : ''}
        ${secondary ? `bg-secondary text-secondary-content` : ''}
        ${success ? `bg-success text-success-content` : ''}
        ${error ? `bg-error text-error-content` : ''}
        ${warning ? `bg-warning text-warning-content` : ''}
        ${info ? `bg-info text-info-content` : ''}
        ${accent ? `bg-accent text-accent-content` : ''}
        ${ghost ? `bg-ghost text-ghost-content` : ''}
        ${link ? `bg-link text-link-content` : ''}
        ${neutral ? `bg-neutral text-neutral-content` : ''}
      `}
        style={style}
        ref={ref}
      >
        {children}
      </table>
    )
  }
)

const TableHead: any = forwardRef<HTMLTableSectionElement, Ui_TableProps>(
  (
    {
      children,
      className,
      style,
      bgColor,
      textColor,
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
      ...rest
    },
    ref
  ) => {
    return (
      <thead
        tabIndex={0}
        className={`table-head 
          ${className ? className : ''}
          ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
          ${textColor ? `text-${textColor}` : ''}
          ${bgColor === 'primary' ? `bg-primary text-primary-content` : ''}
          ${bgColor === 'secondary' ? `bg-secondary text-secondary-content` : ''}
          ${primary ? `bg-primary text-primary-content` : ''}
          ${secondary ? `bg-secondary text-secondary-content` : ''}
          ${success ? `bg-success text-success-content` : ''}
          ${error ? `bg-error text-error-content` : ''}
          ${warning ? `bg-warning text-warning-content` : ''}
          ${info ? `bg-info text-info-content` : ''}
          ${accent ? `bg-accent text-accent-content` : ''}
          ${ghost ? `bg-ghost text-ghost-content` : ''}
          ${link ? `bg-link text-link-content` : ''}
          ${neutral ? `bg-neutral text-neutral-content` : ''}
        `}
        style={style}
        ref={ref}
      >
        {children}
      </thead>
    )
  }
)

const TableRow: any = forwardRef<HTMLTableRowElement, Ui_TableProps>(
  (
    {
      children,
      className,
      style,
      bgColor,
      textColor,
      active,
      hover,
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
      ...rest
    },
    ref
  ) => {
    return (
      <tr
        className={`
          table-tr
            ${className ? className : ''}
            ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
            ${textColor ? `text-${textColor}` : ''}
            ${active ? `active` : ''}
            ${hover ? `hover` : ''} 
            ${primary ? `bg-primary text-primary-content` : ''}
            ${secondary ? `bg-secondary text-secondary-content` : ''}
            ${success ? `bg-success text-success-content` : ''}
            ${error ? `bg-error text-error-content` : ''}
            ${warning ? `bg-warning text-warning-content` : ''}
            ${info ? `bg-info text-info-content` : ''}
            ${accent ? `bg-accent text-accent-content` : ''}
            ${ghost ? `bg-ghost text-ghost-content` : ''}
            ${link ? `bg-link text-link-content` : ''}
            ${neutral ? `bg-neutral text-neutral-content` : ''}
          `}
        style={style}
        ref={ref}
      >
        {children}
      </tr>
    )
  }
)

const Td: any = forwardRef<HTMLTableCellElement, Ui_TableProps>(
  (
    {
      children,
      className,
      style,
      bgColor,
      textColor,
      active,
      hover,
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
      ...rest
    },
    ref
  ) => {
    const { colSpan } = rest

    return (
      <td
        className={`
          table-td
          ${className ? className : ''}
          ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
          ${textColor ? `text-${textColor}` : ''}
          ${primary ? `bg-primary text-primary-content` : ''}
          ${secondary ? `bg-secondary text-secondary-content` : ''}
          ${success ? `bg-success text-success-content` : ''}
          ${error ? `bg-error text-error-content` : ''}
          ${warning ? `bg-warning text-warning-content` : ''}
          ${info ? `bg-info text-info-content` : ''}
          ${accent ? `bg-accent text-accent-content` : ''}
          ${ghost ? `bg-ghost text-ghost-content` : ''}
          ${link ? `bg-link text-link-content` : ''}
          ${neutral ? `bg-neutral text-neutral-content` : ''}
        `}
        style={style}
        ref={ref}
        colSpan={colSpan}
      >
        {children}
      </td>
    )
  }
)

const Th: any = forwardRef<HTMLTableCellElement, Ui_TableProps>(
  (
    {
      children,
      className,
      style,
      bgColor,
      textColor,
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
      ...rest
    },
    ref
  ) => {
    const { stickyHeader } = rest

    return (
      <th
        className={`
          table-th
          ${className ? className : ''}
          ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
          ${textColor ? `text-${textColor}` : ''}  
          ${stickyHeader ? `sticky top-0` : ''}
          ${primary ? `bg-primary text-primary-content` : ''}
          ${secondary ? `bg-secondary text-secondary-content` : ''}
          ${success ? `bg-success text-success-content` : ''}
          ${error ? `bg-error text-error-content` : ''}
          ${warning ? `bg-warning text-warning-content` : ''}
          ${info ? `bg-info text-info-content` : ''}
          ${accent ? `bg-accent text-accent-content` : ''}
          ${ghost ? `bg-ghost text-ghost-content` : ''}
          ${link ? `bg-link text-link-content` : ''}
          ${neutral ? `bg-neutral text-neutral-content` : ''} 
        `}
        style={style}
        ref={ref}
      >
        {children}
      </th>
    )
  }
)

const TableBody: any = forwardRef<HTMLTableSectionElement, Ui_TableProps>(
  (
    {
      children,
      className,
      style,
      bgColor,
      textColor,
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
      ...rest
    },
    ref
  ) => {
    return (
      <tbody
        className={`
          table-body
          ${className ? className : ''}
          ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
          ${textColor ? `text-${textColor}` : ''}
          ${primary ? `bg-primary text-primary-content` : ''}
          ${secondary ? `bg-secondary text-secondary-content` : ''}
          ${success ? `bg-success text-success-content` : ''}
          ${error ? `bg-error text-error-content` : ''}
          ${warning ? `bg-warning text-warning-content` : ''}
          ${info ? `bg-info text-info-content` : ''}
          ${accent ? `bg-accent text-accent-content` : ''}
          ${ghost ? `bg-ghost text-ghost-content` : ''}
          ${link ? `bg-link text-link-content` : ''}
          ${neutral ? `bg-neutral text-neutral-content` : ''}
        `}
        style={style}
        ref={ref}
      >
        {children}
      </tbody>
    )
  }
)

const TableFooter: any = forwardRef<HTMLTableSectionElement, Ui_TableProps>(
  (
    {
      children,
      className,
      style,
      bgColor,
      textColor,
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
      ...rest
    },
    ref
  ) => {
    return (
      <tfoot
        className={`
          table-footer
          ${className ? className : ''}
          ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
          ${textColor ? `text-${textColor}` : ''}
          ${primary ? `bg-primary text-primary-content` : ''}
          ${secondary ? `bg-secondary text-secondary-content` : ''}
          ${success ? `bg-success text-success-content` : ''}
          ${error ? `bg-error text-error-content` : ''}
          ${warning ? `bg-warning text-warning-content` : ''}
          ${info ? `bg-info text-info-content` : ''}
          ${accent ? `bg-accent text-accent-content` : ''}
          ${ghost ? `bg-ghost text-ghost-content` : ''}
          ${link ? `bg-link text-link-content` : ''}
          ${neutral ? `bg-neutral text-neutral-content` : ''}
        `}
        style={style}
        ref={ref}
      >
        {children}
      </tfoot>
    )
  }
)

Ui_Table.Head = TableHead
Ui_Table.Row = TableRow
Ui_Table.Th = Th
Ui_Table.Td = Td
Ui_Table.Footer = TableFooter
Ui_Table.Body = TableBody

export default Ui_Table
