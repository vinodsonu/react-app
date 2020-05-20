import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'



export function withToggle(WrappedComponent) {
    @observer
    class WithToggle extends React.Component {
        @observable toggleStatus
        constructor(props) {
            super(props)
            this.toggleStatus = false;
        }
        @action.bound
        onToggle() {
            let { toggleStatus } = this.props;
            this.toggleStatus = !this.toggleStatus
        }

        render() {
            return <WrappedComponent  
            toggleStatus={this.toggleStatus} 
            onToggle={this.onToggle}
            {...this.props}
            />;
        }
    }
    return WithToggle
}
