import { Ui_MockupCode } from '@vermorxt/pandora_ui'

export const mockupCodeCodeExamples = [
  {
    id: 'mockupCode',
    title: 'Mockup code simple',
    preview: (
      <>
        <Ui_MockupCode>
          <pre data-prefix="$">
            <code>npm i daisyui</code>
          </pre>
        </Ui_MockupCode>
      </>
    ),
    codeExample: `<Ui_MockupCode>Mockup code</Ui_MockupCode>`,
  },
  {
    id: 'mockupCode',
    title: 'Mockup code simple',
    preview: (
      <>
        <Ui_MockupCode>
          <pre data-prefix="$">
            <code>npm i daisyui</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Done!</code>
          </pre>
        </Ui_MockupCode>
      </>
    ),
    codeExample: `<Ui_MockupCode>Mockup code</Ui_MockupCode>`,
  },
  {
    id: 'mockupCode',
    title: 'Mockup code simple',
    preview: (
      <>
        <Ui_MockupCode>
          <pre data-prefix="1">
            <code>npm i daisyui</code>
          </pre>
          <pre data-prefix="2">
            <code>installing...</code>
          </pre>
          <pre data-prefix="3" className="bg-warning text-warning-content">
            <code>Error!</code>
          </pre>
        </Ui_MockupCode>
      </>
    ),
    codeExample: `<Ui_MockupCode>Mockup code</Ui_MockupCode>`,
  },
  {
    id: 'mockupCode',
    title: 'Mockup code simple',
    preview: (
      <>
        <Ui_MockupCode>
          <pre data-prefix="~">
            <code>
              Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae qui et et dolore ratione.
            </code>
          </pre>
        </Ui_MockupCode>
      </>
    ),
    codeExample: `<Ui_MockupCode>Mockup code</Ui_MockupCode>`,
  },
  {
    id: 'mockupCode',
    title: 'Mockup code simple',
    preview: (
      <>
        <Ui_MockupCode>
          <pre>
            <code>without prefix</code>
          </pre>
        </Ui_MockupCode>
      </>
    ),
    codeExample: `<Ui_MockupCode>Mockup code</Ui_MockupCode>`,
  },
  {
    id: 'mockupCode',
    title: 'Mockup code simple',
    preview: (
      <>
        <Ui_MockupCode bgColor="primary">
          <pre>
            <code>without prefix</code>
          </pre>
        </Ui_MockupCode>
      </>
    ),
    codeExample: `<Ui_MockupCode>Mockup code</Ui_MockupCode>`,
  },
]
