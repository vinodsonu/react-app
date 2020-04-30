import React from "react"
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getAccessToken } from '../../../utils/StorageUtils'

import {
    FormContainer,
    FormHeading,
    UserInput,
    UserPassword,
    SignInButton,
    MainDiv,
    SpanMessage,
}
from '../../styledComponents'

@inject("authStore")
@observer
class SignInForm extends React.Component {
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
        if (response[0] != undefined)
            history.replace({ pathname: `/ECommerce-App` })

    }
    render() {
        return (
            <MainDiv>
            <FormContainer>
                <FormHeading>Sign In</FormHeading>
                <UserInput type="text" placeholder="Username"
                onChange={this.onChangeUserName} value={this.userName}></UserInput>
                <UserPassword type="password" placeholder="Password"
                onChange={this.onChangePassword} value={this.password}></UserPassword>
                <SignInButton data-testid='sign-in-button' type="button" onClick={this.onClickSignIn}>Sign In</SignInButton>
                <SpanMessage>{this.errorMessage}</SpanMessage>
            </FormContainer>
            </MainDiv>)
    }
}
export default withRouter(SignInForm)
