/*global jest*/

import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";

import { E_COMMERCE_SIGN_IN_PATH } from '../../constants/RouteConstants'
import { E_COMMERCE_PRODUCTS_PATH } from '../../../ECommerceSites/constants/RouteConstants'

import AuthService from "../../services/AuthService/index.api";
import AuthStore from "../../stores/AuthStore";

import SignInRoute from ".";

import {
    API_INITIAL,
    API_FETCHING,
    API_SUCCESS,
    API_FAILED,
}
from '@ib/api-constants'

const LocationDisplay = withRouter(({ location }) => {
    console.log(1111, location.pathname)
    return <div data-testid="location-display">{location.pathname}</div>
});

describe("SignInRoute Tests", () => {
    let authService;
    let authStore;
    beforeEach(() => {
        authService = new AuthService();
        authStore = new AuthStore(authService);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });
    it("should render username empty error message", () => {
        const { getByText, getByRole } = render(
            <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
        );
        const signInButton = getByRole("button", { name: "Sign In" });

        fireEvent.click(signInButton);

        getByText(/Please enter username/i);
    });
    it("should render password empty error message", () => {
        const { getByText, getByRole, getByPlaceholderText } = render(
            <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
        );
        const username = "sonu";
        const usernameField = getByPlaceholderText("Username")
        const signInButton = getByRole("button", { name: "Sign In" });
        fireEvent.change(usernameField, { target: { value: username } })
        fireEvent.click(signInButton)
        getByText(/please enter password/i);
    })
    it("should submit sign-in on press enter", () => {
        const { getByLabelText, getByPlaceholderText, getByRole } = render(
            <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
        );
        const username = "test-user";
        const password = "test-password";

        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "Sign In" });

        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.keyPress(signInButton, { key: "Enter", code: "Enter" });
    });
    it("should render signInRoute success state", async() => {
        const history = createMemoryHistory();
        const route = E_COMMERCE_SIGN_IN_PATH;
        history.push(route);

        const {
            getByPlaceholderText,
            getByRole,
            queryByRole,
            queryByLabelText,
            getByTestId,
            debug
        } = render(
            <Provider authStore={authStore}>
        <Router history={history}>
          <Route path={E_COMMERCE_SIGN_IN_PATH}>
            <SignInRoute />
          </Route>
          <Route path={E_COMMERCE_PRODUCTS_PATH}>
            <LocationDisplay />
          </Route>
        </Router>
      </Provider>
        );

        const username = "test-user";
        const password = "test-password";

        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "Sign In" });

        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve([{ access_token: 1222323233 }]);
        });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authService.getAuthAPI = mockSignInAPI;

        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signInButton);

        await waitFor(() => {
            expect(getByTestId("location-display")).toHaveTextContent(
                E_COMMERCE_PRODUCTS_PATH
            );
            debug()
            expect(
                queryByRole("button", { name: "Sign in" })
            ).not.toBeInTheDocument();
        });
    });
    it("should render signInRoute success state", async() => {
        const history = createMemoryHistory();
        const route = E_COMMERCE_SIGN_IN_PATH;
        history.push(route);

        const {
            getByPlaceholderText,
            getByRole,
            queryByRole,
            queryByLabelText,
            getByTestId
        } = render(
            <Provider authStore={authStore}>
        <Router history={history}>
          <Route path={E_COMMERCE_SIGN_IN_PATH}>
            <SignInRoute />
          </Route>
          <Route path={E_COMMERCE_PRODUCTS_PATH}>
            <LocationDisplay />
          </Route>
        </Router>
      </Provider>
        );
        const username = "test-user";
        const password = "test-password";

        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "Sign In" });

        const mockSuccessPromise = new Promise(function(resolve, reject) {
            reject([{}]);
        });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authService.getAuthAPI = mockSignInAPI;

        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signInButton);
        waitFor(() => {
            expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED)
        })
    })

})
