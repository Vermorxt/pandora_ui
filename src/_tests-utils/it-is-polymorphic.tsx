import { render } from '@testing-library/react'
import React from 'react'

export function itIsPolymorphic<P>(Component: React.ComponentType<P>, requiredProps: P, selector?: string) {
  it('is polymorphic', () => {
    const getTarget = (container: HTMLElement): HTMLElement =>
      selector ? (container as any).querySelector(selector) : (container.firstChild as HTMLElement)
    const TestComponent = (props: any) => <mark data-test-prop {...props} />
    const { container: withTag } = render(<Component component="a" href="https://mantine.dev" {...requiredProps} />)
    const { container: withComponent } = render(<Component component={TestComponent} {...requiredProps} />)

    expect(getTarget(withTag).tagName).toBe('A')
    expect(getTarget(withComponent).tagName).toBe('MARK')
  })
}
