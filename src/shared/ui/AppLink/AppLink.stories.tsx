import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import React from 'react'
import { AppLink, AppLinkTheme } from './AppLink'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    },

    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
    children: 'Text'
}
export const Secondary = Template.bind({})
Secondary.args = {
    theme: AppLinkTheme.SECONDARY,
    children: 'Text'
};
// Secondary.decorators = [ThemeDecorator(Theme.DARK)]

export const Red = Template.bind({})
Red.args = {
    theme: AppLinkTheme.RED,
    children: 'Text'
};

export const DarkPrimary = Template.bind({})
DarkPrimary.args = {
    theme: AppLinkTheme.PRIMARY,
    children: 'Text'
}
DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkSecondary = Template.bind({})
DarkSecondary.args = {
    theme: AppLinkTheme.SECONDARY,
    children: 'Text'
};
DarkSecondary.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkRed = Template.bind({})
DarkRed.args = {
    theme: AppLinkTheme.RED,
    children: 'Text'
};
DarkRed.decorators = [ThemeDecorator(Theme.DARK)]
