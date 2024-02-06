import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@vital-ui/react'

export default {
  title: 'Typografic/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis soluta repudiandae natus vitae autem placeat mollitia pariatur aperiam suscipit culpa, quibusdam alias voluptatibus atque qui sit itaque magnam obcaecati. Ea?',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTap: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'Strong text',
  },
}
