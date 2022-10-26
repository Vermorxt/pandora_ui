import { FC, forwardRef } from 'react'
import { Ui_CollapseProps } from './type'
import React from 'react'

const Ui_Collapse: any = forwardRef<
  HTMLDivElement,
  Ui_CollapseProps & {
    Title: FC<Ui_CollapseProps>
    Content: FC<Ui_CollapseProps>
  }
>(
  (
    { children, className, style, focus, border, rounded, arrow, plus, open, defaultOpen, close, group, ...rest },
    ref
  ) => {
    return (
      <div
        tabIndex={0}
        className={`collapse 
      ${className ? className : ''}
      ${border ? 'border border-base-300 bg-base-100' : ''}
      ${rounded ? 'rounded-box' : ''}
      ${arrow ? 'collapse-arrow' : ''}
      ${plus ? 'collapse-plus' : ''}
      ${open ? 'collapse-open' : ''}
      ${close ? 'collapse-close' : ''}
      ${group ? 'group' : ''}
      `}
        style={style}
        ref={ref}
      >
        {!focus && <input type="checkbox" className="peer" defaultChecked={defaultOpen} style={{ minHeight: 0 }} />}

        {children}
      </div>
    )
  }
)

const Title: FC = forwardRef<HTMLDivElement, Ui_CollapseProps>(
  ({ children, className, style, bgColor, bgColorOpened, ...rest }, ref) => {
    return (
      <div
        className={`
      collapse-title 
    ${className ? className : ''}
    ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
    ${
      bgColorOpened
        ? `group-focus:bg-${bgColorOpened} group-focus:text-${bgColorOpened}-content peer-checked:bg-${bgColorOpened} peer-checked:text-${bgColorOpened}-content`
        : ''
    }
    `}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

const Content: FC = forwardRef<HTMLDivElement, Ui_CollapseProps>(
  ({ children, className, style, bgColor, bgColorOpened, ...rest }, ref) => {
    return (
      <div
        className={`
    collapse-content
    ${className ? className : ''}
    ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
    ${
      bgColorOpened
        ? `group-focus:bg-${bgColorOpened} group-focus:text-${bgColorOpened}-content peer-checked:bg-${bgColorOpened} peer-checked:text-${bgColorOpened}-content`
        : ''
    }    
    `}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

Ui_Collapse.Title = Title
Ui_Collapse.Content = Content

export default Ui_Collapse
