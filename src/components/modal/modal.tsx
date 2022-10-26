import { forwardRef, ReactPortal, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Ui_Button from '../button'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_ModalProps } from './type'
import React from 'react'
import { GLOBAL_WRAPPER_ID } from '../../_constants/main'

const Ui_Modal: any = forwardRef<HTMLDivElement, Ui_ModalProps>(
  ({ onClick, children, className, id, buttonText, closeClickOutside, message, ...rest }, ref) => {
    const convertAttributeToClassName_modal = [
      ['large', 'medium', 'small', 'tiny', 'mini', 'full'], // NOTE: attributes to convert
      ['5/6', '4/6', '3/6', '2/6', '1/6', 'full'], // NOTE: attributes translated based on attributes above
    ]

    const [portalContainer, setPortalContainer] = useState<Element>()
    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_modal,
      withoutPrefix: [],
      addPrefix: 'w',
      defaultValue: 'w-2/6',
    })

    useEffect(() => {
      if (!portalContainer) {
        setPortalContainer(document.getElementById(GLOBAL_WRAPPER_ID) as Element)
      }
    }, [])

    const ModalBodyElem = () => (
      <>
        <input type="checkbox" id={id} className="modal-toggle" />
        <div className={`modal`} ref={ref}>
          <div
            className={`modal-box relative modal-box max-w-none ${`${classAttributes} ${(className as string) || ''}`}`}
          >
            <label onClick={onClick} htmlFor={id} className="btn btn-sm btn-circle absolute right-2 top-2">
              ✕
            </label>
            {message || children}
          </div>
        </div>
      </>
    )

    const ModalBodyElemCloseClickOutSide = () => (
      <>
        <input type="checkbox" id={id} className="modal-toggle" />

        <label htmlFor={id} className={`cursor-pointer modal`}>
          <label
            className={`modal-box relative max-w-none ${`${classAttributes} ${(className as string) || ''}`}`}
            htmlFor=""
          >
            {message || children}
          </label>
        </label>
      </>
    )

    if (!portalContainer)
      return (
        <Ui_Button className="gap-2" loading>
          Loading ...
        </Ui_Button>
      )

    return (
      <>
        <label htmlFor={id} className={`btn modal-button`} onClick={onClick}>
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
