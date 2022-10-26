import { Ui_Toggle } from '@vermorxt/pandora_ui'

export const toggleCodeExamples = [
  {
    id: 'toggle_1',
    title: 'Toggle sizes',
    preview: (
      <>
        <Ui_Toggle large />
        <Ui_Toggle medium />
        <Ui_Toggle small />
        <Ui_Toggle tiny />
      </>
    ),
    codeExample: `
<Ui_Toggle large />
<Ui_Toggle medium />
<Ui_Toggle small />
<Ui_Toggle tiny />`,
  },
  {
    id: 'toggle_2',
    title: 'Toggle colors',
    preview: (
      <>
        <Ui_Toggle primary />
        <Ui_Toggle secondary />
        <Ui_Toggle accent />
      </>
    ),
    codeExample: `
<Ui_Toggle primary />
<Ui_Toggle secondary />
<Ui_Toggle accent />`,
  },
  {
    id: 'toggle_3',
    title: 'Toggle disabled',
    preview: (
      <>
        <Ui_Toggle disabled />
        <Ui_Toggle disabled checked onChange={() => null} />
      </>
    ),
    codeExample: `
<Ui_Toggle disabled />
<Ui_Toggle disabled checked onChange={() => null} />`,
  },
  {
    id: 'toggle_4',
    title: 'Toggle indeterminate',
    preview: (
      <>
        <Ui_Toggle indeterminate />
      </>
    ),
    codeExample: `
<Ui_Toggle indeterminate />`,
  },
  {
    id: 'toggle_5',
    title: 'Toggle indeterminate',
    preview: (
      <>
        <Ui_Toggle large label={'Label'} />
        <Ui_Toggle medium label={'Label'} />
        <Ui_Toggle small label={'Label'} />
        <Ui_Toggle tiny label={'Label'} />
      </>
    ),
    codeExample: `
<Ui_Toggle indeterminate />`,
  },
  {
    id: 'toggle_6',
    title: 'Toggle indeterminate',
    preview: (
      <>
        <Ui_Toggle large label={'Label'} labelPosition="right" />
        <Ui_Toggle medium label={'Label'} labelPosition="right" />
        <Ui_Toggle small label={'Label'} labelPosition="right" />
        <Ui_Toggle tiny label={'Label'} labelPosition="right" />
      </>
    ),
    codeExample: `
<Ui_Toggle indeterminate />`,
  },
]
