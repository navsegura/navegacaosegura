import axios from "axios";
import { BASE_URL } from "./system";
import * as authService from "../services/auth-service";

export function requestBackend(config) {
        const headers = config.withCredentials 
    ? {
        ...config.headers,
        Authorization: "Bearer " + authService.getAccessToken(),
    }
    : config.headers;

    return axios({ ...config, baseURL: BASE_URL, headers })
}

export function noOauthRequest(config) {
        return axios({ ...config, baseURL: BASE_URL });
    
}