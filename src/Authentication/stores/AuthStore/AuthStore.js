import { observable, action, computed } from 'mobx';
import { observer, reaction } from 'mobx-react';

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import {
    API_INITIAL,
    API_FETCHING,
    API_SUCCESS,
    API_FAILED,
}
from '@ib/api-constants'

import { setAccessToken } from '../../../utils/StorageUtils'

class AuthStore {
    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError
    @observable authAPIService
    constructor(authAPIService) {
        this.authAPIService = authAPIService
        this.init()
    }
    @action.bound
    init() {
        this.getUserSignInAPIStatus = API_INITIAL
        this.getUserSignInAPIError = null
    }
    @action.bound
    userSignIn() {
        const AuthPromise = this.authAPIService.getAuthAPI()
        return bindPromiseWithOnSuccess(AuthPromise)
            .to(this.setGetUserSignInAPIStatus, this.setUserSignInAPIResponse)
            .catch(this.setGetUserSignInAPIError)
    }
    @action.bound
    setGetUserSignInAPIStatus(apiStatus) {
        this.getUserSignInAPIStatus = apiStatus
    }
    @action.bound
    setUserSignInAPIResponse(AuthResponse) {
        return setAccessToken(AuthResponse[0])
    }
    @action.bound
    setGetUserSignInAPIError(error) {
        this.getUserSignInAPIError = error
    }
}

export { AuthStore }
