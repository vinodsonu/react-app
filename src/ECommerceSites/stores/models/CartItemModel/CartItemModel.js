import { observable, action } from 'mobx'
class CartItemModel {
    @observable quantity
    productId
    cartItemId
    constructor(item) {
        this.quantity = 1;
        this.product = item.product
        this.cartItemId = item.cartItemId
    }
    @action.bound
    incrementQuantity() {
        this.quantity += 1
    }
}
export { CartItemModel }
