import { requestBackend } from "../utils/requests"

export function findMe() {
    const config = {
        url: '/api/user/me',
        withCredentials: true
    }

    return requestBackend(config);
}