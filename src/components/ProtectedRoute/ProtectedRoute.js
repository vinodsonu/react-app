import { Route, Redirect } from "react-router-dom";
import React from "react";

import ProductPage from '../../ECommerceSites/components/ProductPage'
import SignInForm from '../../Authentication/components/SignInForm'

import { getAccessToken } from '../../utils/StorageUtils'

class ProtectedRoute extends React.Component {
    render() {
        const { component: Component, ...others } = this.props;
        console.log(Component)
        if (getAccessToken() === undefined)
            return (
                <Redirect exact path="/Sign-In" component={SignInForm}></Redirect>
            )
        else
            return (
                <Route exact path="/ECommerce-App" component={Component}></Route>
            )
    }
}
export { ProtectedRoute }
