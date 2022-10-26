import { Ui_Select } from '@vermorxt/pandora_ui'

const options = ['Homer', 'Marge', 'Lisa', 'Bart', 'Maggie']

export const selectCodeExamples = [
  {
    id: 'select_1',
    title: 'Select sizes',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_Select large options={options} style={{ margin: '0 auto 20px' }} />
        <Ui_Select medium options={options} style={{ margin: '0 auto 20px' }} />
        <Ui_Select small options={options} style={{ margin: '0 auto 20px' }} />
        <Ui_Select tiny options={options} style={{ margin: '0 auto 20px' }} />
      </div>
    ),
    codeExample: `
const options = ['Homer', 'Marge', 'Lisa', 'Bart', 'Maggie']

<div className="form-control w-full max-w-sm m-auto">
  <Ui_Select large options={options} style={{ margin: '0 auto 20px' }} />
  <Ui_Select medium options={options} style={{ margin: '0 auto 20px' }} />
  <Ui_Select small options={options} style={{ margin: '0 auto 20px' }} />
  <Ui_Select tiny options={options} style={{ margin: '0 auto 20px' }} />
</div>`,
  },
  {
    id: 'select_2',
    title: 'Select bordered',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_Select bordered options={options} style={{ margin: '0 auto 20px' }} />
      </div>
    ),
    codeExample: `
const options = ['Homer', 'Marge', 'Lisa', 'Bart', 'Maggie']

<div className="form-control w-full max-w-sm m-auto">
  <Ui_Select bordered options={options} style={{ margin: '0 auto 20px' }} />
</div>`,
  },
  {
    id: 'select_3',
    title: 'Select options label',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_Select
          bordered
          optionLabel="Select your favorite Simpson"
          options={options}
          style={{ margin: '0 auto 20px' }}
        />
      </div>
    ),
    codeExample: `
const options = ['Homer', 'Marge', 'Lisa', 'Bart', 'Maggie']

<div className="form-control w-full max-w-sm m-auto">
  <Ui_Select
    bordered
    optionLabel="Select your favorite Simpson"
    options={options}
    style={{ margin: '0 auto 20px' }}
/>
</div>`,
  },
  {
    id: 'select_4',
    title: 'Select disabled',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_Select
          disabled
          optionLabel="Can't touch this"
          bordered
          options={options}
          style={{ margin: '0 auto 20px' }}
        />
      </div>
    ),
    codeExample: `
const options = ['Homer', 'Marge', 'Lisa', 'Bart', 'Maggie']

<div className="form-control w-full max-w-sm m-auto">
  <Ui_Select
    disabled
    optionLabel="Can't touch this"
    bordered
    options={options}
    style={{ margin: '0 auto 20px' }}
  />
</div>`,
  },
  {
    id: 'select_5',
    title: 'Select disabled options',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_Select disabledOptions={[1, 3]} bordered options={options} style={{ margin: '0 auto 20px' }} />
      </div>
    ),
    codeExample: `
const options = ['Homer', 'Marge', 'Lisa', 'Bart', 'Maggie']

<div className="form-control w-full max-w-sm m-auto">
  <Ui_Select disabledOptions={[1, 3]} bordered options={options} style={{ margin: '0 auto 20px' }} />
</div>`,
  },
  {
    id: 'select_6',
    title: 'Select ghost',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_Select ghost options={options} style={{ margin: '0 auto 20px' }} />
      </div>
    ),
    codeExample: `
const options = ['Homer', 'Marge', 'Lisa', 'Bart', 'Maggie']

<div className="form-control w-full max-w-sm m-auto">
  <Ui_Select ghost options={options} style={{ margin: '0 auto 20px' }} />
</div>`,
  },
  {
    id: 'select_7',
    title: 'Select label and altLabel',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_Select
          label="Simpsons"
          altLabel="This is a bottom label with some content ..."
          bordered
          options={options}
        />
      </div>
    ),
    codeExample: `
const options = ['Homer', 'Marge', 'Lisa', 'Bart', 'Maggie']

<div className="form-control w-full max-w-sm m-auto">
  <Ui_Select
    label="Simpsons"
    altLabel="This is a bottom label with some content ..."
    bordered
    options={options}
  />
</div>`,
  },
  {
    id: 'select_8',
    title: 'Select colors',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_Select primary options={options} style={{ margin: '0 auto 20px' }} />
        <Ui_Select secondary options={options} style={{ margin: '0 auto 20px' }} />
        <Ui_Select accent options={options} style={{ margin: '0 auto 20px' }} />
        <Ui_Select info options={options} style={{ margin: '0 auto 20px' }} />
        <Ui_Select success options={options} style={{ margin: '0 auto 20px' }} />
        <Ui_Select warning options={options} style={{ margin: '0 auto 20px' }} />
        <Ui_Select error options={options} style={{ margin: '0 auto 20px' }} />
      </div>
    ),
    codeExample: `
const options = ['Homer', 'Marge', 'Lisa', 'Bart', 'Maggie']

<div className="form-control w-full max-w-sm m-auto">
  <Ui_Select primary options={options} style={{ margin: '0 auto 20px' }} />
  <Ui_Select secondary options={options} style={{ margin: '0 auto 20px' }} />
  <Ui_Select accent options={options} style={{ margin: '0 auto 20px' }} />
  <Ui_Select info options={options} style={{ margin: '0 auto 20px' }} />
  <Ui_Select success options={options} style={{ margin: '0 auto 20px' }} />
  <Ui_Select warning options={options} style={{ margin: '0 auto 20px' }} />
  <Ui_Select error options={options} style={{ margin: '0 auto 20px' }} />
</div>`,
  },
  {
    id: 'select_9',
    title: 'Select options as children',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_Select bordered defaultValue="Pick a pizza">
          <option disabled>Pick a pizza</option>
          <option>Cheese</option>
          <option>Veggie</option>
          <option>Pepperoni</option>
          <option>Margherita</option>
          <option>Hawaiian</option>
        </Ui_Select>
      </div>
    ),
    codeExample: `
<Ui_Select bordered defaultValue="Pick a pizza">
  <option disabled>
    Pick a pizza
  </option>
  <option>Cheese</option>
  <option>Veggie</option>
  <option>Pepperoni</option>
  <option>Margherita</option>
  <option>Hawaiian</option>
</Ui_Select>`,
  },
  {
    id: 'select_10',
    title: 'Select on change callback',
    preview: (
      <div className="form-control w-full max-w-sm m-auto">
        <Ui_Select
          bordered
          options={options}
          style={{ margin: '0 auto 20px' }}
          onChange={(e: any) => console.log('onChange: ', (e?.target as HTMLSelectElement)?.value)}
        />
      </div>
    ),
    codeExample: `
const options = ['Homer', 'Marge', 'Lisa', 'Bart', 'Maggie']

<div className="form-control w-full max-w-sm m-auto">
  <Ui_Select
    bordered
    options={options}
    style={{ margin: '0 auto 20px' }}
    onChange={e => console.log('onChange: ', (e?.target as HTMLSelectElement)?.value)}
  />
</div>`,
  },
]
