import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Avatar from './Avatar'
import { Ui_AvatarProps } from './type'

export default {
  title: 'Avatar',
  component: Ui_Avatar,
  argTypes: {
    borderRadius: {
      options: ['xl', '2xl', '3xl', 'lg', 'full', 'rounded'],
      control: { type: 'radio' },
    },
    size: {
      options: ['large', 'medium', 'small', 'mini', 'tiny'],
      control: { type: 'radio' },
    },
    mask: {
      options: ['squircle', 'hexagon', 'triangle', 'default'],
      control: { type: 'radio' },
    },
    ring: {
      options: [
        true,
        false,
        'primary',
        'secondary',
        'accent',
        'ghost',
        'link',
        'info',
        'success',
        'warning',
        'error',
        'neutral',
      ],
      control: { type: 'select' },
    },
    ringOffset: { control: { type: 'select' }, options: ['0', '1', '2', '4', '8'] },
    ringOffsetBackground: {
      options: ['primary', 'secondary', 'accent', 'ghost', 'link', 'info', 'success', 'warning', 'error', 'neutral'],
      control: { type: 'select' },
    },

    online: { control: 'boolean' },
    offline: { control: 'boolean' },

    src: { control: 'text' },
    usePlaceHolder: { control: 'text' },
  },
} as ComponentMeta<typeof Ui_Avatar>

const Template = ({ ...rest }: Ui_AvatarProps) => {
  return <Ui_Avatar {...rest} />
}

export const Basic = Template.bind({})
