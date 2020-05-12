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
    onChange = (event) => {
        this.props.onChangeSelectedText(event.target.value)
    }
    render() {
        return (<HeaderDiv>
        <ProductsPara>products found:{this.props.productsFound}</ProductsPara>
        <SearchBar placeholder="Search Product" defaultValue="" type="text" 
        onChange={this.onChange}></SearchBar>
        <ProductSort data-testid='Product_Sort' onChangeSortBy={this.props.onChangeSortBy}/>
        </HeaderDiv>)
    }
}
export { Header }
