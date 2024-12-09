import { noOauthRequest, requestBackend } from "../utils/requests"

export function findMe() {
    const config = {
        url: '/api/user/me',
        withCredentials: true
    }

    return requestBackend(config);
}

export function register(requestBody) {
    const headers = {
        "Content-Type": "application/json"
    }


    const config = {
        method: "POST",
        url: "/api/user",
        data: requestBody,
        headers
    }

    return noOauthRequest(config);
}