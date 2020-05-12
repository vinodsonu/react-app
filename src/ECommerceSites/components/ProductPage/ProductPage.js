import React from "react"
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import { withRouter } from "react-router-dom";
import CookieConsent from "react-cookie-consent";


import {
    ProductContainer,
    MainDiv,
    SignOutButton,
}
from '../../styledComponents'


import { clearUserSession, getAccessToken } from '../../../utils/StorageUtils'
import ProductList from '../ProductList'
import SizeFilter from '../SizeFilter'
import Header from '../Header'
import ProductCart from '../ProductCart'


@inject("productStore", 'cartStore')
@observer
class ProductPage extends React.Component {
    @action.bound
    onClickSignOut() {
        clearUserSession()
        const { history } = this.props
        history.replace({ pathname: `/Sign-In` })
    }
    render() {
        const { cartProductList } = this.props.cartStore;
        return (
            <MainDiv>
        <SignOutButton onClick={this.onClickSignOut}>SignOut</SignOutButton>
        <Header 
            productsFound={this.props.productStore.sortedAndFilteredProducts.length}
             onChangeSelectedText={this.props.productStore.onChangeSelectedText}
            onChangeSortBy={this.props.productStore.onChangeSortBy}
        />
        <ProductCart cartStore={this.props.cartStore}/>
        <ProductContainer>
        <SizeFilter productStore={this.props.productStore}/>
        <ProductList productStore={this.props.productStore}/>
        </ProductContainer>
         <CookieConsent
            location="bottom"
            buttonText="Sure man!!"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={365}>
                 This website uses cookies to enhance the user experience.{" "}
            </CookieConsent>
        </MainDiv>
        )
    }
}
export default withRouter(ProductPage)
