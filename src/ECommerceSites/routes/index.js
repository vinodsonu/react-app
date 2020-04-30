import React from "react"
import { Route } from "react-router-dom"
import ECOMMERCEAPP_PATH from '../constants/ECommerceAppConstants'
import ECommerceAppRoute from './ECommerceAppRoute'
const routes = [<Route path={ECOMMERCEAPP_PATH} component={ECommerceAppRoute} />]

export default routes
