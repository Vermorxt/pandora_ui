import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { radialProgressCodeExamples } from './radial-progress-code'

export const Ui_Docu_RadialProgress: FC = props => {
  console.log('radial progress docu')

  const attributes = {
    header: ['Attributes', 'Type', '', '', 'Description'],
    values: [
      { name: 'Ui_RadialProgress', description: 'Container element', type: 'Component' },
      { name: 'value', description: 'Progress value', type: 'Modifier' },
      { name: 'size', description: 'Progress size', type: 'Modifier', values: 'px, rem, %' },
      { name: 'thickness', description: 'Progress size', type: 'Modifier', values: 'px, rem, %' },
      { name: 'primary', description: 'Progress with `primary` color', type: 'Modifier' },
      { name: 'secondary', description: 'Progress with `secondary` color', type: 'Modifier' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Radial progress</h1>
      <p>
        Radial progress can be used to show the progress of a task or to show the passing of time. Radial progress needs
        &apos;value&apos; variable to work. To change the size, use &apos;size&apos; variable which has a default value
        of 4rem. To change the thickness, use &apos;thickness&apos; variable which is 10% of the size by default.
      </p>

      <DocuAttributes {...{ attributes }} />

      {radialProgressCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
