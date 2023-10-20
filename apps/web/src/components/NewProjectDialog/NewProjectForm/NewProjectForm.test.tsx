import { render } from '@redwoodjs/testing/web'

import NewProjectForm from './NewProjectForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewProjectForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewProjectForm />)
    }).not.toThrow()
  })
})
