import React from 'react';
import { ComponentMeta } from '@storybook/react'
import Ui_Collapse from './Collapse';
import {Ui_CollapseProps} from './type';


export default {
  title: 'Collapse',
  component: Ui_Collapse,
  argTypes: {
  },
} as ComponentMeta<typeof Ui_Collapse>

const Template = ({ ...rest }: Ui_CollapseProps) => {
  return (
    <Ui_Collapse {...rest} ref={null}>
      <span>Collapse component.</span>
    </Ui_Collapse>
  )
}

export const Basic = Template.bind({})


