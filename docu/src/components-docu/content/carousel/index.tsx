import Code from '@/root/src/components/Code'
import { FC } from 'react'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { carouselCodeExamples } from './carousel-code'

export const Ui_Docu_Carousel: FC = props => {
  console.log('carousel docu')

  const attributes = {
    header: ['Attributes', 'Type', 'Target', 'Values', 'Description'],
    values: [
      { name: 'Ui_Carousel', description: 'Container element', type: 'Component', target: '' },
      { name: 'Ui_Carousel.Item', description: 'Carousel item element', type: 'Component', target: 'Ui_Carousel' },
      {
        name: 'Ui_Carousel.ArrowNavigation',
        description: 'Carousel arrow navigation element',
        type: 'Component',
        target: 'Ui_Carousel.Item',
      },
      { name: 'Ui_Carousel.Navbar', description: 'Carousel navbar bottom element', type: 'Component', target: '' },
      { name: 'rounded', description: 'Carousel border radius', type: 'Modifier' },
      { name: 'center', description: 'Carousel center items', type: 'Modifier' },
      { name: 'end', description: 'Carousel items aligned on end', type: 'Modifier' },
      {
        name: 'full',
        description: 'Carousel items full width',
        type: 'Modifier',
        target: 'Ui_Carousel.Item',
      },
      {
        name: 'vertical',
        description: 'Carousel items vertical scroll',
        type: 'Modifier',
        target: 'Ui_Carousel',
      },
      {
        name: 'halfWidth',
        description: 'Carousel items with half width',
        type: 'Modifier',
        target: 'Ui_Carousel.Item',
      },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Carousel</h1>
      <p>Carousel show images or content in a scrollable area.</p>

      <DocuAttributes {...{ attributes }} />

      {carouselCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
