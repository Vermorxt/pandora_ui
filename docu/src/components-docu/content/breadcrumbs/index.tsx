import Code from '@/root/src/components/Code'
import { FC } from 'react'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'

import { breadcrumbsCodeExamples } from './breadcrumbs-code'

export const Ui_Breadcrumbs_Docu: FC = props => {
  console.log('breadcrumbs docu')

  const attributes = {
    header: ['Attributes', 'Type', 'Target', 'Values', 'Description'],
    values: [{ name: 'Ui_Breadcrumbs', description: 'Breadcrumbs element', type: 'Component' }],
  }

  return (
    <DocuWrapper>
      <h1>Breadcrumbs</h1>
      <p>Breadcrumbs helps users to navigate through the website.</p>

      <DocuAttributes {...{ attributes }} />

      {breadcrumbsCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
