import { DotsHorizontalIcon, MenuIcon } from '@heroicons/react/solid'
import { Ui_Navbar, Ui_Button } from '@vermorxt/pandora_ui'

export const navbarCodeExamples = [
  {
    id: 'navbar_1',
    title: 'Navbar simple',
    preview: (
      <Ui_Navbar id="navbar-1" rounded>
        <Ui_Button ghost small>
          CMS
        </Ui_Button>
      </Ui_Navbar>
    ),
    codeExample: `
<Ui_Navbar id="navbar-1" rounded>
  <Ui_Button ghost small>
    CMS
  </Ui_Button>
</Ui_Navbar>`,
  },
  {
    id: 'navbar_2',
    title: 'Navbar custom content',
    preview: (
      <Ui_Navbar id="navbar-2" shadow rounded>
        <div className="flex-none">
          <Ui_Button ghost>
            <MenuIcon className="w-6" />
          </Ui_Button>
        </div>
        <div className="flex-1">
          <Ui_Button ghost small>
            CMS
          </Ui_Button>
        </div>
        <div className="flex-none pr-4">
          <Ui_Button ghost square small>
            <DotsHorizontalIcon />
          </Ui_Button>
        </div>
      </Ui_Navbar>
    ),
    codeExample: `
<Ui_Navbar id="navbar-2" shadow rounded>
  <div className="flex-none">
    <Ui_Button ghost>
      <MenuIcon className="w-6" />
    </Ui_Button>
  </div>
  <div className="flex-1">
    <Ui_Button ghost small>
      CMS
    </Ui_Button>
  </div>
  <div className="flex-none pr-4">
    <Ui_Button ghost square small>
      <DotsHorizontalIcon />
    </Ui_Button>
  </div>
</Ui_Navbar>`,
  },
  {
    id: 'navbar_3',
    title: 'Navbar start/center/end',
    preview: (
      <Ui_Navbar id="navbar-3" rounded shadow>
        <Ui_Navbar.Start>
          <Ui_Button ghost small>
            CMS
          </Ui_Button>
        </Ui_Navbar.Start>
        <Ui_Navbar.Center>
          <p>Centered content</p>
        </Ui_Navbar.Center>
        <Ui_Navbar.End>
          <Ui_Button small primary>
            Do sth.
          </Ui_Button>
        </Ui_Navbar.End>
      </Ui_Navbar>
    ),
    codeExample: `
<Ui_Navbar id="navbar-3" rounded shadow>
  <Ui_Navbar.Start>
    <Ui_Button ghost small>
      CMS
    </Ui_Button>
  </Ui_Navbar.Start>
  <Ui_Navbar.Center>
    <p>Centered content</p>
  </Ui_Navbar.Center>
  <Ui_Navbar.End>
    <Ui_Button small primary>
      Do sth.
    </Ui_Button>
  </Ui_Navbar.End>
</Ui_Navbar>`,
  },
  {
    id: 'navbar_4',
    title: 'Navbar background color and shadow variants',
    preview: (
      <>
        <Ui_Navbar id="navbar-4-1" bgColor="primary" rounded="full" shadow>
          <Ui_Button ghost small>
            CMS
          </Ui_Button>
        </Ui_Navbar>
        <Ui_Navbar id="navbar-4-2" bgColor="base-300" rounded="md" shadow>
          <Ui_Button ghost small>
            CMS
          </Ui_Button>
        </Ui_Navbar>
        <Ui_Navbar id="navbar-4-3" bgColor="secondary" rounded="lg" shadow>
          <Ui_Button ghost small>
            CMS
          </Ui_Button>
        </Ui_Navbar>
      </>
    ),
    codeExample: `
<Ui_Navbar id="navbar-4-1" bgColor="primary" rounded="full" shadow>
  <Ui_Button ghost small>
    CMS
  </Ui_Button>
</Ui_Navbar>
<Ui_Navbar id="navbar-4-2" bgColor="base-300" rounded="md" shadow>
  <Ui_Button ghost small>
    CMS
  </Ui_Button>
</Ui_Navbar>
<Ui_Navbar id="navbar-4-3" bgColor="secondary" rounded="lg" shadow>
  <Ui_Button ghost small>
    CMS
  </Ui_Button>
</Ui_Navbar>`,
  },
  {
    id: 'navbar_5',
    title: 'Navbar responsive menu',
    preview: (
      <Ui_Navbar id="navbar-5" rounded shadow>
        <Ui_Navbar.Start>
          <Ui_Button ghost small className="lg:hidden">
            <MenuIcon className="w-6" />
          </Ui_Button>
          <Ui_Button ghost small>
            CMS
          </Ui_Button>
        </Ui_Navbar.Start>
        <Ui_Navbar.Center className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </Ui_Navbar.Center>
        <Ui_Navbar.End>
          <Ui_Button small primary>
            Do sth.
          </Ui_Button>
        </Ui_Navbar.End>
      </Ui_Navbar>
    ),
    codeExample: `
<Ui_Navbar id="navbar-5" rounded shadow>
  <Ui_Navbar.Start>
    <Ui_Button ghost small className="lg:hidden">
      <MenuIcon className="w-6" />
    </Ui_Button>
    <Ui_Button ghost small>
      CMS
    </Ui_Button>
  </Ui_Navbar.Start>
  <Ui_Navbar.Center className="hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li>
        <a>Item 1</a>
      </li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </a>
        <ul className="p-2">
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
        </ul>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  </Ui_Navbar.Center>
  <Ui_Navbar.End>
    <Ui_Button small primary>
      Do sth.
    </Ui_Button>
  </Ui_Navbar.End>
</Ui_Navbar>`,
  },
]
