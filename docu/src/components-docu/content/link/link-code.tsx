import { Ui_Link } from '@vermorxt/pandora_ui'

export const linkCodeExamples = [
  {
    id: 'link_1',
    title: 'Link simple',
    preview: (
      <>
        <Ui_Link>I am a simple link</Ui_Link>
      </>
    ),
    codeExample: `
<Ui_Link>I am a simple link</Ui_Link>`,
  },
  {
    id: 'link_2',
    title: 'Link inline',
    preview: (
      <>
        <p>
          Tailwind CSS resets the style of links by default.
          <br />
          Add link class to make it look like a <Ui_Link>normal link</Ui_Link> again.
        </p>
      </>
    ),
    codeExample: `
<p>
  Tailwind CSS resets the style of links by default.
  <br />
  Add link class to make it look like a <Ui_Link>normal link</Ui_Link> again.
</p>`,
  },
  {
    id: 'link_3',
    title: 'Link colors',
    preview: (
      <>
        <Ui_Link primary>Primary link</Ui_Link>
        <Ui_Link secondary>Secondary link</Ui_Link>
        <Ui_Link accent>Accent link</Ui_Link>
        <Ui_Link info>Info link</Ui_Link>
        <Ui_Link success>Success link</Ui_Link>
        <Ui_Link error>Error link</Ui_Link>
        <Ui_Link neutral>Neutral link</Ui_Link>
      </>
    ),
    codeExample: `
<Ui_Link primary>Primary link</Ui_Link>
<Ui_Link secondary>Secondary link</Ui_Link>
<Ui_Link accent>Accent link</Ui_Link>
<Ui_Link info>Info link</Ui_Link>
<Ui_Link success>Success link</Ui_Link>
<Ui_Link error>Error link</Ui_Link>
<Ui_Link neutral>Neutral link</Ui_Link>`,
  },
  {
    id: 'link_4',
    title: 'Link simple',
    preview: (
      <>
        <Ui_Link hover>I am a hover link</Ui_Link>
      </>
    ),
    codeExample: `
<Ui_Link hover>I am a hover link</Ui_Link>`,
  },
]
