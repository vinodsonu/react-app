import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

import NoDataView from '../../../components/common/NoDataView'
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure'

import { ProductListContainer } from '../../styledComponents'
import Product from '../Product'

@observer
class ProductList extends React.Component {
    componentDidMount() {
        this.doNetworkCalls()
    }
    @action.bound
    getStore() {
        return this.props.productStore
    }
    @action.bound
    doNetworkCalls() {
        this.getStore().getProducts()
    }
    renderproductsList = observer(() => {
        const { sortedAndFilteredProducts, productList } = this.getStore()
        if (sortedAndFilteredProducts.length === 0) return (<NoDataView/>)
        return (
            <ProductListContainer>
        {this.getStore().sortedAndFilteredProducts.map((product) => <Product product={product}/>)}
        </ProductListContainer>
        )
    })
    render() {
        const {
            getProductListAPIStatus,
            getProductsListAPIError,
        } = this.getStore()
        return (<LoadingWrapperWithFailure
        apiStatus={getProductListAPIStatus}
        apiError={getProductsListAPIError}
        onRetryClick={this.doNetworkCalls}
        renderSuccessUI ={this.renderproductsList}
        />)
    }
}
export { ProductList }
