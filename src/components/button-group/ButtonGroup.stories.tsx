import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_ButtonGroup from './ButtonGroup'
import { Ui_ButtonGroupProps } from './type'
import Ui_Button from './../button/Button'

export default {
  title: 'ButtonGroup',
  component: Ui_ButtonGroup,
  argTypes: {},
} as ComponentMeta<typeof Ui_ButtonGroup>

const Template = ({ ...rest }: Ui_ButtonGroupProps) => {
  return (
    <Ui_ButtonGroup {...rest} ref={null}>
      <Ui_Button active>1</Ui_Button>
      <Ui_Button>2</Ui_Button>
      <Ui_Button>3</Ui_Button>
    </Ui_ButtonGroup>
  )
}

export const Basic = Template.bind({})
