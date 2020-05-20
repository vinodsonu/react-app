import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

@observer
class MouseCoordinates extends React.Component {
    @observable x
    @observable y
    constructor(props) {
        super(props);
        this.x = 0;
        this.y = 0;
    }
    @action.bound
    handleMouseMove(event) {
        this.x = event.clientX
        this.y = event.clientY
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        { this.props.render(this.x,this.y) }
      </div>
        );
    }
}
export { MouseCoordinates }
