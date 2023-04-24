import { FC, forwardRef } from 'react'
import { Ui_BottomNavigationProps } from './type'
import React from 'react'
import { T_Variants } from './../../components/_types/colors/ui_variants'

const Ui_BottomNavigation: FC<any> = forwardRef<HTMLDivElement, Ui_BottomNavigationProps>(
  (
    {
      href,
      children,
      className,
      style,
      variant,
      size,
      navigation,
      activeColor,
      bgColor,
      rounded,
      shadow,
      onClick,
      ...rest
    },
    ref
  ) => {
    let styleSheet = style

    if (rounded && rounded === true) {
      styleSheet = {
        ...styleSheet,
        ...{
          borderRadius: 20,
          overflow: 'hidden',
          maxWidth: '95%',
          margin: '0 auto 10px',
        },
      }
    }

    const generateClasses = (
      active: boolean | undefined,
      variantC: T_Variants | undefined,
      bgC: T_Variants | undefined,
      activeC: T_Variants | undefined
    ) => {
      const hasBgVariant = variantC && variantC !== 'none'
      const hasBgColor = bgC && bgC !== 'none'
      const hasActiveColor = activeC && activeC !== 'none'

      if (active && active === true) {
        if (hasBgColor && hasActiveColor && hasBgVariant) {
          return `text-${activeC}-content bg-${activeC} active `
        }
        if (!hasBgColor && hasActiveColor && hasBgVariant) {
          return `text-${activeC}-content bg-${activeC} active `
        }
        if (hasBgColor && !hasActiveColor && hasBgVariant) {
          return `text-${variantC} bg-${bgC} active `
        }
        if (!hasBgColor && !hasActiveColor && hasBgVariant) {
          return `text-${variantC} active `
        }
        if (!hasBgColor && hasActiveColor && !hasBgVariant) {
          return `text-${activeC} active `
        }
        if (hasBgColor && hasActiveColor && !hasBgVariant) {
          return `text-${activeC}-content bg-${activeC} active `
        }
        if (hasBgColor && !hasActiveColor && !hasBgVariant) {
          return `text-${bgC}-content bg-${bgC}  active `
        }
      } else {
        if (hasBgColor && hasBgVariant) {
          return `text-${bgC}-content bg-${bgC} `
        }
        if (!hasBgColor && hasBgVariant) {
          return `text-${variantC}  `
        }
        if (!hasBgColor && !hasBgVariant) {
          return ` `
        }
        if (hasBgColor && !hasBgVariant) {
          return `text-${bgC}-content bg-${bgC} `
        }
      }

      return ``
    }

    return (
      <div
        style={styleSheet}
        ref={ref}
        className={`btm-nav  
          ${className ? className : ''}
          ${shadow ? `shadow-${typeof shadow === 'boolean' ? 'xl' : shadow}` : ''}

        `}
        {...rest}
      >
        {navigation &&
          navigation?.map((navi, index) => (
            <button
              onClick={() => (navi?.onClick ? navi?.onClick(navi) : null)}
              key={index}
              disabled={navi?.disabled}
              className={`
              ${generateClasses(navi?.active, variant, bgColor, activeColor)}
              ${size && size === 'large' ? 'text-lg' : ''}
              ${size && size === 'medium' ? 'text-md' : ''} 
              ${size && size === 'small' ? 'text-sm' : ''} 
              ${size && size === 'mini' ? 'text-xs' : ''} 
              ${size && size === 'tiny' ? 'text-xxs' : ''}
              ${navi?.disabled && navi.disabled === true ? 'disabled' : ''}
          }
            `}
            >
              <span dangerouslySetInnerHTML={{ __html: navi?.icon as unknown as string }}></span>
              {navi?.title}
            </button>
          ))}
        {!navigation && children}
      </div>
    )
  }
)

export default Ui_BottomNavigation
