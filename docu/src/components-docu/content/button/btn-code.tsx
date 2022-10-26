import { HeartIcon } from '@heroicons/react/solid'
import { Ui_Button } from '@vermorxt/pandora_ui'

export const buttonCodeExamples = [
  {
    id: 'button',
    title: 'Button',
    preview: (
      <>
        <Ui_Button>Button</Ui_Button>
      </>
    ),
    codeExample: `<Ui_Button primary>Primary</Ui_Button>`,
  },
  {
    id: 'button-colors',
    title: 'Button with brand colors',
    preview: (
      <>
        <Ui_Button primary>Primary</Ui_Button>
        <Ui_Button secondary>Secondary</Ui_Button>
        <Ui_Button accent>Accent</Ui_Button>
        <Ui_Button ghost>Ghost</Ui_Button>
        <Ui_Button link>Link</Ui_Button>
        <Ui_Button info>Info</Ui_Button>
        <Ui_Button success>Success</Ui_Button>
        <Ui_Button warning>Warning</Ui_Button>
        <Ui_Button error>Error</Ui_Button>
      </>
    ),
    codeExample: `<Ui_Button primary>Primary</Ui_Button>
<Ui_Button secondary>Secondary</Ui_Button>
<Ui_Button accent>Accent</Ui_Button>
<Ui_Button ghost>Ghost</Ui_Button>
<Ui_Button link>Link</Ui_Button>
<Ui_Button info>Info</Ui_Button>
<Ui_Button success>Success</Ui_Button>
<Ui_Button warning>Warning</Ui_Button>
<Ui_Button error>Error</Ui_Button>`,
  },
  {
    id: 'button-activate',
    title: 'Button activate',
    preview: (
      <>
        <Ui_Button primary active>
          Primary
        </Ui_Button>
        <Ui_Button secondary active>
          Secondary
        </Ui_Button>
        <Ui_Button accent active>
          Accent
        </Ui_Button>
        <Ui_Button ghost active>
          Ghost
        </Ui_Button>
        <Ui_Button link active>
          Link
        </Ui_Button>
        <Ui_Button info active>
          Info
        </Ui_Button>
        <Ui_Button success active>
          Success
        </Ui_Button>
        <Ui_Button warning active>
          Warning
        </Ui_Button>
        <Ui_Button error active>
          Error
        </Ui_Button>
      </>
    ),
    codeExample: `<Ui_Button primary active>Primary</Ui_Button>
<Ui_Button secondary active>Secondary</Ui_Button>
<Ui_Button accent active>Accent</Ui_Button>
<Ui_Button ghost active>Ghost</Ui_Button>
<Ui_Button link active>Link</Ui_Button>
<Ui_Button info active>Info</Ui_Button>
<Ui_Button success active>Success</Ui_Button>
<Ui_Button warning active>Warning</Ui_Button>
<Ui_Button error active>Error</Ui_Button>`,
  },
  {
    id: 'button-outline',
    title: 'Button outline',
    preview: (
      <>
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
      </>
    ),
    codeExample: `<Ui_Button primary outline>Primary</Ui_Button>
<Ui_Button secondary outline>Secondary</Ui_Button>
<Ui_Button accent outline>Accent</Ui_Button>
<Ui_Button ghost outline>Ghost</Ui_Button>
<Ui_Button link outline>Link</Ui_Button>
<Ui_Button info outline>Info</Ui_Button>
<Ui_Button success outline>Success</Ui_Button>
<Ui_Button warning outline>Warning</Ui_Button>
<Ui_Button error outline>Error</Ui_Button>`,
  },
  {
    id: 'button-wide',
    title: 'Button wide',
    preview: (
      <>
        <Ui_Button wide>Wide</Ui_Button>
      </>
    ),
    codeExample: `<Ui_Button wide>Wide</Ui_Button>`,
  },
  {
    id: 'button-size',
    title: 'Button size',
    preview: (
      <>
        <Ui_Button large>Large</Ui_Button>
        <Ui_Button medium>Medium</Ui_Button>
        <Ui_Button small>Small</Ui_Button>
        <Ui_Button tiny>Tiny</Ui_Button>
      </>
    ),
    codeExample: `<Ui_Button large>Large</Ui_Button>
<Ui_Button medium>Medium</Ui_Button>
<Ui_Button small>Small</Ui_Button>
<Ui_Button tiny>Tiny</Ui_Button>`,
  },
  {
    id: 'button-disabled',
    title: 'Button disabled',
    preview: (
      <>
        <Ui_Button disabled>Disabled</Ui_Button>
      </>
    ),
    codeExample: `<Ui_Button disabled>Disabled</Ui_Button>`,
  },
  {
    id: 'button-square',
    title: 'Button square',
    preview: (
      <>
        <Ui_Button loading square></Ui_Button>
        <Ui_Button className="gap-2" loading>
          Loading
        </Ui_Button>
      </>
    ),
    codeExample: `<Ui_Button loading square></Ui_Button>
<Ui_Button className="gap-2" loading>Loading</Ui_Button>`,
  },
  {
    id: 'button-circle',
    title: 'Button circle',
    preview: (
      <>
        <Ui_Button circle>x</Ui_Button>
        <Ui_Button circle outline>
          x
        </Ui_Button>
      </>
    ),
    codeExample: `<Ui_Button circle>x</Ui_Button>
<Ui_Button circle outline>x</Ui_Button>`,
  },
  {
    id: 'button-block',
    title: 'Button block',
    preview: (
      <>
        <Ui_Button block>Block</Ui_Button>
      </>
    ),
    codeExample: `<Ui_Button block>Block</Ui_Button>`,
  },
  {
    id: 'button-no-anim',
    title: 'Button no animation',
    preview: (
      <>
        <Ui_Button noAnimation>No click animation</Ui_Button>
      </>
    ),
    codeExample: `<Ui_Button noAnimation>No click animation</Ui_Button>`,
  },
  {
    id: 'button-icon',
    title: 'Button icon',
    preview: (
      <>
        <Ui_Button className="gap-2">{<HeartIcon className="h-5 w-5" />} Pre Icon</Ui_Button>
        <Ui_Button className="gap-2">Post Icon {<HeartIcon className="h-5 w-5" />}</Ui_Button>
      </>
    ),
    codeExample: `<Ui_Button className="gap-2">{<HeartIcon className="h-5 w-5" />} Pre Icon</Ui_Button>
<Ui_Button className="gap-2">Post Icon {<HeartIcon className="h-5 w-5" />}</Ui_Button>`,
  },
  {
    id: 'button-loading',
    title: 'Button loading',
    preview: (
      <>
        <Ui_Button loading square></Ui_Button>
        <Ui_Button className="gap-2" loading>
          Loading
        </Ui_Button>
      </>
    ),
    codeExample: `<Ui_Button loading square></Ui_Button>
<Ui_Button className="gap-2" loading>Loading</Ui_Button>`,
  },
]
