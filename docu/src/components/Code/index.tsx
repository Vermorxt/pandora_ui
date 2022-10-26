import { Ui_NavLink } from '@vermorxt/pandora_ui'
import { useTheme } from 'next-themes'
import { FC, ReactElement, useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { ThemeModes } from '../DarkLightChanger'
import { THEMES, UseThemeProps } from '../ThemeChanger'
import scss from './code.module.scss'

export interface CodeProps {
  id?: string
  title?: string
  description?: string
  preview?: ReactElement<any, any>
  codeExample?: string
}

const Code: FC<CodeProps> = (props: CodeProps) => {
  const { id, title, description, preview, codeExample } = props
  const [tabIndex, setTabIndex] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState<boolean>()
  const { theme } = useTheme() as UseThemeProps

  useEffect(() => {
    if (theme) {
      const selectedTheme = THEMES.find(t => t.name === theme)

      if (selectedTheme) {
        selectedTheme?.mode === ThemeModes.Light ? setIsDarkMode(false) : setIsDarkMode(true)
      }
    }
  }, [theme])

  return (
    <>
      <div className="component-preview not-prose text-base-content my-4 w-full" id={id}>
        <div className="pb-2 text-sm font-bold">
          <Ui_NavLink scrollSmooth className="opacity-20 hover:opacity-60" href={`#${id as string}`}>
            # <span className="component-preview-title"> {title}</span>
          </Ui_NavLink>
        </div>
        {description && (
          <div className="prose">
            <p style={{ fontSize: 12, lineHeight: 1, marginBottom: 20 }}>{description}</p>
          </div>
        )}
        <div className="grid">
          <div className="tabs z-10 -mb-px">
            <button
              className={`tab tab-lifted border-0 [--tab-bg:hsl(var(--b2))] ${tabIndex === 0 ? 'tab-active' : ''}`}
              onClick={() => setTabIndex(0)}
            >
              Preview
            </button>
            <button
              className={`tab tab-lifted  ${
                tabIndex === 1 ? `${isDarkMode ? 'tab-active ' + scss.bg_dark : 'tab-active ' + scss.bg_light}` : ''
              }`}
              onClick={() => setTabIndex(1)}
            >
              Code
            </button>
            <div className="tab tab-lifted mr-6 flex-1 cursor-default [--tab-border-color:transparent]"></div>
          </div>
          <div
            className={`${
              tabIndex === 0 ? 'hidden' : ''
            } bg-base-300 rounded-b-box rounded-box relative overflow-x-auto`}
          >
            <div
              className={`${scss.preview} preview border-base-300 bg-base-200 rounded-box flex min-h-[6rem] min-w-[18rem] flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4`}
              style={{ backgroundSize: '5px 5px', fontSize: '0.8rem' }}
            >
              <SyntaxHighlighter
                className={`${isDarkMode ? scss.bg_dark : scss.bg_light} ${scss.code}`}
                language="jsx"
                style={isDarkMode ? materialDark : materialLight}
              >
                {codeExample as any}
              </SyntaxHighlighter>
            </div>
          </div>
          <div
            className={`${
              tabIndex === 1 ? 'hidden' : ''
            } bg-base-300 rounded-b-box rounded-tr-box relative overflow-x-auto`}
          >
            <div
              className="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] flex-wrap items-center justify-start sm:justify-center gap-2 overflow-x-auto border bg-cover bg-top p-4"
              style={{ backgroundSize: '5px 5px' }}
            >
              {preview}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Code
