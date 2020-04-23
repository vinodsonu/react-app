/*global fetch*/
import { observable, action } from 'mobx';
import {
    API_INITIAL,
    API_FETCHING,
    API_SUCCESS,
    API_FAILED,
}
from '@ib/api-constants';
import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'


class UserStore {
    @observable getUsersAPIStatus;
    @observable getUsersAPIError;
    @observable users;
    userService
    constructor(userService) {
        this.userService = userService
        this.init()
    }
    @action.bound
    getUsers() {
        const usersPromise = this.userService.getUsersAPI();
        console.log(usersPromise)
        return bindPromiseWithOnSuccess(usersPromise).to(this.setUsersAPIStatus, this.setUsersAPIResponse)
            .catch(this.setUsersAPIError)
    }
    @action.bound
    setUsersAPIResponse(usersResponse) {
        console.log(usersResponse)
        this.users = usersResponse.map((user) => user.name)
    }
    @action.bound
    setUsersAPIError(error) {
        console.log(2345, error)
        this.getUsersAPIError = error;
    }
    @action.bound
    setUsersAPIStatus(apiStatus) {
        this.getUsersAPIStatus = apiStatus;
    }
    @action.bound
    init() {
        this.getUsersAPIError = null;
        this.getUsersAPIStatus = API_INITIAL
        this.users = [];
    }
    @action.bound
    clearStore() {
        this.init();
    }
}
export default UserStore;
