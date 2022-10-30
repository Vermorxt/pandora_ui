import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Avatar from './Avatar'
import { Ui_AvatarProps } from './type'

export default {
  title: 'Avatar',
  component: Ui_Avatar,
  argTypes: {
    roundedXl: { control: 'boolean' },
    rounded2xl: { control: 'boolean' },
    rounded3xl: { control: 'boolean' },
    roundedLg: { control: 'boolean' },
    roundedFull: { control: 'boolean' },

    ring: { control: 'boolean' },
    ringPrimary: { control: 'boolean' },
    ringSecondary: { control: 'boolean' },
    ringOffset: { control: 'boolean' },
    ringOffsetBackground: { control: 'text' },

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
  return (
    <Ui_Avatar {...rest}>
      <span>Avatar component.</span>
    </Ui_Avatar>
  )
}

export const Basic = Template.bind({})
