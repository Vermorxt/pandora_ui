import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Mask from './Mask'
import { Ui_MaskProps } from './type'
import Ui_Input from '../input'
import { Ui_InputProps } from 'components/input/type'

export default {
  title: 'Mask',
  component: Ui_Mask,
  argTypes: {
    shape: {
      control: { type: 'radio' },
      options: [
        'squircle',
        'hexagon',
        'triangle',
        'triangle2',
        'triangle3',
        'triangle4',
        'heart',
        'hexagon2',
        'decagon',
        'pentagon',
        'diamond',
        'square',
        'circle',
        'parallelogram',
        'parallelogram2',
        'parallelogram3',
        'parallelogram4',
        'star',
        'star2',
      ],
      defaultValue: 'primary',
    },
    src: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Ui_Mask>

const Template = ({ ...rest }: Ui_MaskProps) => {
  return <Ui_Mask {...rest} ref={null} className="w-32" />
}

export const Basic = Template.bind({})
