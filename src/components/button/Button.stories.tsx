import React from 'react';
import { ComponentMeta } from '@storybook/react'
import Ui_Button from './Button';
import {Ui_ButtonProps} from './type';


export default {
  title: 'Button',
  component: Ui_Button,
  argTypes: {
  },
} as ComponentMeta<typeof Ui_Button>

const Template = ({ ...rest }: Ui_ButtonProps) => {
  return (
    <Ui_Button {...rest} ref={null}>
      <span>Button component.</span>
    </Ui_Button>
  )
}

export const Basic = Template.bind({})


