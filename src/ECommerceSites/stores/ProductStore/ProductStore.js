import { observable, action, computed, toJS } from 'mobx';
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
    onSelectSize = (selectedSize) => {
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
    @action.bound
    filterProductsBasedOnSize(productList) {
        let { sizeFilter } = this
        let filteredProductsOnSize = []
        return filteredProductsOnSize = (sizeFilter.length !== 0) ?
            productList.filter((eachProduct) => {
                if (sizeFilter.filter((size) => eachProduct.availableSizes.includes(size)).length)
                    return eachProduct
            }) : this.productList
    }
    @action.bound
    filterProductsOnSort(filteredProductsOnSize) {
        let filteredProductsOnSort = []
        return filteredProductsOnSort = (this.sortBy === "ASCENDING") ?
            filteredProductsOnSize.sort((a, b) => a.price > b.price ? 1 : -1) :
            filteredProductsOnSize.sort((a, b) => a.price < b.price ? 1 : -1)
    }
    @action.bound
    filterProductsBasedOnText(filterProductsOnSort) {
        let productsToDisplay = []
        return productsToDisplay = filterProductsOnSort.filter((product) => {
            if (product.title.indexOf(this.selectedText) != -1)
                return product
        })
    }
    @computed
    get sortedAndFilteredProducts() {
        let { productList, selectedText, sortBy, sizeFilter } = this;
        let sizes = toJS(sizeFilter)
        let filterProductsBasedOnSize = this.filterProductsBasedOnSize(productList)
        let filterProductsOnSort = this.filterProductsOnSort(filterProductsBasedOnSize)
        let productsToDisplay = this.filterProductsBasedOnText(filterProductsOnSort)
        return productsToDisplay

    }
}
export { ProductStore }
