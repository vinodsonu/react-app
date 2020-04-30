import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import ProductSort from '../ProductSort'

import {
    HeaderDiv,
    ProductsPara,
    SearchBar,
}
from '../../styledComponents'

@observer
class Header extends React.Component {
    @action.bound
    getStore() {
        return this.props.productStore
    }
    @action.bound
    onChange = (event) => {
        this.getStore().onChangeSelectedText(event.target.value)
    }
    render() {
        return (<HeaderDiv>
        <ProductsPara>products found:{this.getStore().sortedAndFilteredProducts.length}</ProductsPara>
        <SearchBar placeholder="Search Product" type="text"onChange={this.onChange}></SearchBar>
        <ProductSort onChangeSortBy={this.getStore().onChangeSortBy}/>
        </HeaderDiv>)
    }
}
export { Header }
