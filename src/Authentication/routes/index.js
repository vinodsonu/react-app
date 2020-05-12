import React from "react"
import { Route } from "react-router-dom"
import SIGN_IN_PATH from '../constants/RouteConstants'

import SignInRoute from "./SignInRoute"

const routes = [<Route path={SIGN_IN_PATH} component={SignInRoute} />]

export { routes }
