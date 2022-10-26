import { Ui_Button, Ui_Carousel } from '@vermorxt/pandora_ui'

const carouselItems = [
  'https://api.lorem.space/image/burger?w=400&h=300&hash=8B7BCDC2',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=500B67FB',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=A89D0DE6',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=225E6693',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=9D9539E7',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=BDC01094',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=7F5AE56A',
]

const carouselItems2 = [
  'https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2',
  'https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB',
  'https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6',
  'https://api.lorem.space/image/car?w=800&h=200&hash=225E6693',
]

export const carouselCodeExamples = [
  {
    id: 'carousel_1',
    title: 'Snap to start (default)',
    preview: (
      <Ui_Carousel rounded>
        {carouselItems.map((item, index) => (
          <Ui_Carousel.Item key={index}>
            <img src={item} alt="Burger" />
          </Ui_Carousel.Item>
        ))}
      </Ui_Carousel>
    ),
    codeExample: `
const carouselItems = [
  'https://api.lorem.space/image/burger?w=400&h=300&hash=8B7BCDC2',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=500B67FB',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=A89D0DE6',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=225E6693',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=9D9539E7',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=BDC01094',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=7F5AE56A',
]

<Ui_Carousel rounded>
  {carouselItems.map((item, index) => (
    <Ui_Carousel.Item key={index}>
      <img src={item} alt="Burger" />
    </Ui_Carousel.Item>
  ))}
</Ui_Carousel>`,
  },
  {
    id: 'carousel_2',
    title: 'Snap to center',
    preview: (
      <Ui_Carousel center rounded>
        {carouselItems.map((item, index) => (
          <Ui_Carousel.Item key={index}>
            <img src={item} alt="Burger" />
          </Ui_Carousel.Item>
        ))}
      </Ui_Carousel>
    ),
    codeExample: `
const carouselItems = [
  'https://api.lorem.space/image/burger?w=400&h=300&hash=8B7BCDC2',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=500B67FB',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=A89D0DE6',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=225E6693',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=9D9539E7',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=BDC01094',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=7F5AE56A',
]

<Ui_Carousel center rounded>
  {carouselItems.map((item, index) => (
    <Ui_Carousel.Item key={index}>
      <img src={item} alt="Burger" />
    </Ui_Carousel.Item>
  ))}
</Ui_Carousel>`,
  },
  {
    id: 'carousel_3',
    title: 'Snap to end',
    preview: (
      <Ui_Carousel end rounded>
        {carouselItems.map((item, index) => (
          <Ui_Carousel.Item key={index}>
            <img src={item} alt="Burger" />
          </Ui_Carousel.Item>
        ))}
      </Ui_Carousel>
    ),
    codeExample: `
const carouselItems = [
  'https://api.lorem.space/image/burger?w=400&h=300&hash=8B7BCDC2',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=500B67FB',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=A89D0DE6',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=225E6693',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=9D9539E7',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=BDC01094',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=7F5AE56A',
]

<Ui_Carousel end rounded>
  {carouselItems.map((item, index) => (
    <Ui_Carousel.Item key={index}>
      <img src={item} alt="Burger" />
    </Ui_Carousel.Item>
  ))}
</Ui_Carousel>`,
  },
  {
    id: 'carousel_4',
    title: 'Carousel with full width items',
    preview: (
      <Ui_Carousel rounded className="w-64">
        {carouselItems.map((item, index) => (
          <Ui_Carousel.Item key={index} full>
            <img src={item} alt="Burger" />
          </Ui_Carousel.Item>
        ))}
      </Ui_Carousel>
    ),
    codeExample: `
const carouselItems = [
  'https://api.lorem.space/image/burger?w=400&h=300&hash=8B7BCDC2',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=500B67FB',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=A89D0DE6',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=225E6693',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=9D9539E7',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=BDC01094',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=7F5AE56A',
]

<Ui_Carousel rounded className="w-64">
  {carouselItems.map((item, index) => (
    <Ui_Carousel.Item key={index} full>
      <img src={item} alt="Burger" />
    </Ui_Carousel.Item>
  ))}
</Ui_Carousel>`,
  },
  {
    id: 'carousel_5',
    title: 'Vertical carousel',
    preview: (
      <Ui_Carousel vertical rounded className="h-96">
        {carouselItems.map((item, index) => (
          <Ui_Carousel.Item key={index} fullHeight>
            <img src={item} alt="Burger" />
          </Ui_Carousel.Item>
        ))}
      </Ui_Carousel>
    ),
    codeExample: `
const carouselItems = [
  'https://api.lorem.space/image/burger?w=400&h=300&hash=8B7BCDC2',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=500B67FB',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=A89D0DE6',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=225E6693',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=9D9539E7',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=BDC01094',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=7F5AE56A',
]

<Ui_Carousel vertical rounded className="h-96">
  {carouselItems.map((item, index) => (
    <Ui_Carousel.Item key={index} fullHeight>
      <img src={item} alt="Burger" />
    </Ui_Carousel.Item>
  ))}
</Ui_Carousel>`,
  },
  {
    id: 'carousel_6',
    title: 'Carousel with half width items',
    preview: (
      <Ui_Carousel rounded className=" w-96">
        {carouselItems.map((item, index) => (
          <Ui_Carousel.Item key={index} halfWidth>
            <img src={item} alt="Burger" className="w-full" />
          </Ui_Carousel.Item>
        ))}
      </Ui_Carousel>
    ),
    codeExample: `
const carouselItems = [
  'https://api.lorem.space/image/burger?w=400&h=300&hash=8B7BCDC2',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=500B67FB',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=A89D0DE6',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=225E6693',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=9D9539E7',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=BDC01094',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=7F5AE56A',
]

<Ui_Carousel rounded className=" w-96">
  {carouselItems.map((item, index) => (
    <Ui_Carousel.Item key={index} halfWidth>
      <img src={item} alt="Burger" className="w-full" />
    </Ui_Carousel.Item>
  ))}
</Ui_Carousel>`,
  },
  {
    id: 'carousel_7',
    title: 'Full-bleed carousel',
    preview: (
      <Ui_Carousel center rounded className="max-w-lg space-x-4 p-4 bg-neutral rounded-box">
        {carouselItems.map((item, index) => (
          <Ui_Carousel.Item key={index}>
            <img src={item} alt="Burger" className="rounded-box" />
          </Ui_Carousel.Item>
        ))}
      </Ui_Carousel>
    ),
    codeExample: `
const carouselItems = [
  'https://api.lorem.space/image/burger?w=400&h=300&hash=8B7BCDC2',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=500B67FB',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=A89D0DE6',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=225E6693',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=9D9539E7',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=BDC01094',
  'https://api.lorem.space/image/burger?w=400&h=300&hash=7F5AE56A',
]

<Ui_Carousel center rounded className="max-w-lg space-x-4 p-4 bg-neutral rounded-box">
  {carouselItems.map((item, index) => (
    <Ui_Carousel.Item key={index}>
      <img src={item} alt="Burger" className="rounded-box" />
    </Ui_Carousel.Item>
  ))}
</Ui_Carousel>`,
  },
  {
    id: 'carousel_8',
    title: 'Carousel with indicator buttons',
    description:
      'This slider works with anchor links so the browser will scroll vertically to the image when you click buttons.',
    preview: (
      <>
        <Ui_Carousel id={'carousel_8'} full>
          {carouselItems2.map((item, index) => (
            <Ui_Carousel.Item key={index} full id={`carousel_8_${index}`}>
              <img src={item} alt="Burger" className="w-full" />
            </Ui_Carousel.Item>
          ))}
        </Ui_Carousel>
        <Ui_Carousel.Navbar>
          {carouselItems2.map((item, index) => (
            <Ui_Button
              key={index}
              tiny
              onClick={() =>
                document
                  ?.getElementById(`carousel_8_${index}`)
                  ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
              }
            >
              {index}
            </Ui_Button>
          ))}
        </Ui_Carousel.Navbar>
      </>
    ),
    codeExample: `
const carouselItems2 = [
  'https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2',
  'https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB',
  'https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6',
  'https://api.lorem.space/image/car?w=800&h=200&hash=225E6693',
]

<Ui_Carousel id={'carousel_8'} full>
  {carouselItems2.map((item, index) => (
    <Ui_Carousel.Item key={index} full id={\`carousel_8_${'index'}\`}>
      <img src={item} alt="Burger" className="w-full" />
    </Ui_Carousel.Item>
  ))}
</Ui_Carousel>
<Ui_Carousel.Navbar>
  {carouselItems2.map((item, index) => (
    <Ui_Button
      key={index}
      tiny
      onClick={() =>
        document
          ?.getElementById('carousel_8_${`index`}')
          ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    >
      {index}
    </Ui_Button>
  ))}
</Ui_Carousel.Navbar>`,
  },
  {
    id: 'carousel_9',
    title: 'Carousel with next/prev buttons',
    description:
      'This slider works with anchor links so the browser will scroll vertically to the image when you click buttons.',
    preview: (
      <Ui_Carousel id={'carousel_9'} full>
        {carouselItems2.map((item, index) => (
          <Ui_Carousel.Item relative key={index} full id={`carousel_9_${index}`}>
            <img src={item} alt="Burger" className="w-full" />
            <Ui_Carousel.ArrowNavigation index={index} usedId={'carousel_9'} itemLength={carouselItems2.length} />
          </Ui_Carousel.Item>
        ))}
      </Ui_Carousel>
    ),
    codeExample: `
const carouselItems2 = [
  'https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2',
  'https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB',
  'https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6',
  'https://api.lorem.space/image/car?w=800&h=200&hash=225E6693',
]

<Ui_Carousel id={'carousel_9'} full>
  {carouselItems2.map((item, index) => (
    <Ui_Carousel.Item relative key={index} full id={\`carousel_9_${'index'}\`}>
      <img src={item} alt="Burger" className="w-full" />
      <Ui_Carousel.ArrowNavigation index={index} usedId={'carousel_9'} itemLength={carouselItems2.length} />
    </Ui_Carousel.Item>
  ))}
</Ui_Carousel>`,
  },
]
