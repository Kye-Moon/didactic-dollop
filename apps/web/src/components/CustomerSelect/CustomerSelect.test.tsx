import { render } from '@redwoodjs/testing/web'

import CustomerSelect from './CustomerSelect'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CustomerSelect', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CustomerSelect />)
    }).not.toThrow()
  })
})
