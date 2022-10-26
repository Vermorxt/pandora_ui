import { HeartIcon } from '@heroicons/react/solid'
import { Ui_Badge, Ui_Button } from '@vermorxt/pandora_ui'

export const badgeCodeExamples = [
  {
    id: 'badge',
    title: 'Badge',
    preview: (
      <>
        <Ui_Badge>Badge</Ui_Badge>
      </>
    ),
    codeExample: `<Ui_Badge primary>Primary</Ui_Badge>`,
  },
  {
    id: 'badge-colors',
    title: 'Badge with brand colors',
    preview: (
      <>
        <Ui_Badge primary>Primary</Ui_Badge>
        <Ui_Badge secondary>Secondary</Ui_Badge>
        <Ui_Badge accent>Accent</Ui_Badge>
        <Ui_Badge ghost>Ghost</Ui_Badge>
        <Ui_Badge info>Info</Ui_Badge>
        <Ui_Badge success>Success</Ui_Badge>
        <Ui_Badge warning>Warning</Ui_Badge>
        <Ui_Badge error>Error</Ui_Badge>
      </>
    ),
    codeExample: `<Ui_Badge primary>Primary</Ui_Badge>
<Ui_Badge secondary>Secondary</Ui_Badge>
<Ui_Badge accent>Accent</Ui_Badge>
<Ui_Badge ghost>Ghost</Ui_Badge>
<Ui_Badge info>Info</Ui_Badge>
<Ui_Badge success>Success</Ui_Badge>
<Ui_Badge warning>Warning</Ui_Badge>
<Ui_Badge error>Error</Ui_Badge>`,
  },
  {
    id: 'badge-outline',
    title: 'Badge outline',
    preview: (
      <>
        <Ui_Badge primary outline>
          Primary
        </Ui_Badge>
        <Ui_Badge secondary outline>
          Secondary
        </Ui_Badge>
        <Ui_Badge accent outline>
          Accent
        </Ui_Badge>
        <Ui_Badge ghost outline>
          Ghost
        </Ui_Badge>
        <Ui_Badge info outline>
          Info
        </Ui_Badge>
        <Ui_Badge success outline>
          Success
        </Ui_Badge>
        <Ui_Badge warning outline>
          Warning
        </Ui_Badge>
        <Ui_Badge error outline>
          Error
        </Ui_Badge>
      </>
    ),
    codeExample: `<Ui_Badge primary outline>Primary</Ui_Badge>
<Ui_Badge secondary outline>Secondary</Ui_Badge>
<Ui_Badge accent outline>Accent</Ui_Badge>
<Ui_Badge ghost outline>Ghost</Ui_Badge>
<Ui_Badge info outline>Info</Ui_Badge>
<Ui_Badge success outline>Success</Ui_Badge>
<Ui_Badge warning outline>Warning</Ui_Badge>
<Ui_Badge error outline>Error</Ui_Badge>`,
  },
  {
    id: 'badge-size',
    title: 'Badge size',
    preview: (
      <>
        <Ui_Badge large>987,654</Ui_Badge>
        <Ui_Badge medium>987,654</Ui_Badge>
        <Ui_Badge small>987,654</Ui_Badge>
        <Ui_Badge tiny>987,654</Ui_Badge>
      </>
    ),
    codeExample: `
<Ui_Badge large>987,654</Ui_Badge>
<Ui_Badge medium>987,654</Ui_Badge>
<Ui_Badge small>987,654</Ui_Badge>
<Ui_Badge tiny>987,654</Ui_Badge>`,
  },
  {
    id: 'badge-empty',
    title: 'Badge empty',
    preview: (
      <>
        <Ui_Badge large />
        <Ui_Badge medium />
        <Ui_Badge small />
        <Ui_Badge tiny />
      </>
    ),
    codeExample: `<Ui_Badge large>Large</Ui_Badge>
<Ui_Badge medium>Medium</Ui_Badge>
<Ui_Badge small>Small</Ui_Badge>
<Ui_Badge tiny>Tiny</Ui_Badge>`,
  },
  {
    id: 'badge-icon',
    title: 'Badge icon',
    preview: (
      <>
        <Ui_Badge className="gap-2">{<HeartIcon className="h-5 w-5" />} Pre Icon</Ui_Badge>
        <Ui_Badge className="gap-2">Post Icon {<HeartIcon className="h-5 w-5" />}</Ui_Badge>
      </>
    ),
    codeExample: `<Ui_Badge className="gap-2">{<HeartIcon className="h-5 w-5" />} Pre Icon</Ui_Badge>
<Ui_Badge className="gap-2">Post Icon {<HeartIcon className="h-5 w-5" />}</Ui_Badge>`,
  },
  {
    id: 'badge-button',
    title: 'Badge button',
    preview: (
      <>
        <Ui_Button className="gap-2">
          Inbox
          <Ui_Badge>+99</Ui_Badge>
        </Ui_Button>
        <Ui_Button className="gap-2">
          Inbox
          <Ui_Badge secondary>+99</Ui_Badge>
        </Ui_Button>
      </>
    ),
    codeExample: `
<Ui_Button className="gap-2">
  Inbox
  <Ui_Badge>+99</Ui_Badge>
</Ui_Button>
<Ui_Button className="gap-2">
  Inbox
  <Ui_Badge secondary>+99</Ui_Badge>
</Ui_Button>
`,
  },
]
