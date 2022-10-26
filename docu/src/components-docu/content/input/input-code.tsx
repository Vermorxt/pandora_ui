import { Ui_Input } from '@vermorxt/pandora_ui'

export const inputCodeExamples = [
  {
    id: 'input_1',
    title: 'Input sizes',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_Input large placeholder={'type here ...'} style={{ margin: '0 auto 20px' }} />
        <Ui_Input medium placeholder={'type here ...'} style={{ margin: '0 auto 20px' }} />
        <Ui_Input small placeholder={'type here ...'} style={{ margin: '0 auto 20px' }} />
        <Ui_Input tiny placeholder={'type here ...'} style={{ margin: '0 auto 20px' }} />
      </div>
    ),
    codeExample: `
<div className="form-control w-full max-w-sm m-auto">
  <Ui_Input large placeholder={'type here ...'} />
  <Ui_Input medium placeholder={'type here ...'} />
  <Ui_Input small placeholder={'type here ...'} />
  <Ui_Input tiny placeholder={'type here ...'} />
</div>`,
  },
  {
    id: 'input_2',
    title: 'Input bordered',
    preview: <Ui_Input bordered placeholder={'type here ...'} className="w-full max-w-sm m-auto" />,
    codeExample: `
<Ui_Input bordered placeholder={'type here ...'} className="w-full max-w-sm m-auto" />`,
  },
  {
    id: 'input_3',
    title: 'Input disabled',
    preview: <Ui_Input disabled bordered placeholder={'type here ...'} className="w-full max-w-sm m-auto" />,
    codeExample: `
<Ui_Input disabled bordered placeholder={'type here ...'} className="w-full max-w-sm m-auto" />
`,
  },
  {
    id: 'input_4',
    title: 'Input ghost',
    preview: <Ui_Input ghost placeholder={'type here ...'} className="w-full max-w-sm m-auto" />,
    codeExample: `
<Ui_Input ghost placeholder={'type here ...'} />
`,
  },
  {
    id: 'input_5',
    title: 'Input colors',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_Input primary placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
        <Ui_Input secondary placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
        <Ui_Input accent placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
        <Ui_Input info placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
        <Ui_Input success placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
        <Ui_Input warning placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
        <Ui_Input error placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
      </div>
    ),
    codeExample: `
<div className="form-control w-full max-w-sm m-auto">
  <Ui_Input primary placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
  <Ui_Input secondary placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
  <Ui_Input accent placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
  <Ui_Input info placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
  <Ui_Input success placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
  <Ui_Input warning placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
  <Ui_Input error placeholder={'type here ...'} className="w-full max-w-sm m-auto mb-4" />
</div>`,
  },
  {
    id: 'input_6',
    title: 'Input label and alt-label',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_Input large label="Label" altLabel="Alternative Label" bordered placeholder={'type here ...'} />
        <Ui_Input medium label="Label" altLabel="Alternative Label" bordered placeholder={'type here ...'} />
        <Ui_Input small label="Label" altLabel="Alternative Label" bordered placeholder={'type here ...'} />
        <Ui_Input tiny label="Label" altLabel="Alternative Label" bordered placeholder={'type here ...'} />
      </div>
    ),
    codeExample: `
<div className="form-control w-full max-w-sm m-auto">
  <Ui_Input
    large
    label="Label"
    altLabel="Alternative Label"
    bordered
    placeholder={'type here ...'}
  />
  <Ui_Input
    medium
    label="Label"
    altLabel="Alternative Label"
    bordered
    placeholder={'type here ...'}
  />
  <Ui_Input
    small
    label="Label"
    altLabel="Alternative Label"
    bordered
    placeholder={'type here ...'}
  />
  <Ui_Input
    tiny
    label="Label"
    altLabel="Alternative Label"
    bordered
    placeholder={'type here ...'}
  />
</div>`,
  },
]
