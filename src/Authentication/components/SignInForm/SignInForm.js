import React from "react"
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

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

@observer
class SignInForm extends React.Component {
    render() {
        const {
            onChangeUserName,
            onChangePassword,
            userName,
            password,
            errorMessage,
            onClickSignIn
        } = this.props
        return (
            <MainDiv>
            <FormContainer>
                <FormHeading>Sign In</FormHeading>
                <UserInput type="text" placeholder="Username"
                onChange={onChangeUserName} value={userName}></UserInput>
                <UserPassword type="password" placeholder="Password"
                onChange={onChangePassword} value={password}></UserPassword>
                <SignInButton data-testid='sign-in-button' type="button" onClick={onClickSignIn}>Sign In</SignInButton>
                <SpanMessage>{ errorMessage}</SpanMessage>
            </FormContainer>
            </MainDiv>)
    }
}
export { SignInForm }
