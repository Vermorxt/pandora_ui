import { Ui_Button, Ui_ButtonGroup } from '@vermorxt/pandora_ui'

export const paginationCodeExamples = [
  {
    id: 'buttonGroup_1',
    title: 'Pagination with an active button',
    preview: (
      <>
        <Ui_ButtonGroup>
          <Ui_Button>1</Ui_Button>
          <Ui_Button active>2</Ui_Button>
          <Ui_Button>3</Ui_Button>
          <Ui_Button>4</Ui_Button>
        </Ui_ButtonGroup>
      </>
    ),
    codeExample: `
<Ui_ButtonGroup>
  <Ui_Button>1</Ui_Button>
  <Ui_Button active>2</Ui_Button>
  <Ui_Button>3</Ui_Button>
  <Ui_Button>4</Ui_Button>
</Ui_ButtonGroup>`,
  },
  {
    id: 'buttonGroup_2',
    title: 'Sizes',
    preview: (
      <>
        <Ui_ButtonGroup>
          <Ui_Button large>1</Ui_Button>
          <Ui_Button active large>
            2
          </Ui_Button>
          <Ui_Button large>3</Ui_Button>
          <Ui_Button large>4</Ui_Button>
        </Ui_ButtonGroup>

        <Ui_ButtonGroup>
          <Ui_Button medium>1</Ui_Button>
          <Ui_Button active medium>
            2
          </Ui_Button>
          <Ui_Button medium>3</Ui_Button>
          <Ui_Button medium>4</Ui_Button>
        </Ui_ButtonGroup>

        <Ui_ButtonGroup>
          <Ui_Button small>1</Ui_Button>
          <Ui_Button active small>
            2
          </Ui_Button>
          <Ui_Button small>3</Ui_Button>
          <Ui_Button small>4</Ui_Button>
        </Ui_ButtonGroup>
        <Ui_ButtonGroup>
          <Ui_Button tiny>1</Ui_Button>
          <Ui_Button active tiny>
            2
          </Ui_Button>
          <Ui_Button tiny>3</Ui_Button>
          <Ui_Button tiny>4</Ui_Button>
        </Ui_ButtonGroup>
      </>
    ),
    codeExample: `
<Ui_ButtonGroup>
  <Ui_Button large>1</Ui_Button>
  <Ui_Button active large>
    2
  </Ui_Button>
  <Ui_Button large>3</Ui_Button>
  <Ui_Button large>4</Ui_Button>
</Ui_ButtonGroup
<Ui_ButtonGroup>
  <Ui_Button medium>1</Ui_Button>
  <Ui_Button active medium>
    2
  </Ui_Button>
  <Ui_Button medium>3</Ui_Button>
  <Ui_Button medium>4</Ui_Button>
</Ui_ButtonGroup
<Ui_ButtonGroup>
  <Ui_Button small>1</Ui_Button>
  <Ui_Button active small>
    2
  </Ui_Button>
  <Ui_Button small>3</Ui_Button>
  <Ui_Button small>4</Ui_Button>
</Ui_ButtonGroup>
<Ui_ButtonGroup>
  <Ui_Button tiny>1</Ui_Button>
  <Ui_Button active tiny>
    2
  </Ui_Button>
  <Ui_Button tiny>3</Ui_Button>
  <Ui_Button tiny>4</Ui_Button>
</Ui_ButtonGroup>`,
  },
  {
    id: 'buttonGroup_3',
    title: 'With a disabled button',
    preview: (
      <>
        <Ui_ButtonGroup>
          <Ui_Button>1</Ui_Button>
          <Ui_Button>2</Ui_Button>
          <Ui_Button disabled>...</Ui_Button>
          <Ui_Button>99</Ui_Button>
          <Ui_Button>100</Ui_Button>
        </Ui_ButtonGroup>
      </>
    ),
    codeExample: `
<Ui_ButtonGroup>
  <Ui_Button>1</Ui_Button>
  <Ui_Button>2</Ui_Button>
  <Ui_Button disabled>...</Ui_Button>
  <Ui_Button>99</Ui_Button>
  <Ui_Button>100</Ui_Button>
</Ui_ButtonGroup>`,
  },
  {
    id: 'buttonGroup_4',
    title: 'Extra small buttons',
    preview: (
      <>
        <Ui_ButtonGroup>
          <Ui_Button>«</Ui_Button>
          <Ui_Button>Page 22</Ui_Button>
          <Ui_Button>»</Ui_Button>
        </Ui_ButtonGroup>
      </>
    ),
    codeExample: `
<Ui_ButtonGroup>
  <Ui_Button>«</Ui_Button>
  <Ui_Button>Page 22</Ui_Button>
  <Ui_Button>»</Ui_Button>
</Ui_ButtonGroup>`,
  },
  {
    id: 'buttonGroup_5',
    title: 'Nex/Prev outline buttons with equal width',
    preview: (
      <>
        <Ui_ButtonGroup className="grid grid-cols-2">
          <Ui_Button outline>Previous page</Ui_Button>
          <Ui_Button outline>Next</Ui_Button>
        </Ui_ButtonGroup>
      </>
    ),
    codeExample: `
<Ui_ButtonGroup className="grid grid-cols-2">
  <Ui_Button outline>Previous page</Ui_Button>
  <Ui_Button outline>Next</Ui_Button>
</Ui_ButtonGroup>`,
  },
]
