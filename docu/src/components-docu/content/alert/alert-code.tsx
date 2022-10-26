import { Ui_Alert } from '@vermorxt/pandora_ui'

export const alertCodeExamples = [
  {
    id: 'alert_1',
    title: 'Alert simple',
    preview: (
      <Ui_Alert>
        <span>Alert with icon</span>
      </Ui_Alert>
    ),
    codeExample: `
<Ui_Alert>
  <span>Alert with icon</span>
</Ui_Alert>`,
  },
  {
    id: 'alert_2',
    title: 'Alert without icon',
    preview: (
      <Ui_Alert noIcon>
        <span>Alert without icon</span>
      </Ui_Alert>
    ),
    codeExample: `
<Ui_Alert noIcon>
  <span>Alert without icon</span>
</Ui_Alert>`,
  },
  {
    id: 'alert_3',
    title: 'Alert info',
    preview: (
      <Ui_Alert info>
        <span>New software update available.</span>
      </Ui_Alert>
    ),
    codeExample: `
<Ui_Alert info>
  <span>New software update available.</span>
</Ui_Alert>`,
  },
  {
    id: 'alert_4',
    title: 'Alert success',
    preview: (
      <Ui_Alert success>
        <span>Your purchase has been confirmed!</span>
      </Ui_Alert>
    ),
    codeExample: `
<Ui_Alert success>
  <span>Your purchase has been confirmed!</span>
</Ui_Alert>`,
  },
  {
    id: 'alert_5',
    title: 'Alert warning',
    preview: (
      <Ui_Alert warning>
        <span>Warning: Invalid email address!</span>
      </Ui_Alert>
    ),
    codeExample: `
<Ui_Alert warning>
  <span>Warning: Invalid email address!</span>
</Ui_Alert>`,
  },
  {
    id: 'alert_6',
    title: 'Alert error',
    preview: (
      <Ui_Alert error>
        <span>Error! Task failed successfully.</span>
      </Ui_Alert>
    ),
    codeExample: `
<Ui_Alert error>
  <span>Error! Task failed successfully.</span>
</Ui_Alert>`,
  },
  {
    id: 'alert_7',
    title: 'Alert with buttons',
    preview: (
      <Ui_Alert onDeny={() => console.log('deny')} onAccept={() => console.log('accept')} onAcceptButtonText="Do it!">
        <span>Alert with buttons and custom button text for accept.</span>
      </Ui_Alert>
    ),
    codeExample: `
<Ui_Alert onDeny={(e) => console.log('deny')} onAccept={(e) => console.log('accept')} onAcceptButtonText="Do it!">
  <span>Alert with buttons and custom button text for accept.</span>
</Ui_Alert>`,
  },
]
