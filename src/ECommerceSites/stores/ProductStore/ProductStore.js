import { observable, action, computed } from 'mobx';
import { observer, reaction } from 'mobx-react';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import {
    API_INITIAL,
    API_FETCHING,
    API_SUCCESS,
    API_FAILED,
}
from '@ib/api-constants';

import ProductModel from '../models/ProductModel'
class ProductStore {
    @observable productList
    @observable noOfProductsToDisplay = 0
    @observable getProductListAPIStatus
    @observable getProductListAPIError
    @observable productsAPIService
    @observable sizeFilter
    @observable selectedText
    @observable sortBy
    ProductService
    constructor(ProductService) {
        this.ProductService = ProductService
        this.init();
    }
    @action.bound
    init() {
        this.productList = []
        this.getProductListAPIStatus = API_INITIAL
        this.getProductListAPIError = null
        this.sizeFilter = []
        this.sortBy = "select"
        this.selectedText = ""
    }
    @action.bound
    getProducts() {
        const ProductService = this.ProductService.getProductsAPI();
        return bindPromiseWithOnSuccess(ProductService)
            .to(this.setProductsListAPIStatus, this.setProductsListAPIResponse)
            .catch(this.setProductsListAPIError);
    }
    @action.bound
    setProductsListAPIResponse(ProductResponse) {
        this.productList = ProductResponse.map((product) => new ProductModel(product))
    }
    @action.bound
    setProductsListAPIStatus(apiStatus) {
        this.getProductListAPIStatus = apiStatus
    }
    @action.bound
    setProductsListAPIError(error) {
        this.getProductListAPIError = error
    }
    @action.bound
    onSelectSize(selectedSize) {
        if (this.sizeFilter.includes(selectedSize)) {
            let index = this.sizeFilter.indexOf(selectedSize)
            this.sizeFilter.splice(index, 1)
        }
        else
            this.sizeFilter.push(selectedSize)
    }
    @action.bound
    onChangeSelectedText(typedText) {
        this.selectedText = typedText
    }
    @action.bound
    onChangeSortBy(sortVal) {
        this.sortBy = sortVal
    }
    @computed
    get sortedAndFilteredProducts() {
        let productsToDisplay = []
        let filteredProductsOnSize = []
        let filteredProductsOnSort = []
        filteredProductsOnSize = (this.sizeFilter.length !== 0) ?
            this.productList.filter((eachProduct) => {
                if (this.sizeFilter.filter((size) => eachProduct.availableSizes.includes(size)).length)
                    return eachProduct
            }) : this.productList
        filteredProductsOnSort = (this.sortBy === "ASCENDING") ?
            filteredProductsOnSize.sort((a, b) => a.price > b.price ? 1 : -1) :
            filteredProductsOnSize.sort((a, b) => a.price < b.price ? 1 : -1)
        productsToDisplay = filteredProductsOnSort.filter((product) => {
            if (product.title.indexOf(this.selectedText) != -1)
                return product
        })
        return productsToDisplay
    }
}
export { ProductStore }
