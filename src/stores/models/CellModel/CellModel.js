import React from 'react'
import { observable } from 'mobx'
class CellModel extends React.Component {
    id;
    isHidden;
    constructor(props) {
        super(props)
        this.id = this.props.id;
        this.isHidden = this.props.isHidden;
    }
}
export default CellModel;
