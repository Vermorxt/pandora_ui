import { Ui_Tooltip } from '@vermorxt/pandora_ui'

export const tooltipCodeExamples = [
  {
    id: 'tooltip',
    title: 'Tooltip as wrapper',
    preview: (
      <>
        <Ui_Tooltip tiny content="Hello" position="top">
          Hover me
        </Ui_Tooltip>
      </>
    ),
    codeExample: `
<Ui_Tooltip tiny content="Hello" position="top">
  Hover me
</Ui_Tooltip>`,
  },
  // NOTE: removed inline tooltip as it was buggy. Pending implementation
  //   {
  //     id: 'tooltip',
  //     title: 'Tooltip as parameter',
  //     preview: (
  //       <>
  //         <Ui_Button tiny tooltip={{ content: 'hallo', position: 'top' }}>
  //           Hover me
  //         </Ui_Button>
  //       </>
  //     ),
  //     codeExample: `
  // <Ui_Button tiny tooltip={{ content: 'hallo', position: 'top' }}>
  //   Hover me
  // </Ui_Button>`,
  //   },
  {
    id: 'tooltip',
    title: 'Tooltip force open',
    preview: (
      <>
        <Ui_Tooltip tiny content="hallo" position="top" open>
          Force open
        </Ui_Tooltip>
      </>
    ),
    codeExample: `
<Ui_Tooltip tiny content="hallo" position="top" open>
  Force open
</Ui_Tooltip>
        `,
  },
  {
    id: 'tooltip',
    title: 'Tooltip position',
    preview: (
      <div className="flex gap-20">
        <Ui_Tooltip tiny content="top" position="top">
          Hover
        </Ui_Tooltip>
        <Ui_Tooltip tiny content="right" position="right">
          Hover
        </Ui_Tooltip>
        <Ui_Tooltip tiny content="bottom" position="bottom">
          Hover
        </Ui_Tooltip>
        <Ui_Tooltip tiny content="left" position="left">
          Hover
        </Ui_Tooltip>
      </div>
    ),
    codeExample: `
<Ui_Tooltip tiny content="top" position="top">
  Hover
</Ui_Tooltip>
<Ui_Tooltip tiny content="right" position="right">
  Hover
</Ui_Tooltip>
<Ui_Tooltip tiny content="bottom" position="bottom">
  Hover
</Ui_Tooltip>
<Ui_Tooltip tiny content="left" position="left">
  Hover
</Ui_Tooltip>
  `,
  },
  {
    id: 'tooltip',
    title: 'Tooltip colors',
    preview: (
      <div className="flex gap-10">
        <Ui_Tooltip tiny content="primary" position="top" primary>
          Primary
        </Ui_Tooltip>
        <Ui_Tooltip tiny content="secondary" position="top" secondary>
          Secondary
        </Ui_Tooltip>
        <Ui_Tooltip tiny content="accent" position="top" accent>
          Accent
        </Ui_Tooltip>
        <Ui_Tooltip tiny content="success" position="top" success>
          Success
        </Ui_Tooltip>
        <Ui_Tooltip tiny content="info" position="top" info>
          Info
        </Ui_Tooltip>
        <Ui_Tooltip tiny content="error" position="top" error>
          Error
        </Ui_Tooltip>
      </div>
    ),
    codeExample: `
<Ui_Tooltip tiny content="primary" position="top" primary>
  Primary
</Ui_Tooltip>
<Ui_Tooltip tiny content="secondary" position="top" secondary>
  Secondary
</Ui_Tooltip>
<Ui_Tooltip tiny content="accent" position="top" accent>
  Accent
</Ui_Tooltip>
<Ui_Tooltip tiny content="success" position="top" success>
  Success
</Ui_Tooltip>
<Ui_Tooltip tiny content="info" position="top" info>
  Info
</Ui_Tooltip>
<Ui_Tooltip tiny content="error" position="top" error>
  Error
</Ui_Tooltip>`,
  },
]
