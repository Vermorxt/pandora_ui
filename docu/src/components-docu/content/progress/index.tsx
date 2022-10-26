import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { progressCodeExamples } from './progress-code'

export const Ui_Docu_Progress: FC = props => {
  console.log('progress docu')

  const attributes = {
    header: ['Attributes', 'Type', '', '', 'Description'],
    values: [
      { name: 'Ui_Progress', description: 'Container element', type: 'Component' },
      { name: 'primary', description: 'Progress with `primary` color', type: 'Modifier' },
      { name: 'secondary', description: 'Progress with `secondary` color', type: 'Modifier' },
      { name: 'accent', description: 'Progress with `accent` color', type: 'Modifier' },
      { name: 'info', description: 'Progress with `info` color', type: 'Modifier' },
      { name: 'success', description: 'Progress with `success` color', type: 'Modifier' },
      { name: 'warning', description: 'Progress with `warning` color', type: 'Modifier' },
      { name: 'error', description: 'Progress with `error` color', type: 'Modifier' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Progress</h1>
      <p>Progress bar can be used to show the progress of a task or to show the passing of time.</p>

      <DocuAttributes {...{ attributes }} />

      {progressCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
