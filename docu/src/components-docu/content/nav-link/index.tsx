import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { navLinkCodeExamples } from './navlink-code'

export const Ui_Docu_NavLink: FC = props => {
  console.log('NavLink docu')

  const attributes = {
    header: ['Attributes', 'Type', '', '', 'Description'],
    values: [
      { name: 'Ui_NavLink', description: 'NavLink element', type: 'Component' },
      { name: 'href', description: 'Path for NavLink element', type: 'Modifier' },
      { name: 'skipScrollTop', description: 'If set, scroll top is skipped (default: false)', type: 'Modifier' },
      {
        name: 'useLocationReplace',
        description: 'Prevent reload component and using window.location.replace(href) (default: false)',
        type: 'Modifier',
      },
    ],
  }

  return (
    <DocuWrapper>
      <h1>NavLink</h1>
      <p>NavLink is component wrapper for anchor elements.</p>

      <DocuAttributes {...{ attributes }} />

      {navLinkCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
