import React from 'react'
import { observable, action, computed } from 'mobx'
import { observer, inject } from 'mobx-react'

import {
    CartItemContainer,
    ItemCrossButton,
    ItemImageSize,
    ItemDataContainer,
    ItemDataPara,
    ItemDataHeading,
    ItemDataPrice,
}
from '../../styledComponents'

@observer
class CartItem extends React.Component {
    @action.bound
    getItem() {
        return this.props.cartItem
    }
    @action.bound
    onRemoveCartItem() {
        this.props.onRemoveCartItem(this.getItem().cartItemId)
    }
    render() {
        return (
            <CartItemContainer>
            <ItemCrossButton onClick={this.onRemoveCartItem}>x</ItemCrossButton>
          <ItemImageSize> <img src={this.getItem().product.imageURL}/></ItemImageSize>
          <ItemDataContainer>
          <ItemDataHeading>{this.getItem().product.title}</ItemDataHeading>
          <ItemDataPara>{this.getItem().product.description}</ItemDataPara>
          <ItemDataPara>quantity:{this.getItem().quantity}</ItemDataPara>
          </ItemDataContainer>
           <ItemDataPrice>$ {this.getItem().product.price}</ItemDataPrice>
            </CartItemContainer>
        )
    }
}
export { CartItem }
