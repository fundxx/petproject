import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Primary = Template.bind({})
// Primary.args = {
//     theme: AppLinkTheme.PRIMARY,
//     children: 'Text'
// }
export const DarkPrimary = Template.bind({})
DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)]
