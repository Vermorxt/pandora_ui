import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Rating from './Rating'
import Ui_Button from '../button'
import { Ui_RatingProps } from './type'

export default {
  title: 'Rating',
  component: Ui_Rating,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error'],
    },
    shape: {
      options: ['star', 'star-2', 'heart'],
      control: { type: 'radio' },
    },
    halfSymbol: {
      control: { type: 'boolean' },
    },
    defaultCheckedValue: {
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof Ui_Rating>

const Template = ({ ...rest }: Ui_RatingProps) => {
  return <Ui_Rating name="rating" {...rest} ref={null} />
}

export const Basic = Template.bind({})
