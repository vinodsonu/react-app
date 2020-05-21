import React from "react"
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import { withRouter } from "react-router-dom";

import {SignInForm}  from '../../components/SignInForm'

@inject("authStore")
@observer
class SignInRoute extends React.Component {
    @observable userName
    @observable password
    @observable errorMessage
    constructor() {
        super()
        this.userName = ''
        this.password = ''
        this.errorMessage = ''
    }
    @action.bound
    getStore() {
        return this.props.authStore
    }
    @action.bound
    onChangeUserName(event) {
        this.userName = event.target.value
    }
    @action.bound
    onChangePassword(event) {
        this.password = event.target.value
    }
    @action.bound
    onClickSignIn(event) {
        event.preventDefault()
        if (this.userName != '' && this.password != '') {
            this.getTokenForLogin()
        }
        else {
            this.errorMessage = this.userName.length === 0 ?
                "Please enter username" :
                "Please enter password"
        }
    }
    @action.bound
    async getTokenForLogin() {
        const { history } = this.props
        const response = await this.getStore().userSignIn();
        if (response != undefined)
            history.replace({ pathname: `/ECommerce-App` })

    }
    render() {
        return (
            <SignInForm userName={this.userName}
            password={this.password}
            onChangeUserName={this.onChangeUserName}
            onChangePassword={this.onChangePassword}
            errorMessage={this.errorMessage}
            onClickSignIn={this.onClickSignIn}
            />
        )
    }
}



export default withRouter(SignInRoute)
