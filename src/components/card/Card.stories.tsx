import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Ui_CardProps } from './type'
import Ui_Card from './Card'
import Ui_Badge from './../../components/badge'

export default {
  title: 'Card',
  component: Ui_Card,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error'],
    },
    bgBase: {
      control: { type: 'text', values: ['100', '200', '300'] },
    },
    actionPlacement: {
      control: { type: 'text', values: ['start', 'center', 'between'] },
    },
    cardSide: {
      control: { type: 'boolean', values: [true, 'large'] },
    },
    glass: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'text' },
    },
    imageAsBackground: {
      control: { type: 'boolean' },
    },
    compact: {
      control: { type: 'boolean' },
    },
    itemsCenter: {
      control: { type: 'boolean' },
    },
    textCenter: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<any>

const Template = ({ ...rest }: Ui_CardProps) => {
  return (
    <Ui_Card {...rest} ref={null}>
      <figure className="display: contents">
        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
      </figure>
      <Ui_Card.Body {...rest} ref={null}>
        <Ui_Card.Title>
          Shoes!{' '}
          <Ui_Badge variant="secondary" outline>
            NEW
          </Ui_Badge>
        </Ui_Card.Title>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <Ui_Card.Actions {...rest} ref={null}>
          <Ui_Badge outline>Fashion</Ui_Badge>
          <Ui_Badge outline>Products</Ui_Badge>
        </Ui_Card.Actions>
      </Ui_Card.Body>
    </Ui_Card>
  )
}

export const Basic = Template.bind({})
