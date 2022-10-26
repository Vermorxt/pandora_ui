import { Ui_Swap } from '@vermorxt/pandora_ui'

export const swapCodeExamples = [
  {
    id: 'swap_1',
    title: 'Swap simple',
    preview: <Ui_Swap swapOn="ON" swapOff="OFF" />,
    codeExample: `<Ui_Swap swapOn="ON" swapOff="OFF" />`,
  },
  {
    id: 'swap_2',
    title: 'Swap rotate',
    preview: <Ui_Swap swapOn="ON" swapOff="OFF" swapRotate />,
    codeExample: `<Ui_Swap swapOn="ON" swapOff="OFF" swapRotate />`,
  },
  {
    id: 'swap_3',
    title: 'Swap flip',
    preview: <Ui_Swap swapOn="ON" swapOff="OFF" swapFlip />,
    codeExample: `<Ui_Swap swapOn="ON" swapOff="OFF" swapFlip  />`,
  },
  {
    id: 'swap_4',
    title: 'Swap active',
    preview: <Ui_Swap style={{ fontSize: 32 }} swapOn="&#128514;" swapOff="&#128557;" swapActive="on" />,
    codeExample: `<Ui_Swap style={{ fontSize: 32 }} swapOn="&#128514;" swapOff="&#128557;" swapActive="on" />`,
  },
]
