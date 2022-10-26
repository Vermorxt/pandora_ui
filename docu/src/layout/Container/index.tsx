import React, { FC } from 'react'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import scss from './global-container.module.scss'

export const Container: FC<any> = ({ children }) => (
  <div className={`main-container ${scss.container} bg-base-100`}>{children}</div>
)
