import React from 'react';
import { ComponentMeta } from '@storybook/react'
import Ui_Drawer from './Drawer';
import {Ui_DrawerProps} from './type';


export default {
  title: 'Drawer',
  component: Ui_Drawer,
  argTypes: {
  },
} as ComponentMeta<typeof Ui_Drawer>

const Template = ({ ...rest }: Ui_DrawerProps) => {
  return (
    <Ui_Drawer {...rest} ref={null}>
      <span>Drawer component.</span>
    </Ui_Drawer>
  )
}

export const Basic = Template.bind({})


