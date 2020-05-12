import React from "react";
import { render } from "@testing-library/react";

import SignInForm from '.'

describe("SignInForm", () => {
    it("should render typed username", () => {
        const username = "test-user";
        const { getByPlaceholderText } = render(
            <SignInForm userName={username} onChangeUserName={() => {}} />
        );
        const usernameField = getByPlaceholderText("Username");
        expect(usernameField.value).toBe(username);
    })
    it("should render password", () => {
        const password = "test-password";
        const { getByPlaceholderText } = render(
            <SignInForm password={password}  onChangePassword={() => {}} />
        );
        const userPasswordField = getByPlaceholderText("Password");
        expect(userPasswordField.value).toBe(password)
    })
    it("on click submit button should display if it contains error", () => {
        const { getByText } = render(
            <SignInForm errorMessage={"invalid user"}/>
        )
        getByText(/invalid [A-Z][a-z]/i);
    })

})
