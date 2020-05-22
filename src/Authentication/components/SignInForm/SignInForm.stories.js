import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color } from '@storybook/addon-knobs'

import '../../styledComponents'
import { SignInButtonFun, SignInForm, SignInInput } from './SignInForm'

const label = 'Color';
const defaultValue = '#ff00ff';
const groupId = 'GROUP-ID1';
const value = color(label, defaultValue, groupId);

export default {
    component: SignInButtonFun,
    title: 'SignInForm/SignInbutton',
}
export const onClickSubmitBtn = () => (
    <SignInButtonFun
    onClickSignIn={action('onSubmit')}
    />
)
export const InputValue = () => {
    <SignInInput
    Component="UserInput"
    />
}


// export const knobs = () => <SignInForm
//     errorMessage={text('errorMessage','incorrect Credentials'),color(value)}
//     userName={color(value)}
//     password={color(value)}
// />

// knobs.story = {
//     decorators: [withKnobs]
// }
