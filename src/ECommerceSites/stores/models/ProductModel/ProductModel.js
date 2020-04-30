import React from 'react'
import { observable, action, computed } from 'mobx'
import { observer } from 'mobx-react'

class ProductModel {
    productId
    availableSizes
    currencyFormat
    currencyId
    description
    installmentsCount
    isFreeShipping
    price
    printStyle
    title
    imageURL
    constructor(product) {
        this.productId = product.id
        this.availableSizes = product.availableSizes
        this.currencyFormat = product.currencyFormat
        this.currencyId = product.currencyId
        this.description = product.description
        this.installmentsCount = product.installments
        this.isFreeShipping = product.isFreeShipping
        this.price = product.price
        this.printStyle = product.style
        this.title = product.title
        this.imageURL = this.productId === 7 ? (
            'https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/s960x960/46521192_898709223655940_8802703745675689984_o.jpg?_nc_cat=111&_nc_sid=7aed08&_nc_ohc=fcEIOi4xZlYAX_sjHTW&_nc_ht=scontent.fmaa1-1.fna&_nc_tp=7&oh=a21e5fca6de1858bdd971af72b19702a&oe=5ECE7253') : (product.image)
    }
}
export { ProductModel }
