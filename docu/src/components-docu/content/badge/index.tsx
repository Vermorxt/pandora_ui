import Code from '@/root/src/components/Code'
import { FC } from 'react'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { badgeCodeExamples } from './badge-code'

export const Ui_Docu_Badge: FC = props => {
  console.log('badge docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Badge', description: 'Badge element', type: 'Component' },
      { name: 'primary', description: 'Badge with `primary` color', type: 'Modifier' },
      { name: 'secondary', description: 'Badge with `secondary` color', type: 'Modifier' },
      { name: 'accent', description: 'Badge with `accent` color', type: 'Modifier' },
      { name: 'info', description: 'Badge with `info` color', type: 'Modifier' },
      { name: 'success', description: 'Badge with `success` color', type: 'Modifier' },
      { name: 'warning', description: 'Badge with `warning` color', type: 'Modifier' },
      { name: 'error', description: 'Badge with `error` color', type: 'Modifier' },
      { name: 'ghost', description: 'Badge with ghost style', type: 'Modifier' },
      { name: 'outline', description: 'Transparent Badge with colored border', type: 'Modifier' },
      { name: 'large', description: 'Large badge', type: 'Responsive' },
      { name: 'medium', description: 'Medium badge (default)', type: 'Responsive' },
      { name: 'small', description: 'Small badge', type: 'Responsive' },
      { name: 'tiny', description: 'Extra small badge', type: 'Responsive' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Badge</h1>
      <p>Badges are used to inform user of the status of specific data.</p>

      <DocuAttributes {...{ attributes }} />

      {badgeCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
