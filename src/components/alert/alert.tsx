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
    const { variant, onAcceptButtonText, onDenyButtonText, onAccept, onDeny } = rest

    const showIcon = ['info', 'warning', 'success', 'error'].includes(variant || '') === false && !noIcon

    return (
      <div
        className={`
      alert shadow-lg
      ${variant ? `alert-${variant}` : ''}
      ${className || ''}
      `}
        ref={ref}
        style={style}
      >
        <div>
          {showIcon && DefaultAlertIcon(null)}
          {variant && variant === 'info' && <InformationCircleIcon style={{ width: DEFAULT_ICON_SIZE }} />}
          {variant && variant === 'success' && <CheckCircleIcon style={{ width: DEFAULT_ICON_SIZE }} />}
          {variant && variant === 'warning' && <ExclamationCircleIcon style={{ width: DEFAULT_ICON_SIZE }} />}
          {variant && variant === 'error' && <XCircleIcon style={{ width: DEFAULT_ICON_SIZE }} />}
          {children}
        </div>

        {(onDeny || onAccept) && (
          <div className="flex-none">
            {onDeny && (
              <Ui_Button size="small" variant="ghost" onClick={onDeny}>
                {onDenyButtonText || 'Deny'}
              </Ui_Button>
            )}
            {onAccept && (
              <Ui_Button size="small" variant="primary" onClick={onAccept}>
                {onAcceptButtonText || 'Accept'}
              </Ui_Button>
            )}
          </div>
        )}
      </div>
    )
  }
)

export default Ui_Alert
