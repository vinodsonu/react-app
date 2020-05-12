import { Route, Redirect } from "react-router-dom";
import React from "react";

import ProductPage from '../../ECommerceSites/components/ProductPage'
import SignInRoute from '../../Authentication/routes/SignInRoute'

import { getAccessToken } from '../../utils/StorageUtils'

class ProtectedRoute extends React.Component {
    render() {
        const { component: Component, ...others } = this.props;
        console.log(Component)
        if (getAccessToken() === undefined)
            return (
                <Redirect exact path="/Sign-In" component={SignInRoute}></Redirect>
            )
        else
            return (
                <Route exact path="/ECommerce-App" component={Component}></Route>
            )
    }
}
export { ProtectedRoute }
