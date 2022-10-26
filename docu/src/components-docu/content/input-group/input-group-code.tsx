import { Ui_InputGroup, Ui_Input } from '@vermorxt/pandora_ui'

export const inputGroupCodeExamples = [
  {
    id: 'inputGroup_1',
    title: 'Group label and text input horizontally',
    preview: (
      <>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <Ui_InputGroup>
            <span>Email</span>
            <Ui_Input placeholder="info@site.com" bordered />
          </Ui_InputGroup>
        </div>
      </>
    ),
    codeExample: `
<div className="form-control">
  <label className="label">
    <span className="label-text">Your Email</span>
  </label>
  <Ui_InputGroup>
    <span>Email</span>
    <Ui_Input placeholder="info@site.com" bordered />
  </Ui_InputGroup>
</div>`,
  },
  {
    id: 'inputGroup_2',
    title: 'Group text input and label horizontally',
    preview: (
      <>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter amount</span>
          </label>
          <Ui_InputGroup>
            <Ui_Input placeholder="0.01" bordered />
            <span>BTC</span>
          </Ui_InputGroup>
        </div>
      </>
    ),
    codeExample: `
<div className="form-control">
  <label className="label">
    <span className="label-text">Enter amount</span>
  </label>
  <Ui_InputGroup>
    <Ui_Input placeholder="0.01" bordered />
    <span>BTC</span>
  </Ui_InputGroup>
</div>`,
  },
  {
    id: 'inputGroup_3',
    title: 'Input group on both sides',
    preview: (
      <>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter amount</span>
          </label>
          <Ui_InputGroup>
            <span>Price</span>
            <Ui_Input placeholder="10" bordered />
            <span>USD</span>
          </Ui_InputGroup>
        </div>
      </>
    ),
    codeExample: `
<div className="form-control">
  <label className="label">
    <span className="label-text">Enter amount</span>
  </label>
  <Ui_InputGroup>
    <span>Price</span>
    <Ui_Input placeholder="10" bordered />
    <span>USD</span>
  </Ui_InputGroup>
</div>`,
  },
  {
    id: 'inputGroup_4',
    title: 'Group label and text input vertically',
    preview: (
      <>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <Ui_InputGroup vertical>
            <span>Email</span>
            <Ui_Input placeholder="info@site.com" bordered />
          </Ui_InputGroup>
        </div>
      </>
    ),
    codeExample: `
<div className="form-control">
  <label className="label">
    <span className="label-text">Your Email</span>
  </label>
  <Ui_InputGroup vertical>
    <span>Email</span>
    <Ui_Input placeholder="info@site.com" bordered />
  </Ui_InputGroup>
</div>`,
  },
  {
    id: 'inputGroup_5',
    title: 'Input group size',
    preview: (
      <div className="form-control">
        <Ui_InputGroup large className="mb-3 flex justify-center">
          <span>Lg</span>
          <Ui_Input large placeholder="type here ..." bordered />
        </Ui_InputGroup>
        <Ui_InputGroup medium className="mb-3 flex justify-center">
          <span>Md</span>
          <Ui_Input medium placeholder="type here ..." bordered />
        </Ui_InputGroup>
        <Ui_InputGroup small className="mb-3 flex justify-center">
          <span>Sm</span>
          <Ui_Input small placeholder="type here ..." bordered />
        </Ui_InputGroup>
        <Ui_InputGroup tiny className="mb-3 flex justify-center">
          <span>Tn</span>
          <Ui_Input tiny placeholder="type here ..." bordered />
        </Ui_InputGroup>
      </div>
    ),
    codeExample: `
<div className="form-control">
  <Ui_InputGroup large className="mb-3 flex justify-center">
    <span>Lg</span>
    <Ui_Input large placeholder="type here ..." bordered />
  </Ui_InputGroup>
  <Ui_InputGroup medium className="mb-3 flex justify-center">
    <span>Md</span>
    <Ui_Input medium placeholder="type here ..." bordered />
  </Ui_InputGroup>
  <Ui_InputGroup small className="mb-3 flex justify-center">
    <span>Sm</span>
    <Ui_Input small placeholder="type here ..." bordered />
  </Ui_InputGroup>
  <Ui_InputGroup tiny className="mb-3 flex justify-center">
    <span>Tn</span>
    <Ui_Input tiny placeholder="type here ..." bordered />
  </Ui_InputGroup>
</div>`,
  },
]
