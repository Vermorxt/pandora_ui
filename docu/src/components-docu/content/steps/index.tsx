import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { stepsCodeExamples } from './steps-code'

export const Ui_Docu_Steps: FC = props => {
  console.log('button group docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Steps', description: 'Steps container element', type: 'Component' },
      { name: 'Ui_Steps.Step', description: 'Steps item element', type: 'Component' },
      { name: 'horizontal', description: 'Steps horizontal', type: 'Modifier' },
      { name: 'vertical', description: 'Steps vertical', type: 'Modifier' },
      { name: 'primary', description: 'Step with `primary` color', type: 'Modifier' },
      { name: 'secondary', description: 'Step with `secondary` color', type: 'Modifier' },
      { name: 'accent', description: 'Step with `accent` color', type: 'Modifier' },
      { name: 'info', description: 'Step with `info` color', type: 'Modifier' },
      { name: 'success', description: 'Step with `success` color', type: 'Modifier' },
      { name: 'warning', description: 'Step with `warning` color', type: 'Modifier' },
      { name: 'error', description: 'Step with `error` color', type: 'Modifier' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Steps</h1>
      <p>Steps can be used to show a list of steps in a process.</p>

      <DocuAttributes {...{ attributes }} />

      {stepsCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
