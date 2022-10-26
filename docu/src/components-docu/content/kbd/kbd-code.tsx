import { Ui_Kbd } from '@vermorxt/pandora_ui'

export const kbdCodeExamples = [
  {
    id: 'kbd_1',
    title: 'Kbd simple',
    preview: <Ui_Kbd>A</Ui_Kbd>,
    codeExample: `
<Ui_Kbd>A</Ui_Kbd>`,
  },
  {
    id: 'kbd_2',
    title: 'Kbd sizes',
    preview: (
      <>
        <Ui_Kbd large>A</Ui_Kbd>
        <Ui_Kbd medium>A</Ui_Kbd>
        <Ui_Kbd small>A</Ui_Kbd>
        <Ui_Kbd tiny>A</Ui_Kbd>
      </>
    ),
    codeExample: `
<Ui_Kbd large>A</Ui_Kbd>
<Ui_Kbd medium>A</Ui_Kbd>
<Ui_Kbd small>A</Ui_Kbd>
<Ui_Kbd tiny>A</Ui_Kbd>`,
  },
  {
    id: 'kbd_3',
    title: 'Kbd inline',
    preview: (
      <>
        Press <Ui_Kbd small>F</Ui_Kbd> to pay respects.
      </>
    ),
    codeExample: `
Press <Ui_Kbd small>F</Ui_Kbd> to pay respects.`,
  },
  {
    id: 'kbd_4',
    title: 'Function Keys',
    preview: (
      <>
        <Ui_Kbd>ctrl</Ui_Kbd>+<Ui_Kbd>shift</Ui_Kbd>+<Ui_Kbd>del</Ui_Kbd>
      </>
    ),
    codeExample: `
<Ui_Kbd>ctrl</Ui_Kbd>+<Ui_Kbd>shift</Ui_Kbd>+<Ui_Kbd>del</Ui_Kbd>`,
  },
  {
    id: 'kbd_5',
    title: 'Key combination',
    preview: (
      <>
        <Ui_Kbd>⌘</Ui_Kbd>
        <Ui_Kbd>⌥</Ui_Kbd>
        <Ui_Kbd>⇧</Ui_Kbd>
        <Ui_Kbd>⌃</Ui_Kbd>
      </>
    ),
    codeExample: `
<Ui_Kbd>⌘</Ui_Kbd>
<Ui_Kbd>⌥</Ui_Kbd>
<Ui_Kbd>⇧</Ui_Kbd>
<Ui_Kbd>⌃</Ui_Kbd>`,
  },
  {
    id: 'kbd_6',
    title: 'Kbd keyboard',
    preview: (
      <>
        <div className="flex justify-center gap-1 my-1 w-full">
          <Ui_Kbd>q</Ui_Kbd>
          <Ui_Kbd>w</Ui_Kbd>
          <Ui_Kbd>e</Ui_Kbd>
          <Ui_Kbd>r</Ui_Kbd>
          <Ui_Kbd>t</Ui_Kbd>
          <Ui_Kbd>y</Ui_Kbd>
          <Ui_Kbd>u</Ui_Kbd>
          <Ui_Kbd>i</Ui_Kbd>
          <Ui_Kbd>o</Ui_Kbd>
          <Ui_Kbd>p</Ui_Kbd>
        </div>
        <div className="flex justify-center gap-1 my-1 w-full">
          <Ui_Kbd>a</Ui_Kbd>
          <Ui_Kbd>s</Ui_Kbd>
          <Ui_Kbd>d</Ui_Kbd>
          <Ui_Kbd>f</Ui_Kbd>
          <Ui_Kbd>g</Ui_Kbd>
          <Ui_Kbd>h</Ui_Kbd>
          <Ui_Kbd>j</Ui_Kbd>
          <Ui_Kbd>k</Ui_Kbd>
          <Ui_Kbd>l</Ui_Kbd>
        </div>
        <div className="flex justify-center gap-1 my-1 w-full">
          <Ui_Kbd>z</Ui_Kbd>
          <Ui_Kbd>x</Ui_Kbd>
          <Ui_Kbd>c</Ui_Kbd>
          <Ui_Kbd>v</Ui_Kbd>
          <Ui_Kbd>b</Ui_Kbd>
          <Ui_Kbd>n</Ui_Kbd>
          <Ui_Kbd>m</Ui_Kbd>
          <Ui_Kbd>/</Ui_Kbd>
        </div>
      </>
    ),
    codeExample: `
<div className="flex justify-center gap-1 my-1 w-full">
  <Ui_Kbd>q</Ui_Kbd>
  <Ui_Kbd>w</Ui_Kbd>
  <Ui_Kbd>e</Ui_Kbd>
  <Ui_Kbd>r</Ui_Kbd>
  <Ui_Kbd>t</Ui_Kbd>
  <Ui_Kbd>y</Ui_Kbd>
  <Ui_Kbd>u</Ui_Kbd>
  <Ui_Kbd>i</Ui_Kbd>
  <Ui_Kbd>o</Ui_Kbd>
  <Ui_Kbd>p</Ui_Kbd>
</div>
<div className="flex justify-center gap-1 my-1 w-full">
  <Ui_Kbd>a</Ui_Kbd>
  <Ui_Kbd>s</Ui_Kbd>
  <Ui_Kbd>d</Ui_Kbd>
  <Ui_Kbd>f</Ui_Kbd>
  <Ui_Kbd>g</Ui_Kbd>
  <Ui_Kbd>h</Ui_Kbd>
  <Ui_Kbd>j</Ui_Kbd>
  <Ui_Kbd>k</Ui_Kbd>
  <Ui_Kbd>l</Ui_Kbd>
</div>
<div className="flex justify-center gap-1 my-1 w-full">
  <Ui_Kbd>z</Ui_Kbd>
  <Ui_Kbd>x</Ui_Kbd>
  <Ui_Kbd>c</Ui_Kbd>
  <Ui_Kbd>v</Ui_Kbd>
  <Ui_Kbd>b</Ui_Kbd>
  <Ui_Kbd>n</Ui_Kbd>
  <Ui_Kbd>m</Ui_Kbd>
  <Ui_Kbd>/</Ui_Kbd>
</div>`,
  },
  {
    id: 'kbd_7',
    title: 'Kbd directions',
    preview: (
      <>
        <div className="flex justify-center w-full">
          <Ui_Kbd>▲</Ui_Kbd>
        </div>
        <div className="flex justify-center gap-12 w-full">
          <Ui_Kbd>◀︎</Ui_Kbd>
          <Ui_Kbd>▶︎</Ui_Kbd>
        </div>
        <div className="flex justify-center w-full">
          <Ui_Kbd>▼</Ui_Kbd>
        </div>
      </>
    ),
    codeExample: `
<div className="flex justify-center w-full">
  <Ui_Kbd>▲</Ui_Kbd>
</div>
  <div className="flex justify-center gap-12 w-full">
  <Ui_Kbd>◀︎</Ui_Kbd>
  <Ui_Kbd>▶︎</Ui_Kbd>
</div>
<div className="flex justify-center w-full">
  <Ui_Kbd>▼</Ui_Kbd>
</div>`,
  },
]
