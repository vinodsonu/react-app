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
const SignInButtonFun = (props) => <SignInButton 
onClick = { props.onClickSignIn } { ...props } type = "button">{props.text}</SignInButton>

const InputFieldFun = (props) => <UserInput type={props.type} onChange={props.onChange} value={props.value}/>

@observer
class SignInForm extends React.Component {
    userNameRef = React.createRef();
    passwordRef = React.createRef();
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
                <InputFieldFun type="text"  placeholder="Username"
                onChange={onChangeUserName} value={userName}/>
                <InputFieldFun type="password" placeholder="Password"
                onChange={onChangePassword} value={password}/>
                <SignInButtonFun 
                onClickSignIn={onClickSignIn}
                text={"Sign In"}
                />
                <SpanMessage>{ errorMessage}</SpanMessage>
            </FormContainer>
            </MainDiv>)
    }
}
export { SignInForm, SignInButtonFun, InputFieldFun }


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
