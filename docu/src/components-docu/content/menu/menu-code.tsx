import { BanIcon, ClockIcon, TagIcon } from '@heroicons/react/solid'
import React from 'react'
import { Ui_Menu } from '@vermorxt/pandora_ui'

export const menuCodeExamples = [
  {
    id: 'menu_1',
    title: 'Menu simple',
    preview: (
      <>
        <Ui_Menu bgColor="base-100" className="w-56">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </Ui_Menu>
      </>
    ),
    codeExample: `
<Ui_Menu bgColor="base-100" className="w-56">
  <li>
    <a>Item 1</a>
  </li>
  <li>
    <a>Item 2</a>
  </li>
  <li>
    <a>Item 3</a>
  </li>
</Ui_Menu>`,
  },
  {
    id: 'menu_1',
    title: 'Menu active lnk',
    preview: (
      <>
        <Ui_Menu bgColor="base-200" className="w-56">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a className="active">Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </Ui_Menu>
      </>
    ),
    codeExample: `
<Ui_Menu bgColor="base-200" className="w-56">
  <li>
    <a>Item 1</a>
  </li>
  <li>
    <a className="active">Item 2</a>
  </li>
  <li>
    <a>Item 3</a>
  </li>
</Ui_Menu>`,
  },
  {
    id: 'menu_2',
    title: 'Menu list item bordered',
    preview: (
      <>
        <Ui_Menu bgColor="base-300" shadow rounded className="w-56">
          <li>
            <a>Item 1</a>
          </li>
          <li className="bordered">
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </Ui_Menu>
      </>
    ),
    codeExample: `
<Ui_Menu bgColor="base-300" shadow rounded className="w-56">
  <li>
    <a>Item 1</a>
  </li>
  <li className="bordered">
    <a>Item 2</a>
  </li>
  <li>
    <a>Item 3</a>
  </li>
</Ui_Menu>`,
  },
  {
    id: 'menu_bordered',
    title: 'Menu list item bordered',
    preview: (
      <>
        <Ui_Menu bgColor="base-300" horizontal shadow rounded>
          <li>
            <a>Item 1</a>
          </li>
          <li className="bordered">
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </Ui_Menu>
      </>
    ),
    codeExample: `
<Ui_Menu bgColor="base-300" horizontal shadow rounded>
  <li>
    <a>Item 1</a>
  </li>
  <li className="bordered">
    <a>Item 2</a>
  </li>
  <li>
    <a>Item 3</a>
  </li>
</Ui_Menu>`,
  },
  {
    id: 'menu_responsive',
    title: 'Responsive (vertical by default, horizontal on large screen)',
    preview: (
      <>
        <Ui_Menu bgColor="base-300" className="menu-vertical lg:menu-horizontal" shadow rounded>
          <li>
            <a>Item 1</a>
          </li>
          <li className="bordered">
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </Ui_Menu>
      </>
    ),
    codeExample: `
<Ui_Menu bgColor="base-300" className="menu-vertical lg:menu-horizontal" shadow rounded>
  <li>
    <a>Item 1</a>
  </li>
  <li className="bordered">
    <a>Item 2</a>
  </li>
  <li>
    <a>Item 3</a>
  </li>
</Ui_Menu>`,
  },
  {
    id: 'menu_3',
    title: 'Menu rounded corners and shadow',
    preview: (
      <>
        <Ui_Menu className="bg-base-100 w-56 p-2" rounded shadow>
          <li>
            <a>
              <ClockIcon className="w-5" /> Item 1
            </a>
          </li>
          <li>
            <a>
              <TagIcon className="w-5" /> Item 2
            </a>
          </li>
          <li>
            <a>
              <BanIcon className="w-5" /> Item 3
            </a>
          </li>
        </Ui_Menu>
      </>
    ),
    codeExample: `
<Ui_Menu className="bg-base-100 w-56 p-2" rounded shadow>
  <li>
    <a>
      <ClockIcon className="w-5" /> Item 1
    </a>
  </li>
  <li>
    <a>
      <TagIcon className="w-5" /> Item 2
    </a>
  </li>
  <li>
    <a>
      <BanIcon className="w-5" /> Item 3
    </a>
  </li>
</Ui_Menu>`,
  },
  {
    id: 'menu_only_icons',
    title: 'Menu only icons',
    preview: (
      <>
        <Ui_Menu className="bg-base-100" rounded shadow>
          <li>
            <a>
              <ClockIcon className="w-5" />
            </a>
          </li>
          <li>
            <a>
              <TagIcon className="w-5" />
            </a>
          </li>
          <li>
            <a>
              <BanIcon className="w-5" />
            </a>
          </li>
        </Ui_Menu>
      </>
    ),
    codeExample: `
<Ui_Menu className="bg-base-100" rounded shadow>
  <li>
    <a>
      <ClockIcon className="w-5" />
    </a>
  </li>
  <li>
    <a>
      <TagIcon className="w-5" />
    </a>
  </li>
  <li>
    <a>
      <BanIcon className="w-5" />
    </a>
  </li>
</Ui_Menu>
`,
  },
  {
    id: 'menu_only_icons_h',
    title: 'Menu only icons',
    preview: (
      <>
        <Ui_Menu className="bg-base-100" rounded shadow horizontal>
          <li>
            <a>
              <ClockIcon className="w-5" />
            </a>
          </li>
          <li>
            <a>
              <TagIcon className="w-5" />
            </a>
          </li>
          <li>
            <a>
              <BanIcon className="w-5" />
            </a>
          </li>
        </Ui_Menu>
      </>
    ),
    codeExample: `
<Ui_Menu className="bg-base-100" rounded shadow horizontal>
  <li>
    <a>
      <ClockIcon className="w-5" />
    </a>
  </li>
  <li>
    <a>
      <TagIcon className="w-5" />
    </a>
  </li>
  <li>
    <a>
      <BanIcon className="w-5" />
    </a>
  </li>
</Ui_Menu>`,
  },
  {
    id: 'menu_3_sub',
    title: 'Menu submenu',
    preview: (
      <>
        <Ui_Menu className="bg-base-100 mb-36" rounded shadow horizontal>
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <span>Parent</span>
            <ul className="bg-base-100">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li>
                <a>Submenu 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </Ui_Menu>
      </>
    ),
    codeExample: `
<Ui_Menu className="bg-base-100 mb-36" rounded shadow horizontal>
  <li>
    <a>Item 1</a>
  </li>
  <li tabIndex={0}>
    <span>Parent</span>
    <ul className="bg-base-100">
      <li>
        <a>Submenu 1</a>
      </li>
      <li>
        <a>Submenu 2</a>
      </li>
      <li>
        <a>Submenu 3</a>
      </li>
    </ul>
  </li>
  <li>
    <a>Item 3</a>
  </li>
</Ui_Menu>`,
  },
  {
    id: 'menu_round_shadow_v',
    title: 'Menu submenu vertical',
    preview: (
      <>
        <Ui_Menu className="bg-base-100 mb-36" rounded shadow>
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <span>Parent</span>
            <ul className="bg-base-100">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li>
                <a>Submenu 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </Ui_Menu>
      </>
    ),
    codeExample: `
<Ui_Menu className="bg-base-100 mb-36" rounded shadow>
  <li>
    <a>Item 1</a>
  </li>
  <li tabIndex={0}>
    <span>Parent</span>
    <ul className="bg-base-100">
      <li>
        <a>Submenu 1</a>
      </li>
      <li>
        <a>Submenu 2</a>
      </li>
      <li>
        <a>Submenu 3</a>
      </li>
    </ul>
  </li>
  <li>
    <a>Item 3</a>
  </li>
</Ui_Menu>`,
  },
  {
    id: 'menu_submenu',
    title: 'A lot of submenus',
    description:
      'The second level will be a dropdown and after that, to avoid a bad UX all levels will be visible with a padding.',
    preview: (
      <>
        <Ui_Menu className="bg-base-100 mb-80" rounded shadow horizontal>
          <li>
            <a>Item</a>
          </li>
          <li tabIndex={0}>
            <span>Level 1</span>
            <ul className="rounded-box bg-base-100 p-2">
              <li>
                <span>Level 2</span>
                <ul>
                  <li>
                    <span>Level 3</span>
                    <ul>
                      <li>
                        <span>Level 4</span>
                        <ul>
                          <li>
                            <span>Level 5</span>
                            <ul>
                              <li>
                                <a>Level 6</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </Ui_Menu>
      </>
    ),
    codeExample: `
<Ui_Menu className="bg-base-100 mb-80" rounded shadow horizontal>
  <li>
    <a>Item</a>
  </li>
  <li tabIndex={0}>
    <span>Level 1</span>
    <ul className="rounded-box bg-base-100 p-2">
      <li>
        <span>Level 2</span>
        <ul>
          <li>
            <span>Level 3</span>
            <ul>
              <li>
                <span>Level 4</span>
                <ul>
                  <li>
                    <span>Level 5</span>
                    <ul>
                      <li>
                        <a>Level 6</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</Ui_Menu>`,
  },
  {
    id: 'menu_c_color',
    title: 'With custom color',
    preview: (
      <>
        <Ui_Menu rounded shadow horizontal bgColor="primary">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </Ui_Menu>
      </>
    ),
    codeExample: `
<Ui_Menu rounded shadow horizontal bgColor="primary">
  <li>
    <a>Item 1</a>
  </li>
  <li>
    <a>Item 2</a>
  </li>
  <li>
    <a>Item 3</a>
  </li>
</Ui_Menu>`,
  },
]
