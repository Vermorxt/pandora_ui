import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Carousel from './Carousel'
import { Ui_CarouselProps } from './type'
import Ui_Button from './../button'

const carouselItems = [
  'https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2',
  'https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB',
  'https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6',
  'https://api.lorem.space/image/car?w=800&h=200&hash=225E6693',
]

export default {
  title: 'Carousel',
  component: Ui_Carousel,
  argTypes: {
    position: {
      options: ['start', 'center', 'end'],
      control: { type: 'radio' },
    },
    width: {
      options: ['full', 'half'],
      control: { type: 'radio' },
    },
    height: {
      control: { type: 'text' },
    },
    vertical: {
      control: { type: 'boolean' },
    },
    rounded: {
      control: { type: 'boolean' },
    },
    relative: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Ui_Carousel>

const Template = ({ ...rest }: Ui_CarouselProps) => {
  return (
    <>
      <Ui_Carousel id={'carousel_8'} {...rest}>
        {carouselItems.map((item, index) => (
          <Ui_Carousel.Item key={index} {...rest} id={`carousel_8_${index}`}>
            <img src={item} alt="Burger" className="w-full" />
          </Ui_Carousel.Item>
        ))}
      </Ui_Carousel>
      <Ui_Carousel.Navbar {...rest}>
        {carouselItems.map((item, index) => (
          <Ui_Button
            key={index}
            size="tiny"
            onClick={() =>
              document?.getElementById(`carousel_8_${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
            }
          >
            {index}
          </Ui_Button>
        ))}
      </Ui_Carousel.Navbar>
    </>
  )
}

export const Basic = Template.bind({})
