import React from 'react';
import { observer } from 'mobx-react';
import { observable, action, computed, reaction } from 'mobx';
import {
    API_INITIAL,
    API_FETCHING,
    API_SUCCESS,
    API_FAILED,
}
from '@ib/api-constants';

import HomePage from '../HomePage/index'

@observer
class LoginApp extends React.Component {
    @observable apiStatus = API_INITIAL
    @action.bound
    setLoginAPIStatus() {
        this.apiStatus = API_SUCCESS
    }
    @action.bound
    redirect() {
        HomePage.gotoGridScreenIfLoggedIn(12)
    }
    onChangeAPIStatus = reaction(() => this.apiStatus,
        (status) => { if (status === API_SUCCESS) this.redirect() })
    render() {
        console.log(HomePage.token)
        return (<div>
        <button onClick={this.setLoginAPIStatus}>login</button>
        </div>)
    }
}
export default LoginApp
