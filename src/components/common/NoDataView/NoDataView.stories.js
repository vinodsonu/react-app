import React from 'react'
import { text, color } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import NoDataView from './index'

export default {
    component: NoDataView,
    title: 'Common/NoDataView'
}

export const defaultView = () => (<NoDataView/>)
