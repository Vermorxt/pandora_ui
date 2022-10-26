import '@testing-library/jest-dom'
import { render, renderHook, screen } from '@testing-library/react'
import dayjs from 'dayjs'
import { RefObject } from 'react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { itHasCssClass } from '../../_tests-utils/it-has-color-css-class'
import { ShowTimeValues, Ui_CountdownProps } from './type'
import { getTimeRemaining, setCountDownValue } from './countdown'
import Ui_Countdown from './countdown'
import React from 'react'

const defaultProps: Ui_CountdownProps = {}

const showTimeValues = {
  useValues: ['day', 'hour', 'minute', 'second'],
  displayValues: ['days', 'hours', 'minutes', 'seconds'],
} as ShowTimeValues

describe('@cms/core/Ui_Countdown', () => {
  checkAccessibility([<Ui_Countdown {...defaultProps} ref={null} />])
  checkAccessibility([<Ui_Countdown showTimeValues={showTimeValues as any} ref={null} />])
  itSupportsSystemProps({
    component: Ui_Countdown,
    props: defaultProps,
    refType: HTMLSpanElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_Countdown {...defaultProps} ref={null} />)

  it('should match snapshot', () => {
    const { container } = render(<Ui_Countdown {...defaultProps} ref={null} />)
    expect(container).toMatchSnapshot()
  })

  it('renders COUNTDOWN default class', () => {
    const { container: available } = render(<Ui_Countdown {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.countdown`)).toHaveLength(1)
  })

  it('renders SIZE classes', async () => {
    const { container: available } = render(
      <Ui_Countdown {...defaultProps} showTimeValues={showTimeValues as any} ref={null} />
    )

    await itHasCssClass(<Ui_Countdown large value={5} />, `.text-6xl`)
    await itHasCssClass(<Ui_Countdown medium value={5} />, `.text-4xl`)
    await itHasCssClass(<Ui_Countdown small value={5} />, `.text-2xl`)
    await itHasCssClass(<Ui_Countdown tiny value={5} />, `.text-xs`)
    await itHasCssClass(<Ui_Countdown mini value={5} />, `.text-xxs`)
  })

  it('renders COUNTDOWN display values', async () => {
    const { container } = render(
      <Ui_Countdown {...defaultProps} showTimeValues={showTimeValues as any} template="compact" ref={null} />
    )

    const days = await screen.getAllByText('days')
    const hours = await screen.getAllByText('hours')
    const minutes = await screen.getAllByText('minutes')
    const seconds = await screen.getAllByText('seconds')

    if (days) {
      expect(days[0]).toBeDefined()
    } else {
      throw new Error('days element not found')
    }

    if (hours) {
      expect(hours[0]).toBeDefined()
    } else {
      throw new Error('hours element not found')
    }

    if (minutes) {
      expect(minutes[0]).toBeDefined()
    } else {
      throw new Error('minutes element not found')
    }

    if (seconds) {
      expect(seconds[0]).toBeDefined()
    } else {
      throw new Error('seconds element not found')
    }
  })
  it('should calculate time values form future', () => {
    const addDays = 15
    const addHours = 2
    const addMinutes = 4
    const addSeconds = 6

    const endTime = dayjs()
      .add(addDays, 'days')
      .add(addHours, 'hours')
      .add(addMinutes, 'minutes')
      .add(addSeconds, 'seconds')
      .toISOString()

    const result = getTimeRemaining(endTime)

    const { total, days, hours, minutes, seconds } = result

    expect(total).toBeGreaterThan(1200000000)
    expect(days).toBe(addDays)
    expect(hours).toBe(addHours + 1)
    expect(minutes).toBe(addMinutes)
    expect(seconds).toBe(addSeconds)
  })

  it('should display finish time if past', () => {
    const addDays = -1
    const addHours = 0
    const addMinutes = 0
    const addSeconds = 0

    const endTime = dayjs()
      .add(addDays, 'days')
      .add(addHours, 'hours')
      .add(addMinutes, 'minutes')
      .add(addSeconds, 'seconds')
      .toISOString()

    const result = getTimeRemaining(endTime)

    const { total, days, hours, minutes, seconds } = result

    expect(total).toBeLessThan(0)
    expect(days).toBe(0)
    expect(hours).toBe(addHours)
    expect(minutes).toBe(addMinutes)
    expect(seconds).toBe(addSeconds)
  })

  it('should set a countdown value and inject ref style property', () => {
    const value = 10
    const expectedResult = '--value10'
    let result: string

    const refElem = {
      current: {
        style: {
          setProperty: jest.fn((prefix, val) => {
            result = `${prefix}${val}`

            expect(result).toBe(expectedResult)
          }),
        },
      },
    } as unknown as RefObject<HTMLSpanElement>

    renderHook(() => setCountDownValue(value, refElem))
  })

  it('should set countdown value to 59 if prop === -1', () => {
    const value = -1
    const expectedResult = '--value59'
    let result: string

    const refElem = {
      current: {
        style: {
          setProperty: jest.fn((prefix, val) => {
            result = `${prefix}${val}`

            expect(result).toBe(expectedResult)
          }),
        },
      },
    } as unknown as RefObject<HTMLSpanElement>

    renderHook(() => setCountDownValue(value, refElem))
  })

  it('should call setCountdown after 1 second if executed', async () => {
    jest.useFakeTimers()
    jest.setTimeout(1000)

    const value = 30
    const expected1 = '--value30'
    const expected2 = '--value29'
    const expected3 = '--value28'
    let result = ''
    const callback = jest.fn()

    const refElem = {
      current: {
        style: {
          setProperty: jest.fn((prefix, val) => {
            result = `${prefix}${val}`

            setTimeout(() => {
              callback(renderHook(() => setCountDownValue(value, refElem)))
            }, 1000)
          }),
        },
      },
    } as unknown as RefObject<HTMLSpanElement>

    expect(callback).not.toBeCalled()

    renderHook(() => setCountDownValue(value, refElem))
    expect(result).toBe(expected1)

    jest.advanceTimersByTime(1000)
    expect(callback).toHaveBeenCalledTimes(1)
    if (result) expect(result).toBe(expected2)

    jest.advanceTimersByTime(1000)
    expect(callback).toHaveBeenCalledTimes(3)
    if (result) expect(result).toBe(expected3)
  })

  it('should set time values', async () => {
    jest.useFakeTimers()
    jest.setTimeout(1000)

    let secondsValue = 5

    const onFinishCallback = jest.fn(finished => {
      expect(onFinishCallback).toBeCalled()
      expect(finished).toBeTruthy()
    })

    const setIsFinished = jest.fn(finished => {
      expect(setIsFinished).toBeCalled()
      expect(finished).toBeTruthy()
    })

    const setDayValue = jest.fn(value => {
      expect(setDayValue).toBeCalled()
      expect(value).toBe(0)
    })

    const setHourValue = jest.fn(value => {
      expect(value).toBe(0)
    })

    const setMinuteValue = jest.fn(value => {
      expect(value).toBe(0)
    })

    const setSecondValue = jest.fn(value => {
      secondsValue -= 1
      if (secondsValue < 0) secondsValue = 0
      expect(value).toBe(secondsValue)
    })

    const targetTime = dayjs()
      .add(0, 'days')
      .add(0, 'hours')
      .add(0, 'minutes')
      .add(secondsValue, 'seconds')
      .toISOString()

    const handleTimeFunction = () => {
      jest.advanceTimersByTime(1000)

      const timeRemaining = getTimeRemaining(targetTime as string)

      if (timeRemaining) {
        if (showTimeValues?.useValues?.includes('day')) setDayValue(timeRemaining.days)
        if (showTimeValues?.useValues?.includes('hour')) setHourValue(timeRemaining.hours)
        if (showTimeValues?.useValues?.includes('minute')) setMinuteValue(timeRemaining.minutes)
        if (showTimeValues?.useValues?.includes('second')) setSecondValue(timeRemaining.seconds)
      }

      if (timeRemaining?.total > 0) {
        handleTimeFunction()
      } else {
        setIsFinished(true)

        if (onFinishCallback) onFinishCallback(true)
      }
    }

    handleTimeFunction()
  })
})
