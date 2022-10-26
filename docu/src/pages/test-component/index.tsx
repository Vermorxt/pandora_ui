import dayjs from 'dayjs'
import { useEffect, useRef } from 'react'
import React from 'react'
import {
  Ui_Alert,
  Ui_Badge,
  Ui_Button,
  Ui_Card,
  Ui_Collapse,
  Ui_Countdown,
  Ui_Kbd,
  Ui_Mask,
  Ui_MockupCode,
  Ui_Range,
} from '@vermorxt/pandora_ui'
import { Helper } from '@vermorxt/pandora_utils'

const imgSrc = 'https://api.lorem.space/image/shoes?w=160&h=160'

const TestComponent = () => {
  const classNameOnlyForCodePreviewTopMargin = 'mt-32'
  const classNameOnlyForCodePreviewBottomMargin = 'mb-32'
  const defaultUlMenuClassNames = 'menu menu-compact p-4'

  const textInput = useRef(null)

  const dummyListItems = (
    <ul className={defaultUlMenuClassNames}>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 2</a>
      </li>
    </ul>
  )

  useEffect(() => {
    ;(async () => {
      await Helper.delay(2000)

      console.log('waited ...')
    })()
  }, [])

  return (
    <>
      <div className="form-control w-full max-w-sm m-auto h-5 w-5">
        <Ui_Range primary style={{ margin: '0 auto 20px' }} />
        <Ui_Range secondary style={{ margin: '0 auto 20px' }} />
        <Ui_Range accent style={{ margin: '0 auto 20px' }} />
      </div>
      <>
        <Ui_MockupCode>
          <pre data-prefix="1">
            <code>npm i daisyui</code>
          </pre>
          <pre data-prefix="2">
            <code>installing...</code>
          </pre>
          <pre data-prefix="3" className="bg-warning text-warning-content">
            <code>Error!</code>
          </pre>
        </Ui_MockupCode>
      </>
      <Ui_Mask hexagon src={imgSrc} />
      <>
        <Ui_Kbd>⌘</Ui_Kbd>
        <Ui_Kbd>⌥</Ui_Kbd>
        <Ui_Kbd>⇧</Ui_Kbd>
        <Ui_Kbd>⌃</Ui_Kbd>
      </>
      <>
        <Ui_Countdown
          center
          tiny
          ref={textInput}
          targetTime={dayjs().add(15, 'days').toISOString()}
          showTimeValues={{
            useValues: ['day', 'hour', 'minute', 'second'],
            displayValues: ['days', 'hours', 'minutes', 'seconds'],
          }}
        />
      </>
      <div>
        <Ui_Collapse>
          <Ui_Collapse.Title>Click me to see content</Ui_Collapse.Title>
          <Ui_Collapse.Content>
            <p>Collapse content.</p>
          </Ui_Collapse.Content>
        </Ui_Collapse>
      </div>
      <div>
        <Ui_Alert warning>
          <span>Alert with icon</span>
        </Ui_Alert>
      </div>{' '}
      <div>
        <Ui_Button primary>Primary</Ui_Button>
        <Ui_Button secondary>Secondary</Ui_Button>
        <Ui_Button accent>Accent</Ui_Button>
        <Ui_Button ghost>Ghost</Ui_Button>
        <Ui_Button link>Link</Ui_Button>
        <Ui_Button info>Info</Ui_Button>
        <Ui_Button success>Success</Ui_Button>
        <Ui_Button warning>Warning</Ui_Button>
        <Ui_Button error>Error</Ui_Button>
      </div>
      <div>
        <Ui_Button primary outline>
          Primary
        </Ui_Button>
        <Ui_Button secondary outline>
          Secondary
        </Ui_Button>
        <Ui_Button accent outline>
          Accent
        </Ui_Button>
        <Ui_Button ghost outline>
          Ghost
        </Ui_Button>
        <Ui_Button link outline>
          Link
        </Ui_Button>
        <Ui_Button info outline>
          Info
        </Ui_Button>
        <Ui_Button success outline>
          Success
        </Ui_Button>
        <Ui_Button warning outline>
          Warning
        </Ui_Button>
        <Ui_Button error outline>
          Error
        </Ui_Button>
      </div>
      <div>
        <Ui_Button large>Large</Ui_Button>
        <Ui_Button medium>Medium</Ui_Button>
        <Ui_Button small>Small</Ui_Button>
        <Ui_Button tiny>Tiny</Ui_Button>
      </div>
      <div>
        <Ui_Button large primary outline>
          Large
        </Ui_Button>
        <Ui_Button medium warning>
          Medium
        </Ui_Button>
        <Ui_Button small outline>
          Small
        </Ui_Button>
        <Ui_Button tiny>Tiny</Ui_Button>
        <Ui_Button tiny disabled>
          Tiny disabled
        </Ui_Button>
      </div>
      <div>
        <Ui_Badge>badge default</Ui_Badge>
        <Ui_Badge info>info</Ui_Badge>
        <Ui_Badge error>error</Ui_Badge>
        <Ui_Badge success>success</Ui_Badge>
        <Ui_Badge warning>warning</Ui_Badge>
      </div>
      <div>
        <Ui_Badge outline large>
          badge default
        </Ui_Badge>
        <Ui_Badge error outline medium>
          error
        </Ui_Badge>
        <Ui_Badge success outline small>
          success
        </Ui_Badge>
        <Ui_Badge warning outline tiny>
          warning
        </Ui_Badge>
        <Ui_Badge warning outline mini disabled>
          mini disabled
        </Ui_Badge>
      </div>
      <div>
        <Ui_Card w96 bgSecondary style={{ borderRadius: 10 }}>
          <Ui_Card.Title>Hallo</Ui_Card.Title>
          <Ui_Card.Body>Test body</Ui_Card.Body>
          <Ui_Card.Actions>
            <Ui_Button secondary>Test button</Ui_Button>
          </Ui_Card.Actions>
        </Ui_Card>
      </div>
    </>
  )
}

export default TestComponent
