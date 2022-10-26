import { Ui_Modal } from '@vermorxt/pandora_ui'

export const modalCodeExamples = [
  {
    id: 'modal_1',
    title: 'Modal simple',
    preview: (
      <Ui_Modal id="modal_docu_1">
        <>
          <h1>Hello</h1>
          <p>This is a simple modal ...</p>
        </>
      </Ui_Modal>
    ),
    codeExample: `
<Ui_Modal id="modal_1" >
  <>
    <h1>Hello</h1>
    <p>This is a simple modal ...</p>
  </>
</Ui_Modal>`,
  },
  {
    id: 'modal_2',
    title: 'Modal without close button',
    preview: (
      <Ui_Modal closeClickOutside={true} id="modal_docu_2">
        <>
          <h1>Hello</h1>
          <p>This is a simple modal without close button ...</p>
        </>
      </Ui_Modal>
    ),
    codeExample: `
<Ui_Modal closeClickOutside={true} id="modal_2">
  <>
    <h1>Hello</h1>
    <p>This is a simple modal without close button ...</p>
  </>
</Ui_Modal>`,
  },
  {
    id: 'modal_3',
    title: 'Modal with custom button text',
    preview: (
      <Ui_Modal id="modal_docu_3" buttonText={'open custom btn text'}>
        <>
          <h1>Hello</h1>
          <p>This is a modal ...</p>
        </>
      </Ui_Modal>
    ),
    codeExample: `
<Ui_Modal id="modal_3" buttonText={'open custom btn text'}>
  <>
    <h1>Hello</h1>
    <p>This is a modal ...</p>
  </>
</Ui_Modal>`,
  },
  {
    id: 'modal_4',
    title: 'Modal on click example',
    preview: (
      <Ui_Modal id="modal_docu_4" onClick={() => console.log('test click')}>
        <>
          <h1>Hello</h1>
          <p>This is a modal with on click example ...</p>
        </>
      </Ui_Modal>
    ),
    codeExample: `
<Ui_Modal id="modal_4" onClick={() => console.log('test click')}>
  <>
    <h1>Hello</h1>
    <p>This is a modal with on click example ...</p>
  </>
</Ui_Modal>`,
  },
  {
    id: 'modal_5',
    title: 'Modal large',
    preview: (
      <Ui_Modal id="modal_docu_5" large>
        <>
          <h1>Hello</h1>
          <p>This is a large modal ...</p>
        </>
      </Ui_Modal>
    ),
    codeExample: `
<Ui_Modal id="modal_5" large>
  <>
    <h1>Hello</h1>
    <p>This is a modal with on click example ...</p>
  </>
</Ui_Modal>`,
  },
]
