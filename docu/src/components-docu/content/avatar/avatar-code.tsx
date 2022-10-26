import { Ui_Avatar } from '@vermorxt/pandora_ui'

export const avatarCodeExamples = [
  {
    id: 'avatar_1',
    title: 'Avatar simple',
    preview: <Ui_Avatar />,
    codeExample: `
<Ui_Avatar />`,
  },
  {
    id: 'avatar_2',
    title: 'Avatar sizes',
    preview: (
      <>
        <Ui_Avatar large />
        <Ui_Avatar medium />
        <Ui_Avatar small />
        <Ui_Avatar tiny />
      </>
    ),
    codeExample: `
<Ui_Avatar large />
<Ui_Avatar medium />
<Ui_Avatar small />
<Ui_Avatar tiny />`,
  },
  {
    id: 'avatar_3',
    title: 'Avatar source',
    preview: <Ui_Avatar src="https://api.lorem.space/image/face?hash=88560" />,
    codeExample: `
<Ui_Avatar src="https://api.lorem.space/image/face?hash=88560" />`,
  },
  {
    id: 'avatar_4',
    title: 'Avatar radius',
    preview: (
      <>
        <Ui_Avatar roundedLg />
        <Ui_Avatar roundedXl />
        <Ui_Avatar rounded2xl />
        <Ui_Avatar rounded3xl />
        <Ui_Avatar roundedFull />
      </>
    ),
    codeExample: `
<Ui_Avatar roundedLg />
<Ui_Avatar roundedXl />
<Ui_Avatar rounded2xl />
<Ui_Avatar rounded3xl />
<Ui_Avatar roundedFull />`,
  },
  {
    id: 'avatar_5',
    title: 'Avatar shape',
    preview: (
      <>
        <Ui_Avatar squircle />
        <Ui_Avatar hexagon />
        <Ui_Avatar triangle />
      </>
    ),
    codeExample: `
<Ui_Avatar squircle />
<Ui_Avatar hexagon />
<Ui_Avatar triangle />`,
  },
  {
    id: 'avatar_6',
    title: 'Avatar group',
    preview: (
      <Ui_Avatar.Group>
        <Ui_Avatar small />
        <Ui_Avatar small />
        <Ui_Avatar small />
        <Ui_Avatar small />
        <Ui_Avatar small />
      </Ui_Avatar.Group>
    ),
    codeExample: `
<Ui_Avatar.Group>
  <Ui_Avatar small />
  <Ui_Avatar small />
  <Ui_Avatar small />
  <Ui_Avatar small />
  <Ui_Avatar small />
</Ui_Avatar.Group>`,
  },
  {
    id: 'avatar_7',
    title: 'Avatar group placeholder',
    preview: (
      <Ui_Avatar.Group>
        <Ui_Avatar small />
        <Ui_Avatar small />
        <Ui_Avatar small />
        <Ui_Avatar small />
        <Ui_Avatar small usePlaceHolder="+99" />
      </Ui_Avatar.Group>
    ),
    codeExample: `
<Ui_Avatar.Group>
  <Ui_Avatar small />
  <Ui_Avatar small />
  <Ui_Avatar small />
  <Ui_Avatar small />
   <Ui_Avatar small usePlaceHolder="+99" />
</Ui_Avatar.Group>`,
  },
  {
    id: 'avatar_8',
    title: 'Avatar ring',
    preview: (
      <>
        <Ui_Avatar ring small roundedFull />
        <Ui_Avatar ring small roundedFull ringPrimary />
        <Ui_Avatar ring small roundedFull ringSecondary />
        <Ui_Avatar
          ring
          small
          roundedFull
          ringSecondary
          ringOffset="8"
          ringOffsetBackground="primary"
          style={{ margin: '0 10px' }}
        />
      </>
    ),
    codeExample: `
<Ui_Avatar ring small roundedFull />
  <Ui_Avatar ring small roundedFull ringPrimary />
  <Ui_Avatar ring small roundedFull ringSecondary />
  <Ui_Avatar
    ring
    small
    roundedFull
    ringSecondary
    ringOffset="8"
    ringOffsetBackground="primary"
    style={{ margin: '0 10px' }}
  />
`,
  },
  {
    id: 'avatar_9',
    title: 'Avatar online status',
    preview: (
      <>
        <Ui_Avatar offline roundedFull />
        <Ui_Avatar online roundedFull />
      </>
    ),
    codeExample: `
<Ui_Avatar offline roundedFull />
<Ui_Avatar online roundedFull />
`,
  },
  {
    id: 'avatar_10',
    title: 'Avatar placeholder',
    preview: (
      <>
        <Ui_Avatar offline roundedFull small usePlaceHolder="Joe" />
        <Ui_Avatar roundedFull small usePlaceHolder="Nope" />
        <Ui_Avatar online roundedFull small usePlaceHolder="On" />
      </>
    ),
    codeExample: `
<Ui_Avatar offline roundedFull small usePlaceHolder="Joe" />
<Ui_Avatar roundedFull small usePlaceHolder="Nope" />
<Ui_Avatar online roundedFull small usePlaceHolder="On" />
`,
  },
]
