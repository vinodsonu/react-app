/*global expect*/
import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL
}
from "@ib/api-constants";
import ProductService from '../../services/ProductService/index.api'
import ProductFixtureService from '../../services/ProductService/index.fixture'
import productResponse from '../../fixtures/getProductsResponse.json'
import ProductModel from '../models/ProductModel'
import ProductStore from '.'
describe("ProductStore tests", () => {
    let productService;
    let productStore;
    beforeEach(() => {
        productService = new ProductService()
        productStore = new ProductStore(productService)
    })
    it("should test initialising  Product store", () => {
        expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
        expect(productStore.getProductListAPIError).toBe(null);
    })
    it("should test products fetching state", () => {
        let mockLoadingPromise = new Promise(function(resolve, reject) {})
        let mockGetProductsAPI = jest.fn()
        mockGetProductsAPI.mockReturnValue(mockLoadingPromise)
        productService.getProductsAPI = mockGetProductsAPI
        productStore.getProducts()
        expect(productStore.getProductListAPIStatus).toBe(API_FETCHING)
    })
    it("should test products success state", async() => {
        let mockSuccessPromise = new Promise(function(resolve, reject) { resolve(productResponse) })
        let mockGetProductsAPI = jest.fn()
        mockGetProductsAPI.mockReturnValue(mockSuccessPromise)
        productService.getProductsAPI = mockGetProductsAPI
        await productStore.getProducts()
        expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS)
    })
    it("should test  change sort by function", () => {
        const sortVal = "Assending"
        productStore.onChangeSortBy(sortVal)
        expect(productStore.sortBy).toBe(sortVal)

    })
    it("should change the selected text when user enters in the search bar", () => {
        let textEntered = "denim"
        productStore.onChangeSelectedText(textEntered)
        expect(productStore.selectedText).toBe(textEntered)
    })
    it("should test onSelectSize if sizeSelector already contains given size", () => {
        const selectedSize = "sample_Size"
        productStore.sizeFilter = []
        productStore.onSelectSize(selectedSize)
        expect(productStore.sizeFilter.length).toBe(1)
    })
    it("should test onSelectSize if sizeSelector does not  contain given size", () => {
        const selectedSize = "sample_Size"
        productStore.sizeFilter = [selectedSize]
        productStore.onSelectSize(selectedSize)
        expect(productStore.sizeFilter.length).toBe(0)
    })
    it("should filter products based on price value in ascending order", () => {
        let productsWithPrices = [{ price: 100 }, { price: 200 }, { price: 50 }]
        productStore.sortBy = "ASCENDING"
        let filterProductsOnSort = productStore.filterProductsOnSort(productsWithPrices)
        expect(filterProductsOnSort).toContainEqual({ price: 50 }, { price: 100 }, { price: 200 })
    })
    it("should filter products based on price value in descending order", () => {
        let productsWithPrices = [{ price: 100 }, { price: 200 }, { price: 50 }]
        productStore.sortBy = "DESCENDING"
        let filterProductsOnSort = productStore.filterProductsOnSort(productsWithPrices)
        expect(filterProductsOnSort).toContainEqual({ price: 200 }, { price: 100 }, { price: 50 })
    })
    it("should show filtered and sorted products", () => {
        productStore.setProductsListAPIResponse(productResponse)
        let filterProductsBasedOnSize = productStore.filterProductsBasedOnSize(productStore.productList)
        let filterProductsOnSort = productStore.filterProductsOnSort(filterProductsBasedOnSize)
        let productsToDisplay = productStore.filterProductsBasedOnText(filterProductsOnSort)
        expect(productStore.sortedAndFilteredProducts).toStrictEqual(productsToDisplay)
    })
})
