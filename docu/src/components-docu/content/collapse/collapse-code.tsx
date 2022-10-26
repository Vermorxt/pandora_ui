import { Ui_Collapse } from '@vermorxt/pandora_ui'

export const collapseCodeExamples = [
  {
    id: 'collapse_1',
    title: 'Collapse with checkbox (default)',
    description: 'This collapse works with checkbox instead of focus. It needs to get clicked again to get closed.',
    preview: (
      <Ui_Collapse>
        <Ui_Collapse.Title>Click me to see content</Ui_Collapse.Title>
        <Ui_Collapse.Content>
          <p>Collapse content.</p>
        </Ui_Collapse.Content>
      </Ui_Collapse>
    ),
    codeExample: `
<Ui_Collapse>
  <Ui_Collapse.Title>Click me to see content</Ui_Collapse.Title>
  <Ui_Collapse.Content>
    <p>Collapse content.</p>
  </Ui_Collapse.Content>
</Ui_Collapse>`,
  },
  {
    id: 'collapse_2',
    title: 'Collapse with focus',
    description: 'This collapse works with focus. When div loses focus, it gets closed.',
    preview: (
      <Ui_Collapse focus>
        <Ui_Collapse.Title>Focus me to see content</Ui_Collapse.Title>
        <Ui_Collapse.Content>
          <p>Collapse content.</p>
        </Ui_Collapse.Content>
      </Ui_Collapse>
    ),
    codeExample: `
<Ui_Collapse focus>
  <Ui_Collapse.Title>Focus me to see content</Ui_Collapse.Title>
  <Ui_Collapse.Content>
    <p>Collapse content.</p>
  </Ui_Collapse.Content>
</Ui_Collapse>`,
  },
  {
    id: 'collapse_3',
    title: 'With border and background color',
    preview: (
      <Ui_Collapse focus border rounded>
        <Ui_Collapse.Title>Focus me to see content</Ui_Collapse.Title>
        <Ui_Collapse.Content>
          <p>Collapse content.</p>
        </Ui_Collapse.Content>
      </Ui_Collapse>
    ),
    codeExample: `
<Ui_Collapse focus border rounded>
  <Ui_Collapse.Title>Focus me to see content</Ui_Collapse.Title>
  <Ui_Collapse.Content>
    <p>Collapse content.</p>
  </Ui_Collapse.Content>
</Ui_Collapse>`,
  },
  {
    id: 'collapse_4',
    title: 'With arrow icon',
    preview: (
      <Ui_Collapse focus border rounded arrow>
        <Ui_Collapse.Title>Focus me to see content</Ui_Collapse.Title>
        <Ui_Collapse.Content>
          <p>Collapse content.</p>
        </Ui_Collapse.Content>
      </Ui_Collapse>
    ),
    codeExample: `
<Ui_Collapse focus border rounded arrow>
  <Ui_Collapse.Title>Focus me to see content</Ui_Collapse.Title>
  <Ui_Collapse.Content>
    <p>Collapse content.</p>
  </Ui_Collapse.Content>
</Ui_Collapse>`,
  },
  {
    id: 'collapse_5',
    title: 'With arrow plus/minus icon',
    preview: (
      <Ui_Collapse focus border rounded plus>
        <Ui_Collapse.Title>Focus me to see content</Ui_Collapse.Title>
        <Ui_Collapse.Content>
          <p>Collapse content.</p>
        </Ui_Collapse.Content>
      </Ui_Collapse>
    ),
    codeExample: `
<Ui_Collapse focus border rounded plus>
  <Ui_Collapse.Title>Focus me to see content</Ui_Collapse.Title>
  <Ui_Collapse.Content>
    <p>Collapse content.</p>
  </Ui_Collapse.Content>
</Ui_Collapse>`,
  },
  {
    id: 'collapse_6',
    title: 'Force close',
    preview: (
      <Ui_Collapse focus border rounded plus close>
        <Ui_Collapse.Title>Focus me to see content</Ui_Collapse.Title>
        <Ui_Collapse.Content>
          <p>Collapse content.</p>
        </Ui_Collapse.Content>
      </Ui_Collapse>
    ),
    codeExample: `
<Ui_Collapse focus border rounded plus close>
  <Ui_Collapse.Title>Focus me to see content</Ui_Collapse.Title>
  <Ui_Collapse.Content>
    <p>Collapse content.</p>
  </Ui_Collapse.Content>
</Ui_Collapse>`,
  },
  {
    id: 'collapse_7',
    title: 'Force open',
    preview: (
      <Ui_Collapse focus border rounded plus open>
        <Ui_Collapse.Title>Focus me to see content</Ui_Collapse.Title>
        <Ui_Collapse.Content>
          <p>Collapse content.</p>
        </Ui_Collapse.Content>
      </Ui_Collapse>
    ),
    codeExample: `
<Ui_Collapse focus border rounded plus open>
  <Ui_Collapse.Title>Focus me to see content</Ui_Collapse.Title>
  <Ui_Collapse.Content>
    <p>Collapse content.</p>
  </Ui_Collapse.Content>
</Ui_Collapse>`,
  },
  {
    id: 'collapse_8',
    title: 'Custom colors for collapse that works with focus',
    description: 'Uses Tailwind CSS `group` and `group-focus` utilities to apply style when parent div is focused.',
    preview: (
      <Ui_Collapse focus border rounded plus group>
        <Ui_Collapse.Title bgColor="primary" bgColorOpened="secondary">
          Focus me to see content
        </Ui_Collapse.Title>
        <Ui_Collapse.Content bgColor="primary" bgColorOpened="secondary">
          <p>Collapse content.</p>
        </Ui_Collapse.Content>
      </Ui_Collapse>
    ),
    codeExample: `
<Ui_Collapse focus border rounded plus group>
  <Ui_Collapse.Title bgColor="primary" bgColorOpened="secondary">
    Focus me to see content
  </Ui_Collapse.Title>
  <Ui_Collapse.Content bgColor="primary" bgColorOpened="secondary">
    <p>Collapse content.</p>
  </Ui_Collapse.Content>
</Ui_Collapse>`,
  },
  {
    id: 'collapse_9',
    title: 'Custom colors for collapse that works with default parameters.',
    description:
      'Uses Tailwind CSS `peer` and `peer-checked` utilities to apply style when sibling checkbox is checked.',
    preview: (
      <Ui_Collapse border rounded plus>
        <Ui_Collapse.Title bgColor="primary" bgColorOpened="secondary">
          Click me to see content
        </Ui_Collapse.Title>
        <Ui_Collapse.Content bgColor="primary" bgColorOpened="secondary">
          <p>Collapse content.</p>
        </Ui_Collapse.Content>
      </Ui_Collapse>
    ),
    codeExample: `
<Ui_Collapse border rounded plus>
  <Ui_Collapse.Title bgColor="primary" bgColorOpened="secondary">
    Click me to see content
  </Ui_Collapse.Title>
  <Ui_Collapse.Content bgColor="primary" bgColorOpened="secondary">
    <p>Collapse content.</p>
  </Ui_Collapse.Content>
</Ui_Collapse>`,
  },
]
