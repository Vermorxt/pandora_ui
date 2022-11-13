/* eslint-disable @next/next/no-img-element */
import { Helper } from '@vermorxt/pandora_utils'
import React, { FC, forwardRef, ForwardRefExoticComponent } from 'react'
import { DEFAULT_AVATAR } from '../../_constants/main'
import { getUsedAttributes } from '../_utils/css-class-generator'
import { Ui_AvatarProps } from './type'

const Ui_Avatar: any & FC<any> & { Group: any } = forwardRef<HTMLDivElement, Ui_AvatarProps & { Group: FC<any> }>(
  ({ className, src, style, usePlaceHolder, ...rest }, ref) => {
    const { borderRadius, size, mask } = rest
    const { online, offline } = rest
    const { ring, ringOffset, ringOffsetBackground } = rest

    // NOTE: ring styles
    // const usedRing = getUsedAttributes(rest, { ringPrimary, ringSecondary })

    // const ringStyle = usedRing.map(s => Helper.splitCamelCaseMinus(s)).toString()

    const ringOffsetStyle = ringOffset ? `ring-offset-${ringOffset}` : ''

    return (
      <div
        style={style}
        ref={ref}
        className={`
        avatar
        ${usePlaceHolder ? 'placeholder' : ''} 
        ${online ? 'online' : ''} ${offline ? 'offline' : ''}
        ${className ? className : ''} 
        `}
      >
        <div
          className={`
        ${usePlaceHolder ? 'bg-neutral-focus text-neutral-content' : ''} 
        ${size && size === 'large' ? 'w-32' : ''} 
        ${size && size === 'medium' ? 'w-20' : ''} 
        ${size && size === 'small' ? 'w-16' : ''} 
        ${size && size === 'mini' ? 'w-12' : ''} 
        ${size && size === 'tiny' ? 'w-8' : ''} 
        ${!size ? 'w-24' : ''} 
        ${borderRadius ? `rounded-${borderRadius}` : 'rounded'}  
        ${
          ring
            ? `ring ring-${ring} ${
                ringOffset ? `${ringOffsetStyle} ring-offset-${ringOffsetBackground || 'base-100'}` : ''
              }`
            : ''
        }
        ${mask && mask === 'squircle' ? 'mask ' + 'mask-squircle' : ''}
        ${mask && mask === 'hexagon' ? 'mask ' + 'mask-hexagon' : ''}
        ${mask && mask === 'triangle' ? 'mask ' + 'mask-triangle' : ''}
        `}
        >
          {!usePlaceHolder && <img src={src || DEFAULT_AVATAR} alt="" />}
          {usePlaceHolder && <span>{usePlaceHolder}</span>}
        </div>
      </div>
    )
  }
)

export const Group: any = forwardRef<HTMLDivElement, Ui_AvatarProps>(({ children, style, className, ...rest }, ref) => {
  return (
    <div className={`avatar-group -space-x-6 ${className ? className : ''}`} ref={ref} style={style}>
      {children}
    </div>
  )
})

Ui_Avatar.Group = Group

export default Ui_Avatar
