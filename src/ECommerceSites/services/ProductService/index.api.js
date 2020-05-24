import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'

class ProductService {
    api
    constructor() {
        this.api = create({ baseURL: `https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/` })
    }
    getProductsAPI(offset) {
        return networkCallWithApisauce(
            this.api,
            `ecommerce/products?limit=3&offset=${offset}`, {},
            apiMethods.get
        )
    }
}
export default ProductService
