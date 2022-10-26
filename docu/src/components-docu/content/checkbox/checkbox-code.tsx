import { Ui_Checkbox } from '@vermorxt/pandora_ui'

export const checkboxCodeExamples = [
  {
    id: 'checkbox_1',
    title: 'Checkbox sizes',
    preview: (
      <>
        <Ui_Checkbox large />
        <Ui_Checkbox medium />
        <Ui_Checkbox small />
        <Ui_Checkbox tiny />
      </>
    ),
    codeExample: `
<Ui_Checkbox large />
<Ui_Checkbox medium />
<Ui_Checkbox small />
<Ui_Checkbox tiny />`,
  },
  {
    id: 'checkbox_2',
    title: 'Checkbox colors',
    preview: (
      <>
        <Ui_Checkbox primary />
        <Ui_Checkbox secondary />
        <Ui_Checkbox accent />
      </>
    ),
    codeExample: `
<Ui_Checkbox primary />
<Ui_Checkbox secondary />
<Ui_Checkbox accent />`,
  },
  {
    id: 'checkbox_3',
    title: 'Checkbox disabled',
    preview: (
      <>
        <Ui_Checkbox disabled />
        <Ui_Checkbox disabled checked onChange={() => null} />
      </>
    ),
    codeExample: `
<Ui_Checkbox disabled />
<Ui_Checkbox disabled checked onChange={() => null} />`,
  },
  {
    id: 'checkbox_4',
    title: 'Checkbox indeterminate',
    preview: (
      <>
        <Ui_Checkbox indeterminate />
      </>
    ),
    codeExample: `
<Ui_Checkbox indeterminate />`,
  },
  {
    id: 'checkbox_5',
    title: 'Checkbox indeterminate',
    preview: (
      <>
        <Ui_Checkbox large label={'Label'} />
        <Ui_Checkbox medium label={'Label'} />
        <Ui_Checkbox small label={'Label'} />
        <Ui_Checkbox tiny label={'Label'} />
      </>
    ),
    codeExample: `
<Ui_Checkbox large label={'Label'} />
<Ui_Checkbox medium label={'Label'} />
<Ui_Checkbox small label={'Label'} />
<Ui_Checkbox tiny label={'Label'} />`,
  },
  {
    id: 'checkbox_6',
    title: 'Checkbox indeterminate',
    preview: (
      <>
        <Ui_Checkbox large label={'Label'} labelPosition="right" />
        <Ui_Checkbox medium label={'Label'} labelPosition="right" />
        <Ui_Checkbox small label={'Label'} labelPosition="right" />
        <Ui_Checkbox tiny label={'Label'} labelPosition="right" />
      </>
    ),
    codeExample: `
<Ui_Checkbox large label={'Label'} labelPosition="right" />
<Ui_Checkbox medium label={'Label'} labelPosition="right" />
<Ui_Checkbox small label={'Label'} labelPosition="right" />
<Ui_Checkbox tiny label={'Label'} labelPosition="right" />`,
  },
]
