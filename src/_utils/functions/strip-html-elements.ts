export const stripHtmlElements = (html: string) => {
  let htmlValue = html

  const _stripDescriptionHtmlTags = (_html: string) => {
    const start = '<'
    const end = '>'
    let _htmlValue = _html

    let startIndex = _html.indexOf(start)
    while (startIndex !== -1) {
      const endIndex = _html.indexOf(end, startIndex)
      if (endIndex === -1) {
        break
      }

      _htmlValue = _html.split(_html.substring(startIndex, endIndex + 1)).join('')
      startIndex = _html.indexOf(start, startIndex)
    }

    return _htmlValue
  }

  // NOTE: Remove empty p tags
  htmlValue = htmlValue.split('<p></p>').join('')
  htmlValue = htmlValue.split('<p><br></p>').join('')

  // NOTE: Force empty lines
  htmlValue = htmlValue.split('</p></li>').join('\n\n')
  htmlValue = htmlValue.split('</li>').join('\n\n')
  htmlValue = htmlValue.split('</p>').join('\n\n')

  // NOTE: Force line breaks
  htmlValue = htmlValue.split('<br>').join('\n')
  htmlValue = htmlValue.split('<br/>').join('\n')

  // NOTE: Remove all other tags
  htmlValue = _stripDescriptionHtmlTags(htmlValue)

  htmlValue = htmlValue.split('\n').join('<br/>')

  // NOTE: Escape HTML entities
  htmlValue = htmlValue.split('&nbsp;').join(' ')
  htmlValue = htmlValue.split('&lt;').join('<')
  htmlValue = htmlValue.split('&gt;').join('>')
  htmlValue = htmlValue.split('&amp;').join('&')
  htmlValue = htmlValue.split('&quot;').join('"')
  htmlValue = htmlValue.split('&apos;').join("'")
  htmlValue = htmlValue.split('&euro;').join('€')
  htmlValue = htmlValue.split('&copy;').join('©')
  htmlValue = htmlValue.split('&reg;').join('®')

  // NOTE: Clean string end
  htmlValue = htmlValue.trim()
  while (htmlValue.lastIndexOf('\n') === htmlValue.length - 2) {
    htmlValue = htmlValue.substring(0, htmlValue.length - 2)
  }

  return htmlValue
}
