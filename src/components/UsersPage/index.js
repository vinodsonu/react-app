import React from "react"
import { observer, inject } from 'mobx-react'
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure'
import NoDataView from '../common/NoDataView'

@inject("usersStore")
@observer
class UsersPage extends React.Component {
    componentDidMount() {
        this.doNetworkCalls();
    }
    getStore = () => {
        return this.props.usersStore;
    }
    doNetworkCalls = () => {
        this.getStore().getUsers();
    }
    renderUsersList = () => {
        const { users } = this.getStore()
        if (users.length === 0) return (<NoDataView/>)
    
        return users.map((userName) => (<div>{userName}</div>))
    }
    render() {
        const {
            getUsersAPIStatus,
            getUsersAPIError,
        } = this.getStore()
        return (<LoadingWrapperWithFailure
                apiStatus={getUsersAPIStatus}
                apiError={getUsersAPIError}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI ={this.renderUsersList}
                />)
    }
}
export default UsersPage;
