import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Ui_AvatarProps } from './type'
import Ui_Avatar from './avatar'
import React from 'react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'

const defaultProps: Ui_AvatarProps = {}

describe('@cms/core/Ui_Avatar.Group', () => {
  checkAccessibility([
    <Ui_Avatar.Group {...defaultProps} ref={null}>
      Test group
    </Ui_Avatar.Group>,
  ])
  itSupportsSystemProps({
    component: Ui_Avatar.Group,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_Avatar.Group {...defaultProps} ref={null} />)

  it('renders AVATAR_GROUP default class', () => {
    const { container: available } = render(<Ui_Avatar.Group {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.avatar-group`)).toHaveLength(1)
  })
})
