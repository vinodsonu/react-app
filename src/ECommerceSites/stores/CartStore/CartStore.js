import { observable, action, computed } from 'mobx'

import CartItemModel from '../models/CartItemModel'
class CartStore {
    totalNumberOfProducts
    @observable cartProductList
    productStore
    constructor(productStore) {
        this.productStore = productStore
        this.init()
    }
    @action.bound
    init() {
        this.cartProductList = []
    }
    @action.bound
    onClickAddToCart(productId) {
        let cartItem = []
        let product = this.getProduct(productId)
        cartItem = this.cartProductList.filter((cartItem) => {
            if (cartItem.product.productId === productId)
                return cartItem
        })
        if (cartItem.length != 0 && this.cartProductList.length != 0) {
            cartItem[0].incrementQuantity()
        }
        else
            this.cartProductList.push(new CartItemModel({ product: product[0], cartItemId: Math.random() }))

    }
    @action.bound
    getProduct(productId) {
        return this.productStore.productList.filter((product) => product.productId === productId)

    }
    @action.bound
    clearCart() {
        this.cartProductList = []
    }
    @action.bound
    onRemoveCartItem(cartItemId) {
        let index = this.cartProductList.findIndex((item) => item.cartItemId === cartItemId)
        this.cartProductList.splice(index, 1)
    }
    @action.bound
    getProductDetailsById() {
        return this.cartProductList
    }
    @computed
    get totalCartAmount() {
        let totalCartAmount = 0
        this.cartProductList.forEach((cartItem) => { totalCartAmount += cartItem.quantity * cartItem.product.price })
        return totalCartAmount

    }
    @computed
    get noOfProductsInCart() {
        let totalProducts = 0
        this.cartProductList.forEach((cartItem) => { totalProducts += cartItem.quantity })
        return totalProducts
    }
}
export { CartStore }
