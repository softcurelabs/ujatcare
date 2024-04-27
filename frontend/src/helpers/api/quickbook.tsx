import { APICore } from "./apiCore";

const api = new APICore();

// account
export function connect() {
  const baseUrl = "/quickbook";
  return api.get(`${baseUrl}`, { });
}

export function add(params: any) {
  const baseUrl = "/quickbook";
  return api.create(`${baseUrl}`, params);
}
