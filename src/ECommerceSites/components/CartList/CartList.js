import React from 'react'
import { observable, action, computed } from 'mobx'
import { observer, inject } from 'mobx-react'

import {
    AddSomeProductsDiv,
    AddSomeProductsMsg,
}
from '../../styledComponents'
import CartItem from '../CartItem'


@observer
class CartList extends React.Component {
    @observable cartProductList = []
    @action.bound
    getNumberOfProducts() {
        return this.props.noOfProductsInCart
    }
    @action.bound
    getElement() {
        let { cartProductList } = this.props
        return cartProductList
    }
    @action.bound
    onRemoveCartItem(cartItemId) {
        this.props.onRemoveCartItem(cartItemId)
    }
    renderCartItems() {
        return this.getElement().map((cartItem) => <CartItem cartItem={cartItem} onRemoveCartItem={this.onRemoveCartItem}/>)
    }
    render() {
        return (<AddSomeProductsDiv><AddSomeProductsMsg>
        {`${this.getNumberOfProducts()?(""):("Add some products in the cart")}`}</AddSomeProductsMsg>
        {this.renderCartItems()}
        </AddSomeProductsDiv>)
    }

}
export { CartList }
