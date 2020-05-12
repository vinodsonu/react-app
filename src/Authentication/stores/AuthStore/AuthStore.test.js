import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL
}
from "@ib/api-constants";
import Cookie from 'js-cookie'
import AuthService from '../../services/AuthService/index.api.js'
import AuthStore from '.'

let mockSetCookie = jest.fn()
let mockRemoveCookie = jest.fn()

Cookie.set = mockSetCookie
Cookie.remove = mockRemoveCookie

describe("AuthStore Tests", () => {
    let authService;
    let authStore;
    beforeEach(() => {
        authService = new AuthService()
        authStore = new AuthStore(authService)
    })
    it("should test initialising auth store", () => {
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
    })
    it("should test userSignInAPI data fetching", () => {
        const mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authService.getAuthAPI = mockSignInAPI;
        authStore.userSignIn();
        expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING)
    })
    it("should test userSignInAPI success state", async() => {
        const mockSuccessPromise = new Promise(function(resolve, reject) { resolve([{ name: "roony" }]) });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise)
        authService.getAuthAPI = mockSignInAPI
        expect(authService.getAuthAPI()).toBe(mockSuccessPromise)
        await authStore.userSignIn()
        expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS);
        expect(mockSetCookie).toBeCalled();
    })
    it("should test userSignInAPI failure state", async() => {
        const mockSuccessPromise = new Promise(function(resolve, reject) { reject() });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise)
        console.log(mockSuccessPromise)
        authService.getAuthAPI = mockSignInAPI
        expect(authService.getAuthAPI()).toBe(mockSuccessPromise)
        await authStore.userSignIn()
        expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);
        expect(mockSetCookie).toBeCalled();
    })
})
