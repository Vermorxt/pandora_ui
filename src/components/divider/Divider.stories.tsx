import React from 'react';
import { ComponentMeta } from '@storybook/react'
import Ui_Divider from './Divider';
import {Ui_DividerProps} from './type';


export default {
  title: 'Divider',
  component: Ui_Divider,
  argTypes: {
  },
} as ComponentMeta<typeof Ui_Divider>

const Template = ({ ...rest }: Ui_DividerProps) => {
  return (
    <Ui_Divider {...rest} ref={null}>
      <span>Divider component.</span>
    </Ui_Divider>
  )
}

export const Basic = Template.bind({})


