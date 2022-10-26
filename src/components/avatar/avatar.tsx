/* eslint-disable @next/next/no-img-element */
import React, { FC, forwardRef } from 'react'
import Ui_Functions from '../../_utils'
import { DEFAULT_AVATAR } from '../../_constants/main'
import { getUsedAttributes } from '../_utils/css-class-generator'
import { Ui_AvatarProps } from './type'

const Ui_Avatar: any = forwardRef<HTMLDivElement, Ui_AvatarProps & { Group: FC }>(
  ({ className, src, style, usePlaceHolder, ...rest }, ref) => {
    const { roundedXl, rounded2xl, rounded3xl, roundedLg, roundedFull } = rest
    const { online, offline } = rest
    const { large, medium, small, mini, tiny } = rest
    const { squircle, hexagon, triangle } = rest
    const { ring, ringPrimary, ringSecondary, ringOffset, ringOffsetBackground } = rest

    // NOTE: radius styles
    const usedRadius = getUsedAttributes(rest, { roundedXl, rounded2xl, rounded3xl, roundedLg, roundedFull })
    const radiusStyle = usedRadius.map(s => Ui_Functions.Helper.splitCamelCaseMinus(s)).toString()

    // NOTE: ring styles
    const usedRing = getUsedAttributes(rest, { ringPrimary, ringSecondary })
    const ringStyle = usedRing.map(s => Ui_Functions.Helper.splitCamelCaseMinus(s)).toString()

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
        ${large ? 'w-32' : ''} 
        ${medium ? 'w-20' : ''} 
        ${small ? 'w-16' : ''} 
        ${mini ? 'w-12' : ''} 
        ${tiny ? 'w-8' : ''}
        ${!large && !medium && !small && !mini && !tiny ? 'w-24' : ''}
        ${radiusStyle || 'rounded'}  
        ${
          ring
            ? 'ring ' +
              `${ringStyle} ${
                ringOffsetStyle ? `${ringOffsetStyle} ring-offset-${ringOffsetBackground || 'base-100'}` : ''
              }`
            : ''
        }  
        ${squircle ? 'mask ' + 'mask-squircle' : ''}
        ${hexagon ? 'mask ' + 'mask-hexagon' : ''}
        ${triangle ? 'mask ' + 'mask-triangle' : ''}
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
