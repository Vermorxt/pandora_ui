import React from 'react';
import { ComponentMeta } from '@storybook/react'
import Ui_Countdown from './Countdown';
import {Ui_CountdownProps} from './type';


export default {
  title: 'Countdown',
  component: Ui_Countdown,
  argTypes: {
  },
} as ComponentMeta<typeof Ui_Countdown>

const Template = ({ ...rest }: Ui_CountdownProps) => {
  return (
    <Ui_Countdown {...rest} ref={null}>
      <span>Countdown component.</span>
    </Ui_Countdown>
  )
}

export const Basic = Template.bind({})


