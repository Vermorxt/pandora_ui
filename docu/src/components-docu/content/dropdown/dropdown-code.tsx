import { defaultUlMenuClassNames } from '@/root/src/components/LanguageSelector'
import { InformationCircleIcon } from '@heroicons/react/solid'
import { Ui_Dropdown } from '@vermorxt/pandora_ui'

const dummyListItems = (
  <ul className={defaultUlMenuClassNames}>
    <li>
      <a>Item 1</a>
    </li>
    <li>
      <a>Item 2</a>
    </li>
  </ul>
)

const dummyListItemString = `const dummyListItems = (
<ul className="menu menu-compact p-4">
  <li>
    <a>Item 1</a>
  </li>
  <li>
    <a>Item 2</a>
  </li>
</ul>
)`

const classNameOnlyForCodePreviewBottomMargin = 'mb-32'
const classNameOnlyForCodePreviewTopMargin = 'mt-32'

export const dropdownCodeExamples = [
  {
    id: 'dropdown',
    title: 'Dropdown',
    preview: (
      <>
        <Ui_Dropdown className={classNameOnlyForCodePreviewBottomMargin}>
          <Ui_Dropdown.Label tabIndex={0} className="btn m-1">
            Click
          </Ui_Dropdown.Label>
          <Ui_Dropdown.Content className="w-52">{dummyListItems}</Ui_Dropdown.Content>
        </Ui_Dropdown>
      </>
    ),
    codeExample: `${dummyListItemString}

<Ui_Dropdown>
  <Ui_Dropdown.Label tabIndex={0} className="btn m-1">Label</Ui_Dropdown.Label>
  <Ui_Dropdown.Content className="w-52">
    {dummyListItems}
  </Ui_Dropdown.Content>
</Ui_Dropdown>`,
  },
  {
    id: 'dropdown-short',
    title: 'Dropdown short code',
    preview: <Ui_Dropdown className={classNameOnlyForCodePreviewBottomMargin} label="Click" content={dummyListItems} />,
    codeExample: `${dummyListItemString}

<Ui_Dropdown label="Click" content={dummyListItems}
/>`,
  },
  {
    id: 'dropdown-colors',
    title: 'Dropdown colors',
    preview: (
      <>
        <Ui_Dropdown
          primary
          className={classNameOnlyForCodePreviewBottomMargin}
          label="Click"
          content={dummyListItems}
        />
        <Ui_Dropdown
          secondary
          className={classNameOnlyForCodePreviewBottomMargin}
          label="Click"
          content={dummyListItems}
        />
        <Ui_Dropdown
          accent
          className={classNameOnlyForCodePreviewBottomMargin}
          label="Click"
          content={dummyListItems}
        />
        <Ui_Dropdown ghost className={classNameOnlyForCodePreviewBottomMargin} label="Click" content={dummyListItems} />
        <Ui_Dropdown link className={classNameOnlyForCodePreviewBottomMargin} label="Click" content={dummyListItems} />
        <Ui_Dropdown info className={classNameOnlyForCodePreviewBottomMargin} label="Click" content={dummyListItems} />
        <Ui_Dropdown
          success
          className={classNameOnlyForCodePreviewBottomMargin}
          label="Click"
          content={dummyListItems}
        />
        <Ui_Dropdown
          warning
          className={classNameOnlyForCodePreviewBottomMargin}
          label="Click"
          content={dummyListItems}
        />
        <Ui_Dropdown
          error
          end
          className={classNameOnlyForCodePreviewBottomMargin}
          label="Click"
          content={dummyListItems}
        />
      </>
    ),
    codeExample: `${dummyListItemString}

<Ui_Dropdown primary label="Click" content={dummyListItems} />
<Ui_Dropdown secondary label="Click" content={dummyListItems} />
<Ui_Dropdown accent label="Click" content={dummyListItems} />
<Ui_Dropdown ghost label="Click" content={dummyListItems} />
<Ui_Dropdown link label="Click" content={dummyListItems} />
<Ui_Dropdown info label="Click" content={dummyListItems} />
<Ui_Dropdown success label="Click" content={dummyListItems} />
<Ui_Dropdown warning label="Click" content={dummyListItems} />
<Ui_Dropdown error end label="Click" content={dummyListItems} />`,
  },
  {
    id: 'dropdown-outline',
    title: 'Dropdown outline',
    preview: (
      <>
        <Ui_Dropdown
          primary
          outline
          className={classNameOnlyForCodePreviewBottomMargin}
          label="Click"
          content={dummyListItems}
        />
        <Ui_Dropdown
          secondary
          outline
          className={classNameOnlyForCodePreviewBottomMargin}
          label="Click"
          content={dummyListItems}
        />
        <Ui_Dropdown
          accent
          outline
          className={classNameOnlyForCodePreviewBottomMargin}
          label="Click"
          content={dummyListItems}
        />
        <Ui_Dropdown
          ghost
          outline
          className={classNameOnlyForCodePreviewBottomMargin}
          label="Click"
          content={dummyListItems}
        />
        <Ui_Dropdown
          link
          outline
          className={classNameOnlyForCodePreviewBottomMargin}
          label="Click"
          content={dummyListItems}
        />
        <Ui_Dropdown
          info
          outline
          className={classNameOnlyForCodePreviewBottomMargin}
          label="Click"
          content={dummyListItems}
        />
        <Ui_Dropdown
          success
          outline
          className={classNameOnlyForCodePreviewBottomMargin}
          label="Click"
          content={dummyListItems}
        />
        <Ui_Dropdown
          warning
          outline
          className={classNameOnlyForCodePreviewBottomMargin}
          label="Click"
          content={dummyListItems}
        />
        <Ui_Dropdown
          error
          outline
          end
          className={classNameOnlyForCodePreviewBottomMargin}
          label="Click"
          content={dummyListItems}
        />
      </>
    ),
    codeExample: `${dummyListItemString}

<Ui_Dropdown primary outline label="Click" content={dummyListItems} />
<Ui_Dropdown secondary outline label="Click" content={dummyListItems} />
<Ui_Dropdown accent outline label="Click" content={dummyListItems} />
<Ui_Dropdown ghost outline label="Click" content={dummyListItems} />
<Ui_Dropdown link outline label="Click" content={dummyListItems} />
<Ui_Dropdown info outline label="Click" content={dummyListItems} />
<Ui_Dropdown success outline label="Click" content={dummyListItems} />
<Ui_Dropdown warning outline label="Click" content={dummyListItems} />
<Ui_Dropdown error outline end label="Click" content={dummyListItems} />`,
  },
  {
    id: 'dropdown-size',
    title: 'Dropdown size',
    preview: (
      <>
        <Ui_Dropdown large className={classNameOnlyForCodePreviewBottomMargin} label="Click" content={dummyListItems} />
        <Ui_Dropdown
          medium
          className={classNameOnlyForCodePreviewBottomMargin}
          label="Click"
          content={dummyListItems}
        />
        <Ui_Dropdown small className={classNameOnlyForCodePreviewBottomMargin} label="Click" content={dummyListItems} />
        <Ui_Dropdown tiny className={classNameOnlyForCodePreviewBottomMargin} label="Click" content={dummyListItems} />
      </>
    ),
    codeExample: `${dummyListItemString}

<Ui_Dropdown large label="Click" content={dummyListItems} />
<Ui_Dropdown medium label="Click" content={dummyListItems} />
<Ui_Dropdown small label="Click" content={dummyListItems} />
<Ui_Dropdown tiny label="Click" content={dummyListItems} />
`,
  },
  {
    id: 'dropdown-position',
    title: 'Dropdown content position',
    preview: (
      <>
        <Ui_Dropdown
          left
          hover
          className={`${classNameOnlyForCodePreviewBottomMargin} ${classNameOnlyForCodePreviewTopMargin}`}
          label="Left"
          content={dummyListItems}
        />
        <Ui_Dropdown
          right
          hover
          className={`${classNameOnlyForCodePreviewBottomMargin} ${classNameOnlyForCodePreviewTopMargin}`}
          label="Right"
          content={dummyListItems}
        />
        <Ui_Dropdown
          top
          hover
          className={`${classNameOnlyForCodePreviewBottomMargin} ${classNameOnlyForCodePreviewTopMargin}`}
          label="Top"
          content={dummyListItems}
        />
        <Ui_Dropdown
          top
          end
          hover
          className={`${classNameOnlyForCodePreviewBottomMargin} ${classNameOnlyForCodePreviewTopMargin}`}
          label="Top end"
          content={dummyListItems}
        />
        <Ui_Dropdown
          end
          hover
          className={`${classNameOnlyForCodePreviewBottomMargin} ${classNameOnlyForCodePreviewTopMargin}`}
          label="End"
          content={dummyListItems}
        />
      </>
    ),
    codeExample: `${dummyListItemString}

<Ui_Dropdown left hover label="Left" content={dummyListItems} />
<Ui_Dropdown right hover label="Right" content={dummyListItems} />
<Ui_Dropdown top hover label="Top" content={dummyListItems} />
<Ui_Dropdown top end hover label="Top end" content={dummyListItems} />
<Ui_Dropdown end hover label="End" content={dummyListItems} />
`,
  },
  {
    id: 'dropdown-wide',
    title: 'Dropdown wide',
    preview: (
      <>
        <Ui_Dropdown wide className={classNameOnlyForCodePreviewBottomMargin} label="Click" content={dummyListItems} />
      </>
    ),
    codeExample: `${dummyListItemString}

<Ui_Dropdown wide label="Click" content={dummyListItems} />
`,
  },
  {
    id: 'dropdown-full',
    title: 'Dropdown full',
    preview: (
      <>
        <Ui_Dropdown full className={classNameOnlyForCodePreviewBottomMargin} label="Click" content={dummyListItems} />
      </>
    ),
    codeExample: `const dummyListItems = (
  <ul className="menu menu-compact p-4">
    <li>
      <a>Item 1</a>
    </li>
    <li>
      <a>Item 2</a>
    </li>
  </ul>
) 

<Ui_Dropdown full label="Click" content={dummyListItems} />
`,
  },
  {
    id: 'dropdown-open',
    title: 'Dropdown open',
    preview: (
      <>
        <Ui_Dropdown open className={classNameOnlyForCodePreviewBottomMargin} label="Open" content={dummyListItems} />
      </>
    ),
    codeExample: `${dummyListItemString}

<Ui_Dropdown open label="Open" content={dummyListItems} />
`,
  },
  {
    id: 'dropdown-hover',
    title: 'Dropdown hover',
    preview: (
      <>
        <Ui_Dropdown hover className={classNameOnlyForCodePreviewBottomMargin} label="Hover" content={dummyListItems} />
      </>
    ),
    codeExample: `${dummyListItemString}

<Ui_Dropdown hover label="Hover" content={dummyListItems} />
`,
  },
  {
    id: 'dropdown-no-anim',
    title: 'Dropdown no animation',
    preview: (
      <>
        <Ui_Dropdown
          noAnimation
          className={classNameOnlyForCodePreviewBottomMargin}
          label="No animation on click"
          content={dummyListItems}
        />
      </>
    ),
    codeExample: `${dummyListItemString}

<Ui_Dropdown noAnimation label="No animation on click" content={dummyListItems} />`,
  },
  {
    id: 'dropdown-card',
    title: 'Dropdown card',
    preview: (
      <>
        <Ui_Dropdown className={classNameOnlyForCodePreviewBottomMargin}>
          <Ui_Dropdown.Label className="btn">Card</Ui_Dropdown.Label>
          <Ui_Dropdown.Content className="card w-64 bg-primary text-primary-content border-0">
            <div className="card-body p-5">
              <h3 className="card-title">Card title!</h3>
              <p>you can use any element as a dropdown.</p>
            </div>
          </Ui_Dropdown.Content>
        </Ui_Dropdown>
      </>
    ),
    codeExample: `<Ui_Dropdown>
  <Ui_Dropdown.Label className="btn">Card</Ui_Dropdown.Label>
  <Ui_Dropdown.Content className="card w-64 bg-primary text-primary-content border-0">
    <div className="card-body p-5">
      <h3 className="card-title">Card title!</h3>
      <p>you can use any element as a dropdown.</p>
    </div>
  </Ui_Dropdown.Content>
</Ui_Dropdown>`,
  },
  {
    id: 'dropdown-helper',
    title: 'Dropdown helper',
    preview: (
      <>
        <p className={classNameOnlyForCodePreviewBottomMargin}>A normal text and a helper dropdown</p>
        <Ui_Dropdown className={classNameOnlyForCodePreviewBottomMargin} end>
          <Ui_Dropdown.Label className="btn btn-circle btn-ghost btn-xs text-info">
            <InformationCircleIcon />
          </Ui_Dropdown.Label>
          <Ui_Dropdown.Content className="card compact dropdown-content shadow bg-base-100 rounded-box w-64">
            <div className="card-body">
              <h3 className="card-title">You needed more info?</h3>
              <p>Here is a description!</p>
            </div>
          </Ui_Dropdown.Content>
        </Ui_Dropdown>
      </>
    ),
    codeExample: `<>
<p>A normal text and a helper dropdown</p>
<Ui_Dropdown end>
  <Ui_Dropdown.Label className="btn btn-circle btn-ghost btn-xs text-info">
    <InformationCircleIcon />
  </Ui_Dropdown.Label>
    <Ui_Dropdown.Content className="card compact dropdown-content shadow bg-base-100 rounded-box w-64">
      <div className="card-body">
        <h3 className="card-title">You needed more info?</h3>
        <p>Here is a description!</p>
      </div>
   </Ui_Dropdown.Content>
  </Ui_Dropdown>
</>`,
  },
]
