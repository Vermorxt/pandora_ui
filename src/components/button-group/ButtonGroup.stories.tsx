import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_ButtonGroup from './ButtonGroup'
import { Ui_ButtonGroupProps } from './type'

export default {
  title: 'ButtonGroup',
  component: Ui_ButtonGroup,
  argTypes: {},
} as ComponentMeta<typeof Ui_ButtonGroup>

const Template = ({ ...rest }: Ui_ButtonGroupProps) => {
  return (
    <Ui_ButtonGroup {...rest} ref={null}>
      <span>ButtonGroup component.</span>
    </Ui_ButtonGroup>
  )
}

export const Basic = Template.bind({})
