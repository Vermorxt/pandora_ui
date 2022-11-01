import React from 'react';
import { ComponentMeta } from '@storybook/react'
import Ui_Checkbox from './Checkbox';
import {Ui_CheckboxProps} from './type';


export default {
  title: 'Checkbox',
  component: Ui_Checkbox,
  argTypes: {
  },
} as ComponentMeta<typeof Ui_Checkbox>

const Template = ({ ...rest }: Ui_CheckboxProps) => {
  return (
    <Ui_Checkbox {...rest} ref={null}>
      <span>Checkbox component.</span>
    </Ui_Checkbox>
  )
}

export const Basic = Template.bind({})


