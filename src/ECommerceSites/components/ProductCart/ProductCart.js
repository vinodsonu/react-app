import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'

import CartList from '../CartList'
import SubTotal from '../SubTotal'


import {
    CartContainer,
    ShowCartContainer,
    CrossButton,
    CartBody,
    CartItemsInnerDiv,
    CartImageDiv,
    CartPara,
    CartHeading,
    SubTotalDiv,
    SubTotalSubDiv,
    SubTotalText,
    SubTotalVal,
    CheckOutButton,
    HideCartContainer,
    HideCartImageDiv,
    HideCartContainerPara,
}
from '../../styledComponents'

@observer
class ProductCart extends React.Component {
    @observable cartProductList
    @observable isCartDisplayed = false
    constructor(props) {
        super(props)
        this.cartProductList = [];
    }
    @action.bound
    getStore() {
        return this.props.cartStore
    }
    @action.bound
    hideCart() {
        this.isCartDisplayed = false
    }
    @action.bound
    showCart() {
        this.isCartDisplayed = true
    }

    showCartView = () => {
        let { cartProductList, totalCartAmount, noOfProductsInCart, onRemoveCartItem, clearCart } = this.getStore()
        return (<CartContainer>
        <ShowCartContainer >
        <CrossButton onClick={this.hideCart}>X</CrossButton>
        <CartBody>
        <div class="flex items-center justify-center">
        <CartImageDiv><span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" 
        fill="none" stroke="white" stroke-width="2" stroke-linecap="round" 
        stroke-linejoin="round" class="feather feather-shopping-cart">
        <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1">
        </circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        </span>
        <CartPara style={{marginTop:'-32px'}}>{noOfProductsInCart}</CartPara>
        </CartImageDiv><CartHeading>Cart</CartHeading></div>
        <CartList noOfProductsInCart={noOfProductsInCart} cartProductList={cartProductList}  onRemoveCartItem={onRemoveCartItem}/>
        <SubTotal noOfProductsInCart={noOfProductsInCart} totalCartAmount={totalCartAmount} clearCart={clearCart}/>
        </CartBody>
        </ShowCartContainer>
        </CartContainer >)
    }
    hideCartView = () => {
        let { noOfProductsInCart } = this.getStore()
        return (
            <HideCartContainer onClick={this.showCart} style={{marginRight:'20px'}}>
            <HideCartImageDiv>
            <span>
            <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart">
            <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1">
            </circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6">
            </path></svg>
            </span>
           </HideCartImageDiv>
            <p style={{marginTop:"-40px",marginRight:"-3px"}}className="text-center text-sm text-yellow-600 ">{noOfProductsInCart}</p>
           </HideCartContainer>
        )
    }

    render() {
        let ComponentTobeDisplayed = this.isCartDisplayed ? this.showCartView() : this.hideCartView()
        return (ComponentTobeDisplayed)
    }
}
export { ProductCart }
