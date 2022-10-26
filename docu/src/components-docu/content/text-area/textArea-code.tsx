import { Ui_TextArea } from '@vermorxt/pandora_ui'

export const textAreaCodeExamples = [
  {
    id: 'textArea_1',
    title: 'Text area ',
    preview: <Ui_TextArea large placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />,
    codeExample: `
<Ui_TextArea large placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
`,
  },
  {
    id: 'textArea_2',
    title: 'Text area bordered',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_TextArea bordered placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
      </div>
    ),
    codeExample: `
<Ui_TextArea bordered placeholder={'type here ...'}  className="w-full max-w-sm m-auto mb-4" />
`,
  },
  {
    id: 'textArea_3',
    title: 'Text area disabled',
    preview: <Ui_TextArea disabled bordered placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />,
    codeExample: `
  <Ui_TextArea disabled bordered placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
`,
  },
  {
    id: 'textArea_4',
    title: 'Text area ghost',
    preview: <Ui_TextArea ghost placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />,
    codeExample: `
<Ui_TextArea ghost placeholder={'type here ...'} />
`,
  },
  {
    id: 'textArea_5',
    title: 'Text area colors',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_TextArea primary placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
        <Ui_TextArea secondary placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
        <Ui_TextArea accent placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
        <Ui_TextArea info placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
        <Ui_TextArea success placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
        <Ui_TextArea warning placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
        <Ui_TextArea error placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
      </div>
    ),
    codeExample: `
<div className="form-control w-full max-w-sm m-auto">
  <Ui_TextArea primary placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
  <Ui_TextArea secondary placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
  <Ui_TextArea accent placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
  <Ui_TextArea info placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
  <Ui_TextArea success placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
  <Ui_TextArea warning placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
  <Ui_TextArea error placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
</div>`,
  },
  {
    id: 'textArea_6',
    title: 'Text area label and alt-label',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_TextArea
          large
          label="Label"
          altLabel="Alternative Label"
          bordered
          placeholder={'type here ...'}
          className="w-full max-w-sm m-auto"
        />
      </div>
    ),
    codeExample: `
<div className="form-control w-full max-w-sm m-auto">
  <Ui_TextArea
    large
    label="Label"
    altLabel="Alternative Label"
    bordered
    placeholder={'type here ...'}
    className="w-full max-w-sm m-auto"
  />
</div>`,
  },
]
