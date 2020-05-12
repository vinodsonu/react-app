/*global expect*/
import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL
}
from "@ib/api-constants";
import productResponse from '../../fixtures/getProductsResponse.json'
import ProductModel from '../models/ProductModel'
import CartItemModel from '../models/CartItemModel'
import ProductStore from '../ProductStore'
import CartStore from '.'
describe("cartStore tests", () => {
    let cartStore
    let productStore
    beforeEach(() => {
        productStore = new ProductStore()
        cartStore = new CartStore(productStore)
    })
    it("should test initial cartStore values", () => {
        expect(cartStore.cartProductList).toStrictEqual([])
    })
    it("should add product to the cart if not present", () => {
        let productId = 12
        cartStore.onClickAddToCart(productId)
        expect(cartStore.cartProductList.length).toBe(1)
    })
    it("should not add the item if already present", () => {
        let productId = 12
        productStore.setProductsListAPIResponse(productResponse)
        let product = cartStore.getProduct(productId)
        cartStore.cartProductList = [(new CartItemModel({ product: product[0], cartItemId: Math.random() }))]
        cartStore.onClickAddToCart(productId)
        expect(cartStore.cartProductList.length).toBe(1)
    })
    it("should test the number of items returned", () => {
        let productId = 12
        let cartItemId = Math.random()
        productStore.setProductsListAPIResponse(productResponse)
        let product = cartStore.getProduct(productId)
        cartStore.cartProductList = [(new CartItemModel({ product: product[0], cartItemId: cartItemId }))]
        expect(cartStore.getProductDetailsById().length).toBe(1)
    })
    it("should clear cart", () => {
        cartStore.clearCart()
        expect(cartStore.cartProductList).toStrictEqual([])
    })
    it("should remove an item from cart", () => {
        let productId = 12
        let cartItemId = Math.random()
        productStore.setProductsListAPIResponse(productResponse)
        let product = cartStore.getProduct(productId)
        cartStore.cartProductList = [(new CartItemModel({ product: product[0], cartItemId: cartItemId }))]
        cartStore.onRemoveCartItem(cartItemId)
        expect(cartStore.cartProductList.length).toBe(0)
    })
    it("it should test the total amount displayed in the cart", () => {
        let product1Id = 12;
        let product2Id = 14;
        productStore.setProductsListAPIResponse(productResponse)
        let product1 = cartStore.getProduct(product1Id)
        let product2 = cartStore.getProduct(product2Id)
        let cartItem1 = (new CartItemModel({ product: product1[0], cartItemId: Math.random() }))
        let cartItem2 = (new CartItemModel({ product: product2[0], cartItemId: Math.random() }))
        cartStore.cartProductList = [cartItem1, cartItem2]
        expect(cartStore.totalCartAmount).toStrictEqual(845.24 + 692.82)
    })
    it("should test the quantity of products in the cart", () => {
        let product1Id = 12;
        let product2Id = 14;
        productStore.setProductsListAPIResponse(productResponse)
        let product1 = cartStore.getProduct(product1Id)
        let product2 = cartStore.getProduct(product2Id)
        let cartItem1 = (new CartItemModel({ product: product1[0], cartItemId: Math.random() }))
        let cartItem2 = (new CartItemModel({ product: product2[0], cartItemId: Math.random() }))
        cartStore.cartProductList = [cartItem1, cartItem2]
        cartStore.onClickAddToCart(product1Id)
        cartStore.onClickAddToCart(product1Id)
        expect(cartStore.noOfProductsInCart).toStrictEqual(4)
    })
})
