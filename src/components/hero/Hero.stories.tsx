import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Hero from './Hero'
import { Ui_HeroProps } from './type'

export default {
  title: 'Hero',
  component: Ui_Hero,
  argTypes: {
    rounded: {
      control: { type: 'boolean' },
    },
    center: {
      control: { type: 'boolean' },
    },
    itemsCenter: {
      control: { type: 'boolean' },
    },
    textCenter: {
      control: { type: 'boolean' },
    },
    minHeightScreen: {
      control: { type: 'boolean' },
    },
    flexCol: {
      control: { type: 'boolean' },
    },
    flexColReverse: {
      control: { type: 'boolean' },
    },
    shadow: {
      control: { type: 'radio' },
      options: ['sm', 'lg', 'xl', '2xl', 'md', 'none', true],
    },
    bgColor: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error'],
    },
  },
} as ComponentMeta<typeof Ui_Hero>

const Template = ({ ...rest }: Ui_HeroProps) => {
  return (
    <Ui_Hero
      {...rest}
      // style={{ backgroundImage: 'url(https://api.lorem.space/image/fashion?w=1000&h=800)' }}
    >
      <Ui_Hero.Overlay className="bg-opacity-60" />
      <Ui_Hero.Content {...rest}>
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </Ui_Hero.Content>
    </Ui_Hero>
  )
}

export const Basic = Template.bind({})
