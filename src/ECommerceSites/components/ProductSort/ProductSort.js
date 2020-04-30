import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

import {
    Selectbar,
    SortByLabel,
    optionVal,
}
from '../../styledComponents'
class ProductSort extends React.Component {
    @action.bound
    onSelectSortType(event) {
        this.props.onChangeSortBy(event.target.value)
    }
    render() {
        return (<SortByLabel>
        Sort Price By:-
            <Selectbar onChange={this.onSelectSortType}>
            <option hidden >Select</option>
            <option value="ASCENDING">ASCENDING</option>
            <option value="DESCENDING">DESCENDING</option>
            </Selectbar>
        </SortByLabel>)
    }
}
export { ProductSort }
