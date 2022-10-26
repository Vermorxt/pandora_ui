import { Ui_Button, Ui_ButtonGroup, Ui_Radio } from '@vermorxt/pandora_ui'

export const buttonGroupCodeExamples = [
  {
    id: 'buttonGroup_1',
    title: 'ButtonGroup simple',
    preview: (
      <Ui_ButtonGroup>
        <Ui_Button active>Button</Ui_Button>
        <Ui_Button>Button</Ui_Button>
        <Ui_Button>Button</Ui_Button>
      </Ui_ButtonGroup>
    ),
    codeExample: `
<Ui_ButtonGroup>
  <Ui_Button active>Button</Ui_Button>
  <Ui_Button>Button</Ui_Button>
  <Ui_Button>Button</Ui_Button>
</Ui_ButtonGroup>`,
  },
  {
    id: 'buttonGroup_2',
    title: 'ButtonGroup as radio input fields',
    preview: (
      <Ui_ButtonGroup>
        <Ui_Radio name="group1" className="btn" dataTitle="1" />
        <Ui_Radio name="group1" className="btn" dataTitle="2" />
        <Ui_Radio name="group1" className="btn" dataTitle="3" checked onChange={() => null} />
        <Ui_Radio name="group1" className="btn" dataTitle="4" />
      </Ui_ButtonGroup>
    ),
    codeExample: `
<Ui_ButtonGroup>
  <Ui_Radio name="group1" className="btn" dataTitle="1" />
  <Ui_Radio name="group1" className="btn" dataTitle="2" />
  <Ui_Radio name="group1" className="btn" dataTitle="3" checked onChange={() => null} />
  <Ui_Radio name="group1" className="btn" dataTitle="4" />
</Ui_ButtonGroup>`,
  },
]
