import { Ui_Stack, Ui_Card } from '@vermorxt/pandora_ui'

export const stackCodeExamples = [
  {
    id: 'stack',
    title: 'Without stack',
    preview: (
      <div>
        <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div>
        <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
        <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
      </div>
    ),
    codeExample: `<Ui_Stack>Stack</Ui_Stack>`,
  },
  {
    id: 'stack_1',
    title: 'Stack simple',
    preview: (
      <Ui_Stack>
        <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div>
        <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
        <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
      </Ui_Stack>
    ),
    codeExample: `<Ui_Stack>Stack</Ui_Stack>`,
  },
  {
    id: 'stack_2',
    title: 'Stack images',
    preview: (
      <Ui_Stack>
        <img src="https://api.lorem.space/image/face?w=112&h=112&hash=8B7BCDC2" alt="Image 1" className="rounded" />
        <img src="https://api.lorem.space/image/face?w=112&h=112&hash=500B67FB" alt="Image 2" className="rounded" />
        <img src="https://api.lorem.space/image/face?w=112&h=112&hash=A89D0DE6" alt="Image 3" className="rounded" />
      </Ui_Stack>
    ),
    codeExample: `<Ui_Stack>Stack</Ui_Stack>`,
  },
  {
    id: 'stack_3',
    title: 'Stack cards',
    preview: (
      <Ui_Stack>
        <Ui_Card className="text-center border border-base-content w-36">
          <Ui_Card.Body className="card-body">A</Ui_Card.Body>
        </Ui_Card>
        <Ui_Card className="text-center border border-base-content w-36">
          <Ui_Card.Body className="card-body">B</Ui_Card.Body>
        </Ui_Card>
        <Ui_Card className="text-center border border-base-content w-36">
          <Ui_Card.Body className="card-body">C</Ui_Card.Body>
        </Ui_Card>
      </Ui_Stack>
    ),
    codeExample: `<Ui_Stack>Stack</Ui_Stack>`,
  },
  {
    id: 'stack_4',
    title: 'Stack cards with shadow',
    preview: (
      <Ui_Stack>
        <Ui_Card className="text-center w-36">
          <Ui_Card.Body className="card-body">A</Ui_Card.Body>
        </Ui_Card>
        <Ui_Card className="text-center w-36">
          <Ui_Card.Body className="card-body">B</Ui_Card.Body>
        </Ui_Card>
        <Ui_Card className="text-center w-36">
          <Ui_Card.Body className="card-body">C</Ui_Card.Body>
        </Ui_Card>
      </Ui_Stack>
    ),
    codeExample: `<Ui_Stack>Stack</Ui_Stack>`,
  },
  {
    id: 'stack_5',
    title: 'Stack cards with background color',
    preview: (
      <Ui_Stack>
        <Ui_Card bgNeutral w96 className="text-center">
          <Ui_Card.Body className="card-body">A</Ui_Card.Body>
        </Ui_Card>
        <Ui_Card bgSecondary w96 className="text-center">
          <Ui_Card.Body className="card-body">B</Ui_Card.Body>
        </Ui_Card>
        <Ui_Card bgPrimary w96 className="text-center">
          <Ui_Card.Body className="card-body">C</Ui_Card.Body>
        </Ui_Card>
      </Ui_Stack>
    ),
    codeExample: `<Ui_Stack>Stack</Ui_Stack>`,
  },
]
