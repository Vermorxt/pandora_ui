import { forwardRef, MouseEvent } from 'react'
import { DRAWER_ID_SIDEBAR } from '../../_constants/main'
import { generateClassNames, getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_NavLinkProps } from './type'
import React from 'react'
import { useRouter } from 'next/router'
import { Helper } from '@vermorxt/pandora_utils'

const Ui_NavLink: any = forwardRef<HTMLAnchorElement, Ui_NavLinkProps>(
  (
    {
      href,
      children,
      className,
      style,
      skipScrollTop,
      useLocationReplace,
      scrollSmooth,
      variant,
      size,
      hover,
      disabled,
      ...rest
    },
    ref
  ) => {
    const router = useRouter()
    const handleClick = (event: MouseEvent<HTMLElement>) => {
      console.log('NAV LINK click: ', event)

      event.preventDefault()
      event.stopPropagation()

      if (scrollSmooth) {
        const elem = document.getElementById(href.substring(1))

        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }

        return
      }

      if (useLocationReplace) {
        if (typeof window === 'object') {
          window.location.hash = href
        }
      } else {
        console.log('NAV LINK click: ', router)

        void router?.replace(href).then(h => {
          if (!skipScrollTop) Helper.scrollTop()

          const elem = document.getElementById(DRAWER_ID_SIDEBAR) as HTMLInputElement

          if (elem) elem.checked = false
        })
      }
    }

    const isCurrentPath = router?.pathname === href || router?.asPath === href

    return (
      <a
        href={href}
        ref={ref}
        style={style}
        onClick={handleClick}
        className={`
          ${variant ? `text-${variant}` : ''}
          ${disabled && disabled === true ? 'text-disabled' : ''}
          ${size && size === 'large' ? 'text-lg' : ''}
          ${size && size === 'medium' ? 'text-md' : ''} 
          ${size && size === 'small' ? 'text-sm' : ''} 
          ${size && size === 'mini' ? 'text-xs' : ''} 
          ${size && size === 'tiny' ? 'text-xxs' : ''}
          ${hover ? `link-hover` : ''}   
          ${isCurrentPath ? 'active ' : ''} 
          ${className ? className : ''} 
        `}
        {...rest}
      >
        {children}
      </a>
    )
  }
)

export default Ui_NavLink
