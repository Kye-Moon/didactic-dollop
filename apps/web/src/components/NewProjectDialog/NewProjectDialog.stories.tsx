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

import NewProjectDialog from './NewProjectDialog'

const meta: Meta<typeof NewProjectDialog> = {
  component: NewProjectDialog,
}

export default meta

type Story = StoryObj<typeof NewProjectDialog>

export const Primary: Story = {
  args: {
    open: false
  }
}
