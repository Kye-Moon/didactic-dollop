// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import NewProjectForm from './NewProjectForm'

const meta: Meta<typeof NewProjectForm> = {
  component: NewProjectForm,
}

export default meta

type Story = StoryObj<typeof NewProjectForm>

export const Primary: Story = {}
