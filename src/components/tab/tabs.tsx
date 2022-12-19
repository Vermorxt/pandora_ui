import { FC, forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_TabProps } from './type'
import React from 'react'

const Ui_Tabs: any = forwardRef<HTMLDivElement, Ui_TabProps & { Tab: FC<Ui_TabProps> }>(
  ({ children, className, id, boxed, style, size, ...rest }, ref) => {
    return (
      <div
        className={`
          tabs
          ${className ? className : ''}
          ${boxed && boxed === true ? 'tabs-boxed' : ''} 
        `}
        id={id}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export const Tab: any = forwardRef<HTMLAnchorElement, Ui_TabProps>(
  ({ children, className, style, active, bordered, lifted, boxed, size, ...rest }, ref) => {
    return (
      <a
        className={`tab 
        ${className ? className : ''} 
        ${active ? 'tab-active' : ''} 
        ${bordered ? 'tab-bordered' : ''} 
        ${lifted ? 'tab-lifted' : ''} 
        ${size && size === 'large' ? 'tab-lg' : ''} 
        ${size && size === 'medium' ? 'tab-md' : ''} 
        ${size && size === 'small' ? 'tab-sm' : ''} 
        ${size && size === 'mini' ? 'tab-xs' : ''} 
        ${size && size === 'tiny' ? 'tab-xxs' : ''}
      `}
        style={style}
        ref={ref}
      >
        {children}
      </a>
    )
  }
)

Ui_Tabs.Tab = Tab

export default Ui_Tabs
