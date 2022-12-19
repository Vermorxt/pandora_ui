import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Tooltip from './Tooltip'
import { Ui_TooltipProps } from './type'

export default {
  title: 'Tooltip',
  component: Ui_Tooltip,
  argTypes: {
    content: {
      control: { type: 'text' },
      defaultValue: 'Tooltip content',
    },
    position: {
      control: { type: 'radio' },
      options: ['top', 'left', 'bottom', 'right'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error'],
    },
    size: {
      options: ['large', 'medium', 'small', 'mini'],
      control: { type: 'radio' },
    },
    open: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Ui_Tooltip>

const Template = ({ ...rest }: Ui_TooltipProps) => {
  return (
    <div className="p-32">
      <Ui_Tooltip {...rest}>Tooltip</Ui_Tooltip>
    </div>
  )
}

export const Basic = Template.bind({})
