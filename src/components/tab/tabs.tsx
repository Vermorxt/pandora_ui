import { FC, forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_TabProps } from './type'
import React from 'react'

const Ui_Tabs: any = forwardRef<HTMLDivElement, Ui_TabProps & { Tab: FC<Ui_TabProps> }>(
  ({ children, className, id, boxed, style, ...rest }, ref) => {
    return (
      <div
        className={`
          tabs
          ${className ? className : ''}
          ${boxed ? 'tabs-boxed' : ''} 
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
  ({ children, className, style, active, bordered, lifted, large, medium, small, tiny, mini, boxed, ...rest }, ref) => {
    return (
      <a
        className={`tab 
        ${className ? className : ''} 
        ${active ? 'tab-active' : ''} 
        ${bordered ? 'tab-bordered' : ''} 
        ${lifted ? 'tab-lifted' : ''} 
        ${large ? 'tab-lg' : ''}
        ${medium ? 'tab-md' : ''}
        ${small ? 'tab-sm' : ''}
        ${tiny ? 'tab-xs' : ''}
        ${mini ? 'tab-xxs' : ''}
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
