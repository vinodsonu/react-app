import usersResponse from '../../fixtures/getUsersResponse.json'


class UserFixtureService {
    api
    getUsersAPI() {
        return new Promise((resolve, reject) => {
            resolve(usersResponse)
        })
    }
}
export default UserFixtureService
