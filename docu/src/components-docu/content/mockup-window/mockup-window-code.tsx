import { Ui_MockupWindow } from '@vermorxt/pandora_ui'

export const mockupWindowCodeExamples = [
  {
    id: 'MockupWindow',
    title: 'Mockup window simple',
    preview: (
      <>
        <Ui_MockupWindow border="base-300" className=" w-full">
          <div className="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
        </Ui_MockupWindow>
      </>
    ),
    codeExample: `
<Ui_MockupWindow border="base-300" className=" w-full">
  <div className="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
</Ui_MockupWindow>`,
  },
  {
    id: 'MockupWindow',
    title: 'Mockup window simple',
    preview: (
      <>
        <Ui_MockupWindow className="w-full border" bgColor="base-300">
          <div className="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
        </Ui_MockupWindow>
      </>
    ),
    codeExample: `
<Ui_MockupWindow className="w-full border" bgColor="base-300">
  <div className="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
</Ui_MockupWindow>`,
  },
]
