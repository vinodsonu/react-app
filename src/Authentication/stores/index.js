import AuthService from '../services/AuthService/index.api'
import AuthStore from './AuthStore'
let authStore = new AuthStore(new AuthService())

export default { authStore };
