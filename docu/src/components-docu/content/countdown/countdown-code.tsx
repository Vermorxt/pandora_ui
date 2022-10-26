import { Ui_Countdown } from '@vermorxt/pandora_ui'
import dayjs from 'dayjs'

export const countdownCodeExamples = [
  {
    id: 'countdown_1',
    title: 'Countdown simple',
    preview: <Ui_Countdown value={5} />,
    codeExample: `
<Ui_Countdown value={5} />`,
  },
  {
    id: 'countdown_2',
    title: 'Countdown simple sizes',
    preview: (
      <>
        <Ui_Countdown large value={5} />
        <Ui_Countdown medium value={5} />
        <Ui_Countdown small value={5} />
        <Ui_Countdown tiny value={5} />
      </>
    ),
    codeExample: `
<Ui_Countdown large value={5} />
<Ui_Countdown medium value={5} />
<Ui_Countdown small value={5} />
<Ui_Countdown tiny value={5} />`,
  },
  {
    id: 'countdown_3',
    title: 'Countdown clock sizes',
    preview: (
      <>
        <div className="whitespace-nowrap min-w-full mx-auto grid">
          <Ui_Countdown
            center
            large
            targetTime={dayjs().add(15, 'days').toISOString()}
            showTimeValues={{
              useValues: ['day', 'hour', 'minute', 'second'],
              displayValues: ['days', 'hours', 'minutes', 'seconds'],
            }}
          />
        </div>
        <div className="whitespace-nowrap min-w-full mx-auto grid">
          <Ui_Countdown
            center
            medium
            targetTime={dayjs().add(15, 'days').toISOString()}
            showTimeValues={{
              useValues: ['day', 'hour', 'minute', 'second'],
              displayValues: ['days', 'hours', 'minutes', 'seconds'],
            }}
          />
        </div>
        <div className="whitespace-nowrap min-w-full mx-auto grid">
          <Ui_Countdown
            center
            small
            targetTime={dayjs().add(15, 'days').toISOString()}
            showTimeValues={{
              useValues: ['day', 'hour', 'minute', 'second'],
              displayValues: ['days', 'hours', 'minutes', 'seconds'],
            }}
          />
        </div>
        <div className="whitespace-nowrap min-w-full mx-auto grid">
          <Ui_Countdown
            center
            tiny
            targetTime={dayjs().add(15, 'days').toISOString()}
            showTimeValues={{
              useValues: ['day', 'hour', 'minute', 'second'],
              displayValues: ['days', 'hours', 'minutes', 'seconds'],
            }}
          />
        </div>
      </>
    ),
    codeExample: `
<Ui_Countdown
  large
  targetTime={dayjs().add(15, 'days').toISOString()}
  showTimeValues={{
    useValues: ['day', 'hour', 'minute', 'second'],
    displayValues: ['days', 'hours', 'minutes', 'seconds'],
  }}
/>    
<Ui_Countdown
  medium
  targetTime={dayjs().add(15, 'days').toISOString()}
  showTimeValues={{
    useValues: ['day', 'hour', 'minute', 'second'],
    displayValues: ['days', 'hours', 'minutes', 'seconds'],
  }}
/>
<Ui_Countdown
  small
  targetTime={dayjs().add(15, 'days').toISOString()}
  showTimeValues={{
    useValues: ['day', 'hour', 'minute', 'second'],
    displayValues: ['days', 'hours', 'minutes', 'seconds'],
  }}
/>
  <Ui_Countdown
  tiny
  targetTime={dayjs().add(15, 'days').toISOString()}
  showTimeValues={{
    useValues: ['day', 'hour', 'minute', 'second'],
    displayValues: ['days', 'hours', 'minutes', 'seconds'],
  }}
/>
`,
  },
  {
    id: 'countdown_4',
    title: 'Countdown template: inline',
    preview: (
      <>
        <div className="whitespace-nowrap min-w-full mx-auto grid">
          <Ui_Countdown
            center
            large
            targetTime={dayjs().add(15, 'days').toISOString()}
            showTimeValues={{
              useValues: ['hour', 'minute', 'second'],
              displayValues: [':', ':', ''],
            }}
            template="inline"
          />
        </div>{' '}
        <div className="whitespace-nowrap min-w-full mx-auto grid">
          <Ui_Countdown
            center
            medium
            targetTime={dayjs().add(15, 'days').toISOString()}
            showTimeValues={{
              useValues: ['hour', 'minute', 'second'],
              displayValues: [':', ':', ''],
            }}
            template="inline"
          />
        </div>
        <div className="whitespace-nowrap min-w-full mx-auto grid">
          <Ui_Countdown
            center
            small
            targetTime={dayjs().add(15, 'days').toISOString()}
            showTimeValues={{
              useValues: ['hour', 'minute', 'second'],
              displayValues: [':', ':', ''],
            }}
            template="inline"
          />
        </div>
        <div className="whitespace-nowrap min-w-full mx-auto grid">
          <Ui_Countdown
            center
            tiny
            targetTime={dayjs().add(15, 'days').toISOString()}
            showTimeValues={{
              useValues: ['hour', 'minute', 'second'],
              displayValues: [':', ':', ''],
            }}
            template="inline"
          />
        </div>
      </>
    ),
    codeExample: `
  <Ui_Countdown
  large
  targetTime={dayjs().add(15, 'days').toISOString()}
  showTimeValues={{
    useValues: ['hour', 'minute', 'second'],
    displayValues: [':', ':', ''],
  }}
  template="inline"
/>
<Ui_Countdown
  medium
  targetTime={dayjs().add(15, 'days').toISOString()}
  showTimeValues={{
    useValues: ['hour', 'minute', 'second'],
    displayValues: [':', ':', ''],
  }}
  template="inline"
/>
<Ui_Countdown
  small
  targetTime={dayjs().add(15, 'days').toISOString()}
  showTimeValues={{
    useValues: ['hour', 'minute', 'second'],
    displayValues: [':', ':', ''],
  }}
  template="inline"
/>
  <Ui_Countdown
  tiny
  targetTime={dayjs().add(15, 'days').toISOString()}
  showTimeValues={{
    useValues: ['hour', 'minute', 'second'],
    displayValues: [':', ':', ''],
  }}
  template="inline"
/>
`,
  },
  {
    id: 'countdown_5',
    title: 'Countdown template: compact',
    preview: (
      <>
        <div className="whitespace-nowrap min-w-full mx-auto grid">
          <Ui_Countdown
            center
            large
            targetTime={dayjs().add(15, 'days').toISOString()}
            showTimeValues={{
              useValues: ['day', 'hour', 'minute', 'second'],
              displayValues: ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
            }}
            template="compact"
          />
        </div>{' '}
        <div className="whitespace-nowrap min-w-full mx-auto grid">
          <Ui_Countdown
            center
            medium
            targetTime={dayjs().add(15, 'days').toISOString()}
            showTimeValues={{
              useValues: ['day', 'hour', 'minute', 'second'],
              displayValues: ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
            }}
            template="compact"
          />
        </div>
        <div className="whitespace-nowrap min-w-full mx-auto grid">
          <Ui_Countdown
            center
            small
            targetTime={dayjs().add(15, 'days').toISOString()}
            showTimeValues={{
              useValues: ['day', 'hour', 'minute', 'second'],
              displayValues: ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
            }}
            template="compact"
          />
        </div>
        <div className="whitespace-nowrap min-w-full mx-auto grid">
          <Ui_Countdown
            center
            tiny
            targetTime={dayjs().add(15, 'days').toISOString()}
            showTimeValues={{
              useValues: ['day', 'hour', 'minute', 'second'],
              displayValues: ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
            }}
            template="compact"
          />
        </div>
      </>
    ),
    codeExample: `
<Ui_Countdown
  large
  targetTime={dayjs().add(15, 'days').toISOString()}
  showTimeValues={{
    useValues: ['day', 'hour', 'minute', 'second'],
    displayValues: ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
  }}
  template="compact"
/>       
  <Ui_Countdown
  medium
  targetTime={dayjs().add(15, 'days').toISOString()}
  showTimeValues={{
    useValues: ['day', 'hour', 'minute', 'second'],
    displayValues: ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
  }}
  template="compact"
/>  
<Ui_Countdown
  small
  targetTime={dayjs().add(15, 'days').toISOString()}
  showTimeValues={{
    useValues: ['day', 'hour', 'minute', 'second'],
    displayValues: ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
  }}
  template="compact"
/>      
<Ui_Countdown
  tiny
  targetTime={dayjs().add(15, 'days').toISOString()}
  showTimeValues={{
    useValues: ['day', 'hour', 'minute', 'second'],
    displayValues: ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
  }}
  template="compact"
/>
`,
  },
  {
    id: 'countdown_6',
    title: 'Countdown template: boxed',
    preview: (
      <>
        <div className="whitespace-nowrap min-w-full mx-auto grid">
          <Ui_Countdown
            center
            large
            targetTime={dayjs().add(15, 'days').toISOString()}
            showTimeValues={{
              useValues: ['day', 'hour', 'minute', 'second'],
              displayValues: ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
            }}
            template="boxed"
          />
        </div>
        <div className="whitespace-nowrap min-w-full mx-auto grid">
          <Ui_Countdown
            center
            medium
            targetTime={dayjs().add(15, 'days').toISOString()}
            showTimeValues={{
              useValues: ['day', 'hour', 'minute', 'second'],
              displayValues: ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
            }}
            template="boxed"
          />
        </div>
        <div className="whitespace-nowrap min-w-full mx-auto grid">
          <Ui_Countdown
            center
            small
            targetTime={dayjs().add(15, 'days').toISOString()}
            showTimeValues={{
              useValues: ['day', 'hour', 'minute', 'second'],
              displayValues: ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
            }}
            template="boxed"
          />
        </div>
        <div className="whitespace-nowrap min-w-full mx-auto grid">
          <Ui_Countdown
            center
            tiny
            targetTime={dayjs().add(15, 'days').toISOString()}
            showTimeValues={{
              useValues: ['day', 'hour', 'minute', 'second'],
              displayValues: ['D', 'H', 'M', 'S'],
            }}
            template="boxed"
          />
        </div>
      </>
    ),
    codeExample: `
<Ui_Countdown
  large
  targetTime={dayjs().add(15, 'days').toISOString()}
  showTimeValues={{
    useValues: ['day', 'hour', 'minute', 'second'],
    displayValues: ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
  }}
  template="boxed"
/>     
<Ui_Countdown
  medium
  targetTime={dayjs().add(15, 'days').toISOString()}
  showTimeValues={{
    useValues: ['day', 'hour', 'minute', 'second'],
    displayValues: ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
  }}
  template="boxed"
/>
<Ui_Countdown
  small
  targetTime={dayjs().add(15, 'days').toISOString()}
  showTimeValues={{
    useValues: ['day', 'hour', 'minute', 'second'],
    displayValues: ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
  }}
  template="boxed"
/>    
<Ui_Countdown
  tiny
  targetTime={dayjs().add(15, 'days').toISOString()}
  showTimeValues={{
    useValues: ['day', 'hour', 'minute', 'second'],
    displayValues: ['D', 'H', 'M', 'S'],
  }}
  template="boxed"
/>
`,
  },
  {
    id: 'countdown_7',
    title: 'Countdown finish callback function',
    preview: (
      <>
        <div className="whitespace-nowrap min-w-full mx-auto grid">
          <Ui_Countdown
            onFinishCallback={e => console.log('finished countdown: ', e)}
            center
            small
            targetTime={dayjs().add(10, 'seconds').toISOString()}
            showTimeValues={{
              useValues: ['hour', 'minute', 'second'],
              displayValues: [':', ':', ''],
            }}
            template="inline"
          />
        </div>
      </>
    ),
    codeExample: `
<Ui_Countdown
  onFinishCallback={e => console.log('finished countdown: ', e)} // NOTE: response -> true
  small
  targetTime={dayjs().add(10, 'seconds').toISOString()}
  showTimeValues={{
    useValues: ['hour', 'minute', 'second'],
    displayValues: [':', ':', ''],
  }}
  template="inline"
/>  `,
  },
  {
    id: 'countdown_8',
    title: 'Countdown - define color on finish',
    preview: (
      <>
        <div className="whitespace-nowrap min-w-full mx-auto grid">
          <Ui_Countdown
            center
            small
            finishColor={'#FF0000'}
            targetTime={dayjs().add(10, 'seconds').toISOString()}
            showTimeValues={{
              useValues: ['day', 'hour', 'minute', 'second'],
              displayValues: ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
            }}
            template="boxed"
          />
        </div>
      </>
    ),
    codeExample: `
<Ui_Countdown
  small
  finishColor={'#FF0000'}
  targetTime={dayjs().add(10, 'seconds').toISOString()}
  showTimeValues={{
    useValues: ['day', 'hour', 'minute', 'second'],
    displayValues: ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
  }}
  template="boxed"
/>`,
  },
]
