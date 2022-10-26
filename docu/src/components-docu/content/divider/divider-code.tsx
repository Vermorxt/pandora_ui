import { Ui_Divider } from '@vermorxt/pandora_ui'

export const dividerCodeExamples = [
  {
    id: 'divider',
    title: 'Divider simple',
    preview: (
      <div className="flex flex-col w-full border-opacity-50">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
        <Ui_Divider>OR</Ui_Divider>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
      </div>
    ),
    codeExample: `<div className="flex flex-col w-full border-opacity-50">
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
  <Ui_Divider>OR</Ui_Divider>
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
</div>`,
  },
  {
    id: 'divider',
    title: 'Divider horizontal',
    preview: (
      <div className="flex w-full">
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
        <Ui_Divider horizontal>OR</Ui_Divider>
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
      </div>
    ),
    codeExample: `<div className="flex w-full">
  <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
  <Ui_Divider horizontal>OR</Ui_Divider>
  <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
</div>`,
  },
  {
    id: 'divider',
    title: 'Divider with no text',
    preview: (
      <div className="flex flex-col w-full border-opacity-50">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
        <Ui_Divider />
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
      </div>
    ),
    codeExample: `<div className="flex flex-col w-full border-opacity-50">
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
  <Ui_Divider />
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
</div>`,
  },
  {
    id: 'divider',
    title: 'Divider responsive',
    preview: (
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
        <Ui_Divider className="lg:divider-horizontal">OR</Ui_Divider>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
      </div>
    ),
    codeExample: `<div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
  <Ui_Divider className="lg:divider-horizontal">OR</Ui_Divider>
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
</div>`,
  },
]
