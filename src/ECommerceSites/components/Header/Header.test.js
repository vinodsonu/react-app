import { render, fireEvent } from "@testing-library/react";

import React from "react";
import ProductStore from "../../stores/ProductStore";
import Header from '.'

describe("Header Component tests", () => {
    let productStore
    beforeEach(() => {
        productStore = new ProductStore()
    })
    it("should render searched product", () => {

        const product_Searched = "test_product"
        const { getByPlaceholderText, getByDisplayValue } = render(
            <Header
             onChangeSelectedText={productStore.onChangeSelectedText}
            onChangeSortBy={productStore.onChangeSortBy}
            />
        )
        fireEvent.change(getByPlaceholderText("Search Product"), { target: { value: product_Searched } })
        getByDisplayValue(product_Searched)

    })
    it("should display the number of products", () => {
        const { getByDisplayValue, getByText } = render(
            <Header
            productsFound={productStore.sortedAndFilteredProducts.length}
            />
        )
        getByText(productsFound)
    })
})
