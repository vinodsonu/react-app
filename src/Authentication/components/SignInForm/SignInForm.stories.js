import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color } from '@storybook/addon-knobs'

import '../../styledComponents'
import { SignInForm, SignInButtonFun, InputFieldFun } from './SignInForm'

const label = 'Color';
const defaultValue = '#ff00ff';
const groupId = 'GROUP-ID1';
const value = color(label, defaultValue, groupId);

export default {
    title: 'Common/Button',
    decorators: [withKnobs]
}
export const SignInButton = () => (
    <SignInButtonFun
    style={{backgroundColor:color(value)}}
     text={text("James")}
    onClickSignIn={action('onSubmit')}/>
)
