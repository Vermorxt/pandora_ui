import { forwardRef, ReactPortal, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Ui_Button from '../button'
import { Ui_ModalProps } from './type'
import React from 'react'
import { GLOBAL_WRAPPER_ID } from '../../_constants/main'

const Ui_Modal: any = forwardRef<HTMLDivElement, Ui_ModalProps>(
  (
    {
      onClick,
      children,
      className,
      style,
      id,
      isOpen,
      forceClose,
      buttonText,
      closeClickOutside,
      message,
      size,
      labelStyle,
      labelClassName,
      ...rest
    },
    ref
  ) => {
    const [portalContainer, setPortalContainer] = useState<Element>()
    const [open, setOpen] = useState<boolean>(isOpen ? isOpen : false)

    useEffect(() => {
      if (!portalContainer) {
        setPortalContainer(document.getElementById(GLOBAL_WRAPPER_ID) as Element)
      }
    }, [])

    useEffect(() => {
      setOpen(isOpen ? isOpen : false)
    }, [isOpen])

    useEffect(() => {
      if (forceClose) setOpen(false)
    }, [forceClose])

    const ModalBodyElem = () => (
      <>
        <input type="checkbox" id={id} checked={open} className="modal-toggle" onChange={event => setOpen(!open)} />
        <div className={`modal`} ref={ref} style={style}>
          <div
            className={`modal-box relative modal-box max-w-none overflow-hidden        
            ${size && size === 'large' ? 'w-5/6' : ''} 
            ${size && size === 'medium' ? 'w-4/6' : ''} 
            ${size && size === 'small' ? 'w-3/6' : ''} 
            ${size && size === 'mini' ? 'w-2/6' : ''} 
            ${size && size === 'tiny' ? 'w-1/6' : ''}  
            ${size && size === 'full' ? 'w-full' : ''}  
            ${(className as string) || ''}`}
          >
            <label onClick={onClick} htmlFor={id} className={`btn btn-sm btn-circle absolute right-2 top-2 `}>
              ✕
            </label>
            {message || children}
          </div>
        </div>
      </>
    )

    const ModalBodyElemCloseClickOutSide = () => (
      <>
        <input
          type="checkbox"
          id={id}
          className="modal-toggle"
          onChange={event => console.log('change input modal outside: ', event)}
        />

        <label htmlFor={id} className={`cursor-pointer modal`}>
          <label
            className={`modal-box relative max-w-none 
            ${size && size === 'large' ? 'w-5/6' : ''} 
            ${size && size === 'medium' ? 'w-4/6' : ''} 
            ${size && size === 'small' ? 'w-3/6' : ''} 
            ${size && size === 'mini' ? 'w-2/6' : ''} 
            ${size && size === 'tiny' ? 'w-1/6' : ''}  
            ${size && size === 'full' ? 'w-full' : ''}   
            ${(className as string) || ''}`}
            htmlFor={id}
            style={style}
          >
            {message || children}
          </label>
        </label>
      </>
    )

    if (!portalContainer)
      return (
        <Ui_Button className={`gap-2 ${(labelClassName as string) || ''}`} loading style={labelStyle}>
          Loading ...
        </Ui_Button>
      )

    return (
      <>
        <label
          htmlFor={id}
          className={`btn modal-button
          ${(labelClassName as string) || ''}`}
          style={labelStyle}
          onClick={onClick}
        >
          {buttonText || 'open modal'}
        </label>

        {/* // NOTE: pass modal body to document wrapper to prevent overlays */}
        {closeClickOutside &&
          (ReactDOM.createPortal(<ModalBodyElemCloseClickOutSide />, portalContainer) as ReactPortal)}
        {!closeClickOutside && (ReactDOM.createPortal(<ModalBodyElem />, portalContainer) as ReactPortal)}
      </>
    )
  }
)

export default Ui_Modal
