import { Ui_Progress } from '@vermorxt/pandora_ui'

export const progressCodeExamples = [
  {
    id: 'progress_1',
    title: 'Progress default',
    preview: (
      <div>
        <Ui_Progress value="10" max="100"></Ui_Progress>
        <Ui_Progress value="40" max="100"></Ui_Progress>
        <Ui_Progress value="70" max="100"></Ui_Progress>
        <Ui_Progress value="100" max="100"></Ui_Progress>
      </div>
    ),
    codeExample: `<Ui_Button primary>Primary</Ui_Button>`,
  },
  {
    id: 'progress_2',
    title: 'Progress primary color',
    preview: (
      <div>
        <Ui_Progress value="10" max="100" primary></Ui_Progress>
        <Ui_Progress value="40" max="100" primary></Ui_Progress>
        <Ui_Progress value="70" max="100" primary></Ui_Progress>
        <Ui_Progress value="100" max="100" primary></Ui_Progress>
      </div>
    ),
    codeExample: `<Ui_Button primary>Primary</Ui_Button>`,
  },
  {
    id: 'progress_3',
    title: 'Progress secondary color',
    preview: (
      <div>
        <Ui_Progress value="10" max="100" secondary></Ui_Progress>
        <Ui_Progress value="40" max="100" secondary></Ui_Progress>
        <Ui_Progress value="70" max="100" secondary></Ui_Progress>
        <Ui_Progress value="100" max="100" secondary></Ui_Progress>
      </div>
    ),
    codeExample: `<Ui_Button primary>Primary</Ui_Button>`,
  },
  {
    id: 'progress_4',
    title: 'Progress accent color',
    preview: (
      <div>
        <Ui_Progress value="10" max="100" accent></Ui_Progress>
        <Ui_Progress value="40" max="100" accent></Ui_Progress>
        <Ui_Progress value="70" max="100" accent></Ui_Progress>
        <Ui_Progress value="100" max="100" accent></Ui_Progress>
      </div>
    ),
    codeExample: `<Ui_Button primary>Primary</Ui_Button>`,
  },
  {
    id: 'progress_5',
    title: 'Progress success color',
    preview: (
      <div>
        <Ui_Progress value="10" max="100" success></Ui_Progress>
        <Ui_Progress value="40" max="100" success></Ui_Progress>
        <Ui_Progress value="70" max="100" success></Ui_Progress>
        <Ui_Progress value="100" max="100" success></Ui_Progress>
      </div>
    ),
    codeExample: `<Ui_Button primary>Primary</Ui_Button>`,
  },
  {
    id: 'progress_6',
    title: 'Progress info color',
    preview: (
      <div>
        <Ui_Progress value="10" max="100" info></Ui_Progress>
        <Ui_Progress value="40" max="100" info></Ui_Progress>
        <Ui_Progress value="70" max="100" info></Ui_Progress>
        <Ui_Progress value="100" max="100" info></Ui_Progress>
      </div>
    ),
    codeExample: `<Ui_Button primary>Primary</Ui_Button>`,
  },
  {
    id: 'progress_7',
    title: 'Progress warning color',
    preview: (
      <div>
        <Ui_Progress value="10" max="100" warning></Ui_Progress>
        <Ui_Progress value="40" max="100" warning></Ui_Progress>
        <Ui_Progress value="70" max="100" warning></Ui_Progress>
        <Ui_Progress value="100" max="100" warning></Ui_Progress>
      </div>
    ),
    codeExample: `<Ui_Button primary>Primary</Ui_Button>`,
  },
  {
    id: 'progress_8',
    title: 'Progress error color',
    preview: (
      <div>
        <Ui_Progress value="10" max="100" error></Ui_Progress>
        <Ui_Progress value="40" max="100" error></Ui_Progress>
        <Ui_Progress value="70" max="100" error></Ui_Progress>
        <Ui_Progress value="100" max="100" error></Ui_Progress>
      </div>
    ),
    codeExample: `<Ui_Button primary>Primary</Ui_Button>`,
  },
]
