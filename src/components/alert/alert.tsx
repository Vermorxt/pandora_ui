import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/solid'
import React, { FC } from 'react'
import { forwardRef } from 'react'
import { DEFAULT_ICON_SIZE } from '../../_constants/main'
import Ui_Button from '../button'
import { Ui_AlertProps } from './type'

const DefaultAlertIcon: FC<any> = () => (
  <InformationCircleIcon style={{ width: DEFAULT_ICON_SIZE }} className="used-alert-icon" />
)

const Ui_Alert: FC<any & Ui_AlertProps> = forwardRef<HTMLDivElement, Ui_AlertProps>(
  ({ children, className, style, noIcon, ...rest }: Ui_AlertProps, ref?) => {
    const {
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
      onAcceptButtonText,
      onDenyButtonText,
      onAccept,
      onDeny,
    } = rest

    const showIcon = !info && !warning && !success && !error && !noIcon

    return (
      <div
        className={`
      alert shadow-lg
        ${primary ? 'alert-primary' : ''}
        ${secondary ? 'alert-secondary' : ''}
        ${accent ? 'alert-accent' : ''}
        ${ghost ? 'alert-ghost' : ''}
        ${link ? 'alert-link' : ''}
        ${neutral ? 'alert-neutral' : ''}
        ${warning ? 'alert-warning' : ''}
        ${info ? 'alert-info' : ''}
        ${success ? 'alert-success' : ''}
        ${error ? 'alert-error' : ''}
      ${className || ''}
      `}
        ref={ref}
        style={style}
      >
        <div>
          {showIcon && DefaultAlertIcon(null)}
          {info && <InformationCircleIcon style={{ width: DEFAULT_ICON_SIZE }} />}
          {success && <CheckCircleIcon style={{ width: DEFAULT_ICON_SIZE }} />}
          {warning && <ExclamationCircleIcon style={{ width: DEFAULT_ICON_SIZE }} />}
          {error && <XCircleIcon style={{ width: DEFAULT_ICON_SIZE }} />}
          {children}
        </div>
        <div className="flex-none">
          {onDeny && (
            <Ui_Button small ghost onClick={onDeny}>
              {onDenyButtonText || 'Deny'}
            </Ui_Button>
          )}
          {onAccept && (
            <Ui_Button small primary onClick={onAccept}>
              {onAcceptButtonText || 'Accept'}
            </Ui_Button>
          )}
        </div>
      </div>
    )
  }
)

export default Ui_Alert
