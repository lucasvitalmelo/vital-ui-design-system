import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, MultiStep, MultiStepProps } from '@vital-ui/react'

export default {
  title: 'Form/ MultiStep',
  component: MultiStep,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 1,
  },
}
export const Full: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 4,
  },
}
