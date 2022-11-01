import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Avatar from './Avatar'
import { Ui_AvatarProps } from './type'

export default {
  title: 'Avatar',
  component: Ui_Avatar,
  argTypes: {
    roundedXl: { control: 'radio' },
    rounded2xl: { control: 'radio' },
    rounded3xl: { control: 'radio' },
    roundedLg: { control: 'radio' },
    roundedFull: { control: 'radio' },

    ring: { control: 'boolean' },
    ringPrimary: { control: 'boolean' },
    ringSecondary: { control: 'boolean' },
    ringOffsetBackground: { control: 'text' },
    ringOffset: { control: { type: 'select' }, options: ['0', '1', '2', '4', '8'] },

    squircle: { control: 'boolean' },
    hexagon: { control: 'boolean' },
    triangle: { control: 'boolean' },

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
