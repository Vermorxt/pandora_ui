import { Dispatch, forwardRef, RefObject, SetStateAction, useEffect, useRef, useState } from 'react'
import { OnFinishCallback, ShowTimeValues, Ui_CountdownProps } from './type'
import React from 'react'

const FINISH_COLOR = '#50C878'

interface RefElements {
  refDay: RefObject<HTMLSpanElement>
  refHour: RefObject<HTMLSpanElement>
  refMinute: RefObject<HTMLSpanElement>
  refSecond: RefObject<HTMLSpanElement>
}
interface SetValues {
  setDayValue: (val: number) => void
  setHourValue: (val: number) => void
  setMinuteValue: (val: number) => void
  setSecondValue: (val: number) => void
  setIsFinished: Dispatch<SetStateAction<boolean>>
  onFinishCallback: OnFinishCallback | undefined
}

export const getTimeRemaining = (endTime: string) => {
  const total = Date.parse(endTime?.toString()) - Date.parse(new Date() as unknown as string)

  const seconds = Math.floor((total / 1000) % 60)
  const minutes = Math.floor((total / 1000 / 60) % 60)
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const days = Math.floor(total / (1000 * 60 * 60 * 24))

  if (total <= 0) {
    return {
      total,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  }
}

export const setCountDownValue = (val: number, refElem: RefObject<HTMLSpanElement>) => {
  const countDownValue = val === -1 ? 59 : val

  refElem?.current?.style.setProperty('--value', `${countDownValue}`)

  setTimeout(() => {
    setCountDownValue(countDownValue - 1, refElem)
  }, 1000)
}

export const getRef = (val: string, { refDay, refHour, refMinute, refSecond }: RefElements) => {
  if (val === 'day') return refDay
  if (val === 'hour') return refHour
  if (val === 'minute') return refMinute
  if (val === 'second') return refSecond
}

export const handleTime = (
  targetTime: string,
  showTimeValues: ShowTimeValues,
  { setDayValue, setHourValue, setMinuteValue, setSecondValue, setIsFinished, onFinishCallback }: SetValues
) => {
  setTimeout(() => {
    const timeRemaining = getTimeRemaining(targetTime as string)

    if (timeRemaining) {
      if (showTimeValues?.useValues?.includes('day')) setDayValue(timeRemaining.days)
      if (showTimeValues?.useValues?.includes('hour')) setHourValue(timeRemaining.hours)
      if (showTimeValues?.useValues?.includes('minute')) setMinuteValue(timeRemaining.minutes)
      if (showTimeValues?.useValues?.includes('second')) setSecondValue(timeRemaining.seconds)
    }

    if (timeRemaining?.total > 0) {
      handleTime(targetTime, showTimeValues, {
        setDayValue,
        setHourValue,
        setMinuteValue,
        setSecondValue,
        setIsFinished,
        onFinishCallback,
      })
    } else {
      setIsFinished(true)

      if (onFinishCallback) onFinishCallback(true)
    }
  }, 1000)
}

const Ui_Countdown = forwardRef<HTMLDivElement, Ui_CountdownProps>(
  ({ children, className, style, ...rest }: Ui_CountdownProps, ref) => {
    const {
      value,
      showTimeValues,
      targetTime,
      large,
      medium,
      small,
      tiny,
      mini,
      template,
      center,
      finishColor,
      onFinishCallback,
    } = rest

    const [isFinished, setIsFinished] = useState(false)

    const refElem = useRef<HTMLSpanElement>(null) || ref

    const refDay = useRef<HTMLSpanElement>(null)
    const refHour = useRef<HTMLSpanElement>(null)
    const refMinute = useRef<HTMLSpanElement>(null)
    const refSecond = useRef<HTMLSpanElement>(null)

    const setDayValue = (val: number) => refDay?.current?.style.setProperty('--value', `${val}`)
    const setHourValue = (val: number) => refHour?.current?.style.setProperty('--value', `${val}`)
    const setMinuteValue = (val: number) => refMinute?.current?.style.setProperty('--value', `${val}`)
    const setSecondValue = (val: number) => refSecond?.current?.style.setProperty('--value', `${val}`)

    useEffect(() => {
      if (value) {
        refElem?.current?.style.setProperty('--value', `${value}`)

        setCountDownValue(value - 1, refElem)
      }
    }, [value])

    useEffect(() => {
      if (showTimeValues && showTimeValues?.useValues?.length > 0) {
        handleTime(targetTime as string, showTimeValues, {
          setDayValue,
          setHourValue,
          setMinuteValue,
          setSecondValue,
          setIsFinished,
          onFinishCallback,
        })
      }
    }, [])

    if (value?.toString()) {
      return (
        <span
          className={`countdown 
      ${className ? className : ''}
      ${large ? 'text-6xl' : ''}
      ${medium ? 'text-4xl' : ''}
      ${small ? 'text-2xl' : ''}
      ${tiny ? 'text-xs' : ''}
      ${mini ? 'text-xxs' : ''}
      `}
        >
          <span ref={ref}></span>
        </span>
      )
    }
    if (showTimeValues?.useValues?.length) {
      let gap = 'gap-5'
      if (medium) gap = 'gap-4'
      if (small) gap = 'gap-3'
      if (tiny) gap = 'gap-2'

      let paddingSeparator = 'pl-1'

      let textSize = 'text-6xl'
      if (medium) textSize = 'text-4xl'
      if (small) textSize = 'text-2xl'
      if (tiny) textSize = 'text-xs'
      if (mini) textSize = 'text-xxs'

      let wrapperClasses = `flex ${gap}`
      let childClasses = `font-mono`
      let separatorClasses = `text-xs`

      if (template) {
        if (template === 'compact') wrapperClasses = `grid grid-flow-col gap-5 text-center auto-cols-max`
        if (template === 'compact') childClasses = `flex flex-col items-center font-mono`
        if (template === 'compact') separatorClasses = `text-xs`
      }
      if (template) {
        if (template === 'inline') wrapperClasses = `flex`
        if (template === 'inline') childClasses = `font-mono`
        if (template === 'inline') separatorClasses = `${textSize}`
        if (template === 'inline') paddingSeparator = `pl-0`
      }
      if (template) {
        if (template === 'clock') wrapperClasses = `grid grid-flow-col gap-5 text-center auto-cols-max`
        if (template === 'clock') childClasses = `flex flex-col items-center font-mono`
        if (template === 'clock') separatorClasses = `text-xs`
      }
      if (template) {
        if (template === 'boxed') wrapperClasses = `grid grid-flow-col gap-5 text-center auto-cols-max`
        if (template === 'boxed') {
          childClasses = `flex flex-col p-2 bg-neutral rounded-box text-neutral-content items-center`
        }
        if (template === 'boxed') separatorClasses = `text-xs`
        if (template === 'boxed') paddingSeparator = `pl-0`
      }

      const cssStyles = style || {}

      if (center) {
        cssStyles.justifyContent = 'center'
      }

      return (
        <div className={wrapperClasses} style={cssStyles}>
          {showTimeValues?.useValues?.map((val, index) => {
            const displayValue = showTimeValues?.displayValues?.[index]
            const usedRef = getRef(val, { refDay, refHour, refMinute, refSecond })

            return (
              <div key={index} className={childClasses}>
                <span
                  className={`countdown font-mono
                ${className ? className : ''}
                ${textSize ? textSize : ''}
              `}
                >
                  <span ref={usedRef} style={{ color: `${isFinished ? finishColor || FINISH_COLOR : ''}` }}></span>
                </span>
                <span className={`${separatorClasses} ${paddingSeparator}`}>{displayValue}</span>
              </div>
            )
          })}
        </div>
      )
    }

    return (
      <span
        style={style}
        ref={ref}
        className={`countdown 
      ${className ? className : ''}
      `}
      >
        <span>--</span>
      </span>
    )
  }
)

export default Ui_Countdown
