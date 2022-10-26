import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { tabsCodeExamples } from './tabs-code'

export const Ui_Docu_Tabs: FC = props => {
  console.log('tabs docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Tabs', description: 'Tabs container element', type: 'Component' },
      { name: 'Ui_Tabs.Tab', description: 'Tabs item element', type: 'Component' },
      { name: 'boxed', description: 'Tabs boxed', type: 'Modifier', target: 'Ui_Tabs' },
      { name: 'lifted', description: 'Tabs lifted', type: 'Modifier', target: 'Ui_Tabs.Tab' },
      { name: 'bordered', description: 'Tabs bordered', type: 'Modifier', target: 'Ui_Tabs.Tab' },
      { name: 'large', description: 'Large tabs', type: 'Responsive' },
      { name: 'medium', description: 'Medium tabs (default)', type: 'Responsive' },
      { name: 'small', description: 'Small tabs', type: 'Responsive' },
      { name: 'tiny', description: 'Extra small tabs', type: 'Responsive' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Tabs</h1>
      <p>Tabs can be used to show a list of links in a tabbed format.</p>

      <DocuAttributes {...{ attributes }} />

      {tabsCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
