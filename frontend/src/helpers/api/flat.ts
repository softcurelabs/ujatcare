import { APICore } from "./apiCore";

const api = new APICore();

// account
export function flats() {
  const baseUrl = "/flats";
  return api.get(`${baseUrl}`, {});
}
