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

const DisplayComponent = (props) => {
    return props.children
}
const SignInButtonFun = (props) => <SignInButton data-testid = 'sign-in-button'
onClick = { props.onClickSignIn } { ...props } type = "button"> Sign In </SignInButton>

const SignInInput = (props) => <props.Component type={props.type}  placeholder={props.placeholder}
                onChange={props.onChangeUserName} value={props.userName} />

@observer
class SignInForm extends React.Component {
    userNameRef = React.createRef();
    passwordRef = React.createRef();
    componentDidMount() {
        this.userNameRef.current.focus();
        this.passwordRef.current.focus();
    }
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
                <SignInInput type="text"  placeholder="Username"
                onChangeUserName={onChangeUserName} value={userName} Component="UserInput" />
                <SignInInput type="password" placeholder="Password"
                onChange={onChangePassword} value={password}/>
                <SignInButtonFun onClickSignIn={onClickSignIn} />
                <SpanMessage>{ errorMessage}</SpanMessage>
                <DisplayComponent>{null}</DisplayComponent>
            </FormContainer>
            </MainDiv>)
    }
}
export { SignInForm, SignInButtonFun, SignInInput                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }


// <MainDiv>
//             <FormContainer>
//                 <FormHeading>Sign In</FormHeading>
//                 <UserInput type="text" ref={this.userNameRef} placeholder="Username"
//                 onChange={onChangeUserName} value={userName}></UserInput>
//                 <UserPassword type="password" ref={this.passwordRef} placeholder="Password"
//                 onChange={onChangePassword} value={password}></UserPassword>
//                 <SignInButtonFun onClickSignIn={onClickSignIn} />
//                 <SpanMessage>{ errorMessage}</SpanMessage>
//                 <DisplayComponent>{null}</DisplayComponent>
//             </FormContainer>
//             </MainDiv>)
