import React, { FC, forwardRef } from 'react'
import { Ui_ArtboardProps } from './type'

const Ui_Artboard = forwardRef<HTMLDivElement, Ui_ArtboardProps>(
  (
    {
      onClick,
      className,
      name,
      children,
      style,
      horizontal,
      demo,
      phone1,
      phone2,
      phone3,
      phone4,
      phone5,
      phone6,
      ...rest
    }: Ui_ArtboardProps,
    ref
  ) => {
    const usedPhone = {
      phone: 'phone-1',
      size: '320×568',
      sizeHorizontal: '568x320',
    }

    if (phone1) {
      usedPhone.phone = 'phone-1'
      usedPhone.size = '320×568'
      usedPhone.sizeHorizontal = '568x320'
    }

    if (phone2) {
      usedPhone.phone = 'phone-2'
      usedPhone.size = '375×667'
      usedPhone.sizeHorizontal = '667x375'
    }

    if (phone3) {
      usedPhone.phone = 'phone-3'
      usedPhone.size = '414×736'
      usedPhone.sizeHorizontal = '736x414'
    }

    if (phone4) {
      usedPhone.phone = 'phone-4'
      usedPhone.size = '375×812'
      usedPhone.sizeHorizontal = '812x375'
    }

    if (phone5) {
      usedPhone.phone = 'phone-5'
      usedPhone.size = '414×896'
      usedPhone.sizeHorizontal = '896x414'
    }

    if (phone6) {
      usedPhone.phone = 'phone-6'
      usedPhone.size = '320×1024'
      usedPhone.sizeHorizontal = '1024x320'
    }

    return (
      <div
        className={`
      artboard${' '} 
      ${usedPhone?.phone} 
      ${horizontal ? 'artboard-horizontal' : ''} 
      ${(className as string) || ''} 
      ${demo ? 'artboard-demo' : ''} 
      `}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default Ui_Artboard
