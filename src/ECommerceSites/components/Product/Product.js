import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { toast } from "react-toastify"
import InnerImageZoom from 'react-inner-image-zoom'
import './index.css'

toast.configure({ position: `bottom-center`, Color: 'red' })
import {
    ProductDiv,
    ProductSubDiv,
    FreeShippingComponent,
    Image,
    ProductTitle,
    spaceDiv,
    Span1,
    Span2,
    Span3,
    Span4,
    AddToCartButton,
    FreeShippingPara
}
from '../../styledComponents'

@inject("cartStore")
@observer
class Product extends React.Component {
    @action.bound
    getProduct() {
        return this.props.product
    }
    @action.bound
    getCartStore() {
        return this.props.cartStore
    }
    @action.bound
    showFreeShipping() {
        if (this.getProduct().isFreeShipping)
            return <FreeShippingPara>Free Shipping</FreeShippingPara>
        else
            return null
    }
    @action.bound
    onClickAddToCart() {
        this.getCartStore().onClickAddToCart(this.getProduct().productId)
        console.log(1, this.getProduct())
        toast.warn("Product Added To Your Cart");
    }
    render() {
        const moneyPaidPerInstallMent = Math.round(this.props.product.price / this.props.product.installmentsCount, 4)
        return (<ProductDiv>
            <ProductSubDiv>
            <Image style={{width:'200px'}}> <InnerImageZoom src={this.getProduct().imageURL}/></Image>
            <ProductTitle>{this.getProduct().title}</ProductTitle>
            <spaceDiv>-</spaceDiv>
            <p>
                <Span1>$</Span1>
                <Span2>{this.getProduct().price}</Span2>
            </p>
            <p>
            <Span4>or {this.getProduct().installmentsCount} * {moneyPaidPerInstallMent}</Span4>
            </p>
            <AddToCartButton onClick={this.onClickAddToCart}>Add to Cart</AddToCartButton>
            </ProductSubDiv>
            </ProductDiv>)
    }
}
export { Product }
