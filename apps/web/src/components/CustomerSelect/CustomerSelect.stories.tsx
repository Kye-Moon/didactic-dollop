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

import CustomerSelect from './CustomerSelect'
import {ComboBoxOption} from "src/components/ComboBox/ComboBox";


const meta: Meta<typeof CustomerSelect> = {
  component: CustomerSelect,
}

export default meta

type Story = StoryObj<typeof CustomerSelect>

export const Primary: Story = {
  args: {
    value: "customer 1",
    setValue: (value:string) => {},
  },
}
