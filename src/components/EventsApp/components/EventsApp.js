import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx';

import AddEvent from './AddEvent'
import A from './abc'


@observer
class EventApp extends React.Component {
    render() {
        return (<A/>)
    }
}
export default EventApp;
