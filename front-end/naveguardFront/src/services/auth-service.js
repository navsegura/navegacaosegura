import queryString from "query-string";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { requestBackend } from "../utils/requests";
import * as accessTokenRepository from "../localstorage/access-token-repository";
import { jwtDecode } from "jwt-decode";

export function loginRequest(loginData) {
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    };

    const requestBody = queryString.stringify({
        ...loginData,
        grant_type: "password",
    });

    const config = {
        method: "POST",
        url: "/oauth2/token",
        data: requestBody,
        headers,
    };

    return requestBackend(config);
}

export function logout() {
    accessTokenRepository.remove();
}

export function saveAccessToken(token) {
    accessTokenRepository.save(token);
}

export function getAccessToken() {
    return accessTokenRepository.get();
}

function AccessTokenPayloadDTO(token) {
        const tokenDecoded = jwtDecode(token);
        const tokenObj = {
        exp: tokenDecoded.exp,
        user_name: tokenDecoded.username,
        authorities: tokenDecoded.authorities,
        }
        return tokenObj;
}

export function getAccessTokenPayload() {
    try {
        const token = accessTokenRepository.get();
        return token == null
          ? undefined
          : (AccessTokenPayloadDTO(token));
      } catch (errors) {
        console.log(errors);
        return undefined;
      }
}

export function isAuthenticated() {
    let tokenPayload = getAccessTokenPayload();
    return tokenPayload && tokenPayload.exp * 1000 > Date.now() ? true : false;
  }

  export function hasAnyRoles(roles) {
    
    if (roles.length === 0) {
      return true;
    }
    const tokenPayload = getAccessTokenPayload();
    if (tokenPayload !== undefined) {
      for (var i = 0; i < roles.length; i++) {
        if (tokenPayload.authorities.includes(roles[i])) {
          return true;
        }
      }
      //return roles.some(role => tokenData.authorities.includes(role));
    }
    return false;
  }