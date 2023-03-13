import { AxiosRequestConfig } from "axios";
import QueryString from "qs";
import { AccessPayloadTokenDTO, CredentialsDTO, RoleEnum } from "../models/auth";
import { requestBackend } from "../utils/requests";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import * as accessTokenRepository from "../localstorage/access-token-repository";
import { history } from '../utils/history'
import jwtDecode from "jwt-decode";

export function loginRequest(loginData: CredentialsDTO) {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };
  const requestBody = QueryString.stringify({
    ...loginData,
    grant_type: "password",
  });
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/oauth/token",
    data: requestBody,
    headers,
  };
  return requestBackend(config);
}

export function logout() {
  accessTokenRepository.remove();
  history.push("/");
}

export function saveAccessToken(token: string) {
  accessTokenRepository.save(token);
}

export function getAccessToken(): string | null {
  return accessTokenRepository.get();
}

export function getAccessTokenPayload(): AccessPayloadTokenDTO | undefined {
  try {
    const token = accessTokenRepository.get();
    if (token == null) {
      return undefined;
    }
    const payload = jwtDecode(token) as AccessPayloadTokenDTO;
    return {
      exp: payload.exp,
      user_name: payload.user_name,
      authorities: payload.authorities,
    };
  } catch (error) {
    return undefined;
  }
}

export function isAuthenticated() : boolean {
    const tokenPayload = getAccessTokenPayload();
    if(tokenPayload && tokenPayload.exp * 1000 > Date.now()){
        return true;
    }
    return false;
}

export function hasAnyRoles(roles : RoleEnum[]) : boolean {
    if(roles.length === 0) {
        return true;
    }

    const tokenPayload = getAccessTokenPayload();
    
    if(tokenPayload !== undefined){
        return roles.some(role => tokenPayload.authorities.includes(role));
    }

    return false;
}
