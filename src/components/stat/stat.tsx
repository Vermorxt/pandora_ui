import { FC, forwardRef } from 'react'
import { generateClassNames } from '../_utils/css-class-generator'
import { Ui_StatProps } from './type'
import React from 'react'

const Ui_Stat: any = forwardRef<
  HTMLDivElement,
  Ui_StatProps & {
    Item: FC<Ui_StatProps>
    Title: FC<Ui_StatProps>
    Value: FC<Ui_StatProps>
    Figure: FC<Ui_StatProps>
    Actions: FC<Ui_StatProps>
    Description: FC<Ui_StatProps>
  }
>(
  (
    {
      children,
      className,
      style,
      vertical,
      onLargeHorizontal,
      bgColor,
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
      'bg'
    )

    return (
      <div
        tabIndex={0}
        className={`stats shadow 
          ${className ? className : ''}
          ${vertical ? 'stats-vertical' : ''}
          ${onLargeHorizontal ? 'lg:stats-horizontal' : ''}
          ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
          ${colorClass.classNames ? `${colorClass.classAttributesText}-content ${colorClass.classNames}` : ''} 
      `}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export const Item: any = forwardRef<HTMLDivElement, Ui_StatProps>(
  (
    {
      children,
      className,
      style,
      bgColor,
      textColor,
      center,
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
      'bg'
    )
    return (
      <div
        tabIndex={0}
        className={`stat 
          ${className ? className : ''}
          ${center ? 'place-items-center' : ''}
          ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
          ${textColor ? `text-${textColor}` : ''}
          ${colorClass.classNames ? `${colorClass.classAttributesText}-content ${colorClass.classNames}` : ''} 
      `}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export const Title: any = forwardRef<HTMLDivElement, Ui_StatProps>(
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
      'bg'
    )
    return (
      <div
        className={`
        stat-title 
        ${className ? className : ''}
        ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
        ${textColor ? `text-${textColor}` : ''}
        ${colorClass.classNames ? `${colorClass.classAttributesText}-content ${colorClass.classNames}` : ''} 
    `}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export const Value: any = forwardRef<HTMLDivElement, Ui_StatProps>(
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
      'bg'
    )

    return (
      <div
        className={`
          stat-value
          ${className ? className : ''}
          ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
          ${textColor ? `text-${textColor}` : ''}
          ${colorClass.classNames ? `${colorClass.classAttributesText}-content ${colorClass.classNames}` : ''} 
        `}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export const Description: any = forwardRef<HTMLDivElement, Ui_StatProps>(
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
      'bg'
    )
    return (
      <div
        className={`
          stat-desc
          ${className ? className : ''}
          ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
          ${textColor ? `text-${textColor}` : ''}
          ${colorClass.classNames ? `${colorClass.classAttributesText}-content ${colorClass.classNames}` : ''} 
        `}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export const Figure: any = forwardRef<HTMLDivElement, Ui_StatProps>(
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
      'bg'
    )

    return (
      <div
        className={`
          stat-figure
          ${className ? className : ''}
          ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
          ${textColor ? `text-${textColor}` : ''}
          ${colorClass.classNames ? `${colorClass.classAttributesText}-content ${colorClass.classNames}` : ''} 
      `}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export const Actions: any = forwardRef<HTMLDivElement, Ui_StatProps>(
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
      'bg'
    )
    return (
      <div
        className={`
          stat-actions
          ${className ? className : ''}
          ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
          ${textColor ? `text-${textColor}` : ''}
          ${colorClass.classNames ? `${colorClass.classAttributesText}-content ${colorClass.classNames}` : ''}
        `}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

Ui_Stat.Item = Item
Ui_Stat.Title = Title
Ui_Stat.Value = Value
Ui_Stat.Figure = Figure
Ui_Stat.Description = Description
Ui_Stat.Actions = Actions

export default Ui_Stat
