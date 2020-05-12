import productResponse from '../../fixtures/getProductsResponse.json'


class ProductFixtureService {
    api
    getUsersAPI() {
        return new Promise((resolve, reject) => {
            resolve(productResponse)
        })
    }
}
export default ProductFixtureService
