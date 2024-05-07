import { APICore } from "./apiCore";

const api = new APICore();

// account
export function list(page: Number = 1, filter: string = "") {
  const baseUrl = "/invoice";
  return api.get(`${baseUrl}`, { page, filter });
}

export function edit(params: any) {
  const baseUrl = `/invoice/${params.id}`;
  return api.update(`${baseUrl}`, params);
}

export function show(id: any) {
  const baseUrl = `/invoice/${id}`;
  return api.get(`${baseUrl}`, {});
}

export function sync(id: any) {
  const baseUrl = `/invoice/sync/${id}`;
  return api.get(`${baseUrl}`, {});
}

export function add(params: any) {
  const baseUrl = "/invoice";
  return api.create(`${baseUrl}`, params);
}

export function remove(id: Number) {
  const baseUrl = `/invoice/${id}`;
  return api.delete(`${baseUrl}`);
}
