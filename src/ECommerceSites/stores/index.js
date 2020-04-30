import ProductService from '../services/ProductService/index.api'
import ProductStore from './ProductStore'
import CartStore from './CartStore'

let productStore = new ProductStore(new ProductService)
let cartStore = new CartStore(new ProductStore)

export default { productStore, cartStore };
