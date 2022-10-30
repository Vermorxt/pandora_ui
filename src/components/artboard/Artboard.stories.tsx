import { ComponentMeta } from '@storybook/react'
import React from 'react'
import Ui_Artboard from './Artboard'

import { Ui_ArtboardProps } from './type'

export default {
  title: 'Artboard',
  component: Ui_Artboard,
  argTypes: {
    phone1: { control: 'boolean' },
    phone2: { control: 'boolean' },
    phone3: { control: 'boolean' },
    phone4: { control: 'boolean' },
    phone5: { control: 'boolean' },
    phone6: { control: 'boolean' },
    horizontal: { control: 'boolean' },
    demo: { control: 'boolean', defaultValue: true },
  },
} as ComponentMeta<typeof Ui_Artboard>

const Template = ({ ...rest }: Ui_ArtboardProps) => {
  return (
    <Ui_Artboard {...rest} ref={null}>
      <span>Artboard component.</span>
    </Ui_Artboard>
  )
}

export const Basic = Template.bind({})
