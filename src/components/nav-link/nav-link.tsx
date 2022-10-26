import { forwardRef, MouseEvent } from 'react'
import { DRAWER_ID_SIDEBAR } from '../../_constants/main'
import { generateClassNames, getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_NavLinkProps } from './type'
import React from 'react'
import Ui_Functions from '../../_utils'
import { useRouter } from 'next/router'

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
          if (!skipScrollTop) Ui_Functions.Helper.scrollTop()

          const elem = document.getElementById(DRAWER_ID_SIDEBAR) as HTMLInputElement

          if (elem) elem.checked = false
        })
      }
    }

    const isCurrentPath = router?.pathname === href || router?.asPath === href

    const withoutPrefix = [] as string[]
    const convertAttributeToClassName = [
      ['large', 'medium', 'small', 'tiny', 'mini'], // NOTE: attributes to convert
      ['lg', 'md', 'sm', 'xs', 'xxs'], // NOTE: attributes translated based on attributes above
    ]

    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName,
      withoutPrefix: withoutPrefix,
      addPrefix: 'text',
    })

    const colorClass = generateClassNames(
      {
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
      },
      'text'
    )

    return (
      <a
        href={href}
        ref={ref}
        style={style}
        onClick={handleClick}
        className={`
          ${classAttributes} 
          ${colorClass.classAttributesText} 
          ${isCurrentPath ? 'active' : ''} 
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
