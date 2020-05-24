import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color, select } from '@storybook/addon-knobs'

import '../styledComponents.js'

import { StateComponent, OnLose, OnWin } from './StateComponent'

const label = 'Color';
const defaultValue = '#ff00ff';
const groupId = 'GROUP-ID1';
const value = color(label, defaultValue, groupId);

export default {
    title: "Common/States",
    component: StateComponent,
    decorators: [withKnobs]
}
export const WinComponent = () => <OnWin/>
export const LoseComponen = () => <OnLose/>
