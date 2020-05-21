import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, color } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import LoadingView from './LoadingView'
import Loader from "../Icons/Loader";

// const label = 'Color';
// const defaultValue = '#ff00ff';
// const groupId = 'GROUP-ID1';

export default {
    component: LoadingView,
    title: 'Common/LoadingView',
}

export const defaultView = () => <LoadingView/>
// export const knobs = () => (<Loader/>)
// knobs.story = {
//     decorators: [storyFn => <img style={{ color: 'red' }}/>],
// };
