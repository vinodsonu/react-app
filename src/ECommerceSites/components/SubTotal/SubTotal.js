import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'

import {
    SubTotalDiv,
    SubTotalSubDiv,
    SubTotalText,
    SubTotalVal,
    CheckOutButton,
}
from '../../styledComponents'

@observer
class SubTotal extends React.Component {
    @action.bound
    clearCart() {
        this.props.clearCart()
    }
    @action.bound
    getNumberOfProducts() {
        return this.props.noOfProductsInCart
    }
    render() {
        let { totalCartAmount } = this.props
        return (
            <SubTotalDiv>
        <SubTotalSubDiv>
        <SubTotalText>SUBTOTAL</SubTotalText>
        <SubTotalVal>₹ {totalCartAmount}</SubTotalVal>
        </SubTotalSubDiv><CheckOutButton 
        className={` ${this.getNumberOfProducts()? "" : "cursor-not-allowed disabled"}`} 
        onClick={this.clearCart}>CHECKOUT</CheckOutButton>
        </SubTotalDiv>

        )
    }
}
export { SubTotal }
