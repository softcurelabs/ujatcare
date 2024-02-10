import { ResetPasswordType } from "../../types/ResetPasswordType";
import { APICore } from "./apiCore";

const api = new APICore();

// account
function login(params: { email: string; password: string }) {
  const baseUrl = "/auth/login";
  return api.create(`${baseUrl}`, params);
}

function customerLogin(params: {
  email: string;
  password: string;
  apartment_id: number;
  flat_id: number;
}) {
  const baseUrl = "/auth/rent-login";
  return api.create(`${baseUrl}`, params);
}

function logout() {
  const baseUrl = "/logout/";
  return api.create(`${baseUrl}`, {});
}

function signup(params: { fullname: string; email: string; password: string }) {
  const baseUrl = "/register/";
  return api.create(`${baseUrl}`, params);
}

function forgotPassword(params: { email: string }) {
  const baseUrl = "/auth/forgot-password";
  return api.create(`${baseUrl}`, params);
}

function resetPassword(params: ResetPasswordType) {
  const baseUrl = "/auth/reset-password";
  return api.create(`${baseUrl}`, params);
}

function profile() {
  const baseUrl = "/auth/profile";
  return api.get(`${baseUrl}`, {});
}

export {
  login,
  logout,
  signup,
  forgotPassword,
  customerLogin,
  resetPassword,
  profile,
};
