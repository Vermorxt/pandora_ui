import { Ui_Radio } from '@vermorxt/pandora_ui'

export const radioCodeExamples = [
  {
    id: 'radio_1',
    title: 'Radio sizes',
    preview: (
      <>
        <Ui_Radio name="radio_1" large />
        <Ui_Radio name="radio_1" medium />
        <Ui_Radio name="radio_1" small />
        <Ui_Radio name="radio_1" tiny />
      </>
    ),
    codeExample: `
<Ui_Radio name="radio_1" large />
<Ui_Radio name="radio_1" medium />
<Ui_Radio name="radio_1" small />
<Ui_Radio name="radio_1" tiny />`,
  },
  {
    id: 'radio_2',
    title: 'Radio colors',
    preview: (
      <>
        <Ui_Radio name="radio_2" primary />
        <Ui_Radio name="radio_2" secondary />
        <Ui_Radio name="radio_2" accent />
      </>
    ),
    codeExample: `
<Ui_Radio name="radio_2" primary />
<Ui_Radio name="radio_2" secondary />
<Ui_Radio name="radio_2" accent />`,
  },
  {
    id: 'radio_3',
    title: 'Radio disabled',
    preview: (
      <>
        <Ui_Radio disabled />
        <Ui_Radio disabled checked onChange={() => null} />
      </>
    ),
    codeExample: `
<Ui_Radio disabled />
<Ui_Radio disabled checked onChange={() => null} />`,
  },
  {
    id: 'radio_5',
    title: 'Radio label',
    preview: (
      <>
        <Ui_Radio large name="radio_5" label={'Label'} />
        <Ui_Radio medium name="radio_5" label={'Label'} />
        <Ui_Radio small name="radio_5" label={'Label'} />
        <Ui_Radio tiny name="radio_5" label={'Label'} />
      </>
    ),
    codeExample: `
<Ui_Radio large name="radio_5" label={'Label'} />
<Ui_Radio medium name="radio_5" label={'Label'} />
<Ui_Radio small name="radio_5" label={'Label'} />
<Ui_Radio tiny name="radio_5" label={'Label'} />`,
  },
  {
    id: 'radio_6',
    title: 'Radio label position',
    preview: (
      <>
        <Ui_Radio large name="radio_6" label={'Label'} labelPosition="right" />
        <Ui_Radio medium name="radio_6" label={'Label'} labelPosition="right" />
        <Ui_Radio small name="radio_6" label={'Label'} labelPosition="right" />
        <Ui_Radio tiny name="radio_6" label={'Label'} labelPosition="right" />
      </>
    ),
    codeExample: `
<Ui_Radio large name="radio_6" label={'Label'} labelPosition="right" />
<Ui_Radio medium name="radio_6" label={'Label'} labelPosition="right" />
<Ui_Radio small name="radio_6" label={'Label'} labelPosition="right" />
<Ui_Radio tiny name="radio_6" label={'Label'} labelPosition="right" />`,
  },
]
