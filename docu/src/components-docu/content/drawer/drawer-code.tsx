import React from 'react'
import { Ui_Drawer } from '@vermorxt/pandora_ui'
import { AnyType } from '@/root/src/_types/AnyType'

const menuItems = [
  <ul key={1} className={`menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content`}>
    <li>
      <a>Sidebar Item 1</a>
    </li>
    <li>
      <a>Sidebar Item 2</a>
    </li>
  </ul>,
] as AnyType[]

export const drawerCodeExamples = [
  {
    id: 'drawer',
    title: 'Drawer simple',
    preview: (
      <Ui_Drawer className="h-56" id="drawer-1">
        <Ui_Drawer.Content id="drawer-1" className="flex flex-col items-center justify-center">
          <label htmlFor="drawer-1" className="btn btn-primary drawer-button">
            Open drawer
          </label>
        </Ui_Drawer.Content>
        <Ui_Drawer.Side id="drawer-1">{menuItems}</Ui_Drawer.Side>
      </Ui_Drawer>
    ),
    codeExample: `
const menuItems = [
  <ul key={1} className={'menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'}>
    <li>
      <a>Sidebar Item 1</a>
    </li>
    <li>
      <a>Sidebar Item 2</a>
    </li>
  </ul>,
]

<Ui_Drawer className="h-56" id="drawer-1">
  <Ui_Drawer.Content id="drawer-1" className="flex flex-col items-center justify-center">
    <label htmlFor="drawer-1" className="btn btn-primary drawer-button">
      Open drawer
    </label>
  </Ui_Drawer.Content>
  <Ui_Drawer.Side id="drawer-1">{menuItems}</Ui_Drawer.Side>
</Ui_Drawer>`,
  },
  {
    id: 'drawer',
    title: 'Drawer default open',
    preview: (
      <Ui_Drawer className="h-56" defaultOpenOnLargeScreen id="drawer-2">
        <Ui_Drawer.Content id="drawer-2" className="flex flex-col items-center justify-center"></Ui_Drawer.Content>
        <Ui_Drawer.Side id="drawer-2">{menuItems}</Ui_Drawer.Side>
      </Ui_Drawer>
    ),
    codeExample: `
const menuItems = [
  <ul key={1} className={'menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'}>
    <li>
      <a>Sidebar Item 1</a>
    </li>
    <li>
      <a>Sidebar Item 2</a>
    </li>
  </ul>,
]

<Ui_Drawer className="h-56" defaultOpenOnLargeScreen id="drawer-2">
  <Ui_Drawer.Content id="drawer-2" className="flex flex-col items-center justify-center"></Ui_Drawer.Content>
  <Ui_Drawer.Side id="drawer-2">{menuItems}</Ui_Drawer.Side>
</Ui_Drawer>`,
  },
  {
    id: 'drawer',
    title: 'Drawer opens right',
    preview: (
      <Ui_Drawer className="h-56" opensRight id="drawer-3">
        <Ui_Drawer.Content id="drawer-3" className="flex flex-col items-center justify-center">
          <label htmlFor="drawer-3" className="btn btn-primary drawer-button">
            Open drawer
          </label>
        </Ui_Drawer.Content>
        <Ui_Drawer.Side id="drawer-3">{menuItems}</Ui_Drawer.Side>
      </Ui_Drawer>
    ),
    codeExample: `
const menuItems = [
  <ul key={1} className={'menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'}>
    <li>
      <a>Sidebar Item 1</a>
    </li>
    <li>
      <a>Sidebar Item 2</a>
    </li>
  </ul>,
]

<Ui_Drawer className="h-56" opensRight id="drawer-3">
  <Ui_Drawer.Content id="drawer-3" className="flex flex-col items-center justify-center">
    <label htmlFor="drawer-3" className="btn btn-primary drawer-button">
      Open drawer
    </label>
  </Ui_Drawer.Content>
  <Ui_Drawer.Side id="drawer-3">{menuItems}</Ui_Drawer.Side>
</Ui_Drawer>`,
  },
  {
    id: 'drawer',
    title: 'Drawer navbar example with side menu for mobile screens',
    preview: (
      <>
        <Ui_Drawer className="h-56" id="drawer-5">
          <Ui_Drawer.Content isNavbar id="drawer-5" className="flex flex-col items-center justify-center">
            <div className="w-full navbar bg-base-300">
              <div className="flex-none lg:hidden">
                <label htmlFor="drawer-5" className="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2">Navbar Title</div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  <li>
                    <a>Navbar Item 1</a>
                  </li>
                  <li>
                    <a>Navbar Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center items-center flex-grow">Content</div>
          </Ui_Drawer.Content>
          <Ui_Drawer.Side id="drawer-5">{menuItems}</Ui_Drawer.Side>
        </Ui_Drawer>
      </>
    ),
    codeExample: `
const menuItems = [
  <ul key={1} className={'menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'}>
    <li>
      <a>Sidebar Item 1</a>
    </li>
    <li>
      <a>Sidebar Item 2</a>
    </li>
  </ul>,
]

<Ui_Drawer className="h-56" id="drawer-5">
  <Ui_Drawer.Content isNavbar id="drawer-5" className="flex flex-col items-center justify-center">
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="drawer-5" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1 px-2 mx-2">Navbar Title</div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          <li>
            <a>Navbar Item 1</a>
          </li>
          <li>
            <a>Navbar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="flex justify-center items-center flex-grow">Content</div>
  </Ui_Drawer.Content>
  <Ui_Drawer.Side id="drawer-5">{menuItems}</Ui_Drawer.Side>
</Ui_Drawer>`,
  },
]
