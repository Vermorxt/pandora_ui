import { OnChange } from './../../../_types/OnChange'
import { Ui_Rating } from '@vermorxt/pandora_ui'

export const ratingCodeExamples = [
  {
    id: 'rating_1',
    title: 'Rating',
    preview: <Ui_Rating name="rating" />,
    codeExample: `<Ui_Rating name="rating" />`,
  },
  {
    id: 'rating_2',
    title: 'Rating color',
    preview: <Ui_Rating color="teal" name="rating_color" />,
    codeExample: `
// available colors: https://tailwindcss.com/docs/background-color#setting-the-background-color 
// used color variant 400 - not changeable

<Ui_Rating color="teal" name="rating_color" />
`,
  },
  {
    id: 'rating_3',
    title: 'Rating half symbols',
    preview: <Ui_Rating color="blue" halfSymbol name="rating_half" />,
    codeExample: `
<Ui_Rating color="blue" halfSymbol name="rating_half" />
`,
  },
  {
    id: 'rating_4',
    title: 'Rating heart',
    preview: <Ui_Rating color="red" shape="heart" name="rating_heart" />,
    codeExample: `
<Ui_Rating color="red" shape="heart" name="rating_heart" />
`,
  },
  {
    id: 'rating_5',
    title: 'Rating size',
    preview: (
      <>
        <div className="flex w-full mb-1">
          <Ui_Rating tiny color="green" shape="heart" name="size_1" className="m-auto" />
        </div>
        <div className="flex w-full mb-1">
          <Ui_Rating small color="purple" shape="heart" name="size_2" className="m-auto" />
        </div>
        <div className="flex w-full mb-1">
          <Ui_Rating medium color="yellow" shape="heart" name="size_3" className="m-auto" />
        </div>
        <div className="flex w-full mb-1">
          <Ui_Rating large color="orange" shape="heart" name="size_4" className="m-auto" />
        </div>
      </>
    ),
    codeExample: `
<Ui_Rating tiny color="green" shape="heart" name="size_1" className="m-auto" />
<Ui_Rating small color="purple" shape="heart" name="size_2" className="m-auto" />
<Ui_Rating medium color="yellow" shape="heart" name="size_3" className="m-auto" />
<Ui_Rating large color="orange" shape="heart" name="size_4" className="m-auto" />
`,
  },
  {
    id: 'rating_6',
    title: 'Rating half defaultCheckedValue',
    preview: <Ui_Rating defaultCheckedValue={2} color="blue" name="rating_checked" />,
    codeExample: `
<Ui_Rating defaultCheckedValue={2} color="blue" name="rating_checked" />
`,
  },
  {
    id: 'rating_7',
    title: 'Rating on change callback',
    preview: (
      <Ui_Rating
        halfSymbol
        shape="heart"
        medium
        color="pink"
        name="rating_half"
        onChange={(indexValue => console.log('changed rating: ', indexValue)) as OnChange}
      />
    ),
    codeExample: `
<Ui_Rating
  halfSymbol
  shape="heart"
  medium
  color="pink"
  name="rating_half"
  onChange={(indexValue => console.log('changed rating: ', indexValue)) as OnChange}
/>
`,
  },
  {
    id: 'rating_8',
    title: 'Rating half symbols, defaultCheckedValue and on change callback',
    preview: (
      <Ui_Rating
        defaultCheckedValue={4.5}
        halfSymbol
        shape="star"
        medium
        color="orange"
        name="rating_half_heart"
        onChange={(indexValue => console.log('changed rating: ', indexValue)) as OnChange}
      />
    ),
    codeExample: `
<Ui_Rating
  defaultCheckedValue={4.5}
  halfSymbol
  shape="star"
  medium
  color="orange"
  name="rating_half_heart"
  onChange={(indexValue => console.log('changed rating: ', indexValue)) as OnChange}
/>`,
  },
  {
    id: 'rating_9',
    title: 'Rating disabled',
    preview: <Ui_Rating color="sky" defaultCheckedValue={3} disabled name="rating_disabled" />,
    codeExample: `
<Ui_Rating color="sky" defaultCheckedValue={3} disabled name="rating_disabled" />`,
  },
]
