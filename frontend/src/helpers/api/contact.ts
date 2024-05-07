import { APICore } from "./apiCore";

const api = new APICore();

export function add(params: any) {
  const baseUrl = "/contact-office";
  return api.create(`${baseUrl}`, params);
}
