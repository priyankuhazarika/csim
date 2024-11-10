// This file is auto-generated by @hey-api/openapi-ts

import {
  createClient,
  createConfig,
  type Options,
} from "@hey-api/client-axios";
import type {
  AppControllerGetHelloError,
  AppControllerGetHelloResponse,
  HealthControllerGetHealthError,
  HealthControllerGetHealthResponse,
  AuthControllerSignUpData,
  AuthControllerSignUpError,
  AuthControllerSignUpResponse,
  AuthControllerLoginData,
  AuthControllerLoginError,
  AuthControllerLoginResponse,
  AuthControllerProfileError,
  AuthControllerProfileResponse,
} from "./types.gen";

export const client = createClient(createConfig());

export const appControllerGetHello = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    AppControllerGetHelloResponse,
    AppControllerGetHelloError,
    ThrowOnError
  >({
    ...options,
    url: "/",
  });
};

export const healthControllerGetHealth = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    HealthControllerGetHealthResponse,
    HealthControllerGetHealthError,
    ThrowOnError
  >({
    ...options,
    url: "/health",
  });
};

export const authControllerSignUp = <ThrowOnError extends boolean = false>(
  options: Options<AuthControllerSignUpData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    AuthControllerSignUpResponse,
    AuthControllerSignUpError,
    ThrowOnError
  >({
    ...options,
    url: "/auth/signup",
  });
};

export const authControllerLogin = <ThrowOnError extends boolean = false>(
  options: Options<AuthControllerLoginData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    AuthControllerLoginResponse,
    AuthControllerLoginError,
    ThrowOnError
  >({
    ...options,
    url: "/auth/login",
  });
};

export const authControllerProfile = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    AuthControllerProfileResponse,
    AuthControllerProfileError,
    ThrowOnError
  >({
    ...options,
    url: "/auth/profile",
  });
};
