import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx';
import AddEvent from './AddEvent.js'
import A from './abc.js'
@observer
class EventApp extends React.Component {
    render() {
        return (
            <div>
            <A/>
        </div>
        )
    }
}
export default EventApp;
