import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color } from '@storybook/addon-knobs'

import '../../styledComponents'
import { SignInForm } from './SignInForm'

const label = 'Color';
const defaultValue = '#ff00ff';
const groupId = 'GROUP-ID1';
const value = color(label, defaultValue, groupId);

export default {
    component: SignInForm,
    title: 'SignInForm',
}
export const onClickWithInCurrectUserName = () => (
    <SignInForm
    onClickSignIn={action('onSubmit')}
    errorMessage={'incorrect username'}
    />
)
export const onClickWithInCurrectPassword = () => (
    <SignInForm
    onClickSignIn={action('onSubmit')}
    errorMessage={'incorrect password'}
    />
)

export const knobs = () => <SignInForm
    errorMessage={text('errorMessage','incorrect Credentials'),color(value)}
    userName={color(value)}
    password={color(value)}
/>

knobs.story = {
    decorators: [withKnobs]
}
