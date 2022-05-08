import {environment} from "../../../../environments/environment";

const requestProtocol = window.location.protocol + '//';

export const serverAddress = requestProtocol + environment.baseUrl;

export const api = {
    login: {
        login: serverAddress + 'login',
        passwordRequest: serverAddress + 'login',
        passwordReset: serverAddress + 'login',
        logout: serverAddress + 'logout',
    },
    token: {
        verify: serverAddress + 'token/verify',
        refresh: serverAddress + 'token/refresh',
    }
}