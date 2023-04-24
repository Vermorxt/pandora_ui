import React, { useState, useEffect } from 'react'
import { Story, Meta } from '@storybook/react'
import Countdown from '.'
import { ShowTimeValues, T_Ui_CountdownTemplate, Ui_CountdownProps } from './type'
import dayjs from 'dayjs'
import { T_Ui_Size } from './../../components/_types/sizes/sizes'

// NOTE: use subtract instead add -> https://github.com/storybookjs/storybook/issues/12208
const initialTargetTime = dayjs().subtract(-10, 'seconds').toISOString()

export default {
  title: 'Countdown',
  component: Countdown,
  args: {
    targetTime: new Date(initialTargetTime),
    finishColor: '#FF0000',
    showTimeValues: {
      useValues: ['day', 'hour', 'minute', 'second'],
      displayValues: ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
    },
    size: 'small',
    center: true,
    template: 'compact',
  },
  argTypes: {
    targetTime: {
      control: { type: 'date' },
      matchers: {
        date: /Date$/,
      },
    },
    showTimeValues: {
      controls: {
        type: 'object',
      },
    },
    template: {
      control: { type: 'select', options: ['compact', 'clock', 'inline', 'boxed'] },
    },
    size: {
      control: { type: 'select', options: ['large', 'medium', 'small', 'tiny', 'mini'] },
    },
    finishColor: {
      control: { type: 'color' },
    },
    center: {
      control: { type: 'boolean' },
    },
    allowMultipleTimers: {
      control: { type: 'boolean' },
    },
  },
} as Meta

const Template = ({ ...rest }: Ui_CountdownProps) => {
  const { targetTime } = rest

  const [time, setTime] = useState<string | null>(targetTime as string)

  useEffect(() => {
    if (typeof targetTime === 'number') {
      const d = null
      setTime(null)
      setTime(dayjs(targetTime).toDate() as unknown as string)
    }
  }, [targetTime])

  return <Countdown targetTime={dayjs(targetTime).toDate() as unknown as string} {...rest} ref={null} />
}

export const Basic = Template.bind({})
