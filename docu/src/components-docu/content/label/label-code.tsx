import { DRAWER_ID_SIDEBAR } from '@/root/src/_constants/main'
import { Ui_Label } from '@vermorxt/pandora_ui'

export const labelCodeExamples = [
  {
    id: 'label_1',
    title: 'Label sizes',
    preview: (
      <>
        <Ui_Label large>Label</Ui_Label>
        <Ui_Label medium>Label</Ui_Label>
        <Ui_Label small>Label</Ui_Label>
        <Ui_Label tiny>Label</Ui_Label>
      </>
    ),
    codeExample: `
<Ui_Label large>Label</Ui_Label>
<Ui_Label medium>Label</Ui_Label>
<Ui_Label small>Label</Ui_Label>
<Ui_Label tiny>Label</Ui_Label>`,
  },
  {
    id: 'label_2',
    title: 'Label sizes',
    preview: (
      <>
        <Ui_Label as="button" small htmlFor={DRAWER_ID_SIDEBAR}>
          Button
        </Ui_Label>
      </>
    ),
    codeExample: `
const drawerId = '${DRAWER_ID_SIDEBAR}'

<Ui_Label as="button" small htmlFor={drawerId}>
  Button
</Ui_Label>`,
  },
]
