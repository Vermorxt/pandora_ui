import { Ui_Spinner } from '@vermorxt/pandora_ui'

export const spinnerCodeExamples = [
  {
    id: 'Spinner_1',
    title: 'Spinner Simple',
    preview: (
      <div>
        <Ui_Spinner />
      </div>
    ),
    codeExample: `
<div>
  <Ui_Spinner />
</div>
  `,
  },
  {
    id: 'Spinner_2',
    title: 'Spinner stroke width',
    preview: (
      <div>
        <Ui_Spinner strokeWidth={10} />
      </div>
    ),
    codeExample: `
<div>
  <Ui_Spinner strokeWidth={10} />
</div>
  `,
  },
  {
    id: 'Spinner_3',
    title: 'Spinner color',
    preview: (
      <div>
        <Ui_Spinner color={'green'} />
      </div>
    ),
    codeExample: `
<div>
  <Ui_Spinner color={'green'} />
</div>
  `,
  },
  {
    id: 'Spinner_4',
    title: 'Spinner sizes',
    preview: (
      <div className="flex gap-2 flex-col">
        <Ui_Spinner large />
        <Ui_Spinner medium />
        <Ui_Spinner small />
        <Ui_Spinner tiny />
      </div>
    ),
    codeExample: `
<div className="flex gap-2 flex-col">
  <Ui_Spinner large />
  <Ui_Spinner medium />
  <Ui_Spinner small />
  <Ui_Spinner tiny />
</div>
  `,
  },
]
