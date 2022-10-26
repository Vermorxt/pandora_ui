import { Ui_Range } from '@vermorxt/pandora_ui'

export const rangeCodeExamples = [
  {
    id: 'range_1',
    title: 'Range sizes',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_Range large style={{ margin: '0 auto 20px' }} />
        <Ui_Range medium style={{ margin: '0 auto 20px' }} />
        <Ui_Range small style={{ margin: '0 auto 20px' }} />
        <Ui_Range tiny style={{ margin: '0 auto 20px' }} />
      </div>
    ),
    codeExample: `
<div className="form-control w-full max-w-sm m-auto">
  <Ui_Range large />
  <Ui_Range medium />
  <Ui_Range small />
  <Ui_Range tiny />
</div>`,
  },
  {
    id: 'range_2',
    title: 'Range steps',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_Range step={20} />
      </div>
    ),
    codeExample: `
<Ui_Range step={20} />`,
  },
  {
    id: 'range_3',
    title: 'Range disabled',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_Range disabled />
      </div>
    ),
    codeExample: `
<div className="form-control w-full max-w-sm m-auto">
  <Ui_Range disabled />
</div>`,
  },
  {
    id: 'range_4',
    title: 'Range colors',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_Range primary style={{ margin: '0 auto 20px' }} />
        <Ui_Range secondary style={{ margin: '0 auto 20px' }} />
        <Ui_Range accent style={{ margin: '0 auto 20px' }} />
      </div>
    ),
    codeExample: `
<div className="form-control w-full max-w-sm m-auto">
  <Ui_Range primary />
  <Ui_Range secondary />
  <Ui_Range accent />
</div>`,
  },
  {
    id: 'range_5',
    title: 'Range label and alt-label',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_Range large label="Label" altLabel="Alternative Label" />
        <Ui_Range medium label="Label" altLabel="Alternative Label" />
        <Ui_Range small label="Label" altLabel="Alternative Label" />
        <Ui_Range tiny label="Label" altLabel="Alternative Label" />
      </div>
    ),
    codeExample: `
<div className="form-control w-full max-w-sm m-auto">
  <Ui_Range large label="Label" altLabel="Alternative Label" />
  <Ui_Range medium label="Label" altLabel="Alternative Label" />
  <Ui_Range small label="Label" altLabel="Alternative Label" />
  <Ui_Range tiny label="Label" altLabel="Alternative Label" />
</div>`,
  },
]
