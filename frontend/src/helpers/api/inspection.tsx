import { APICore } from "./apiCore";

const api = new APICore();

// account
export function list(page: Number = 1) {
  const baseUrl = "/inspection";
  return api.get(`${baseUrl}`, { page });
}

export function edit(params: any) {
  const baseUrl = `/inspection/${params.id}`;
  return api.createWithFile(`${baseUrl}`, params);
}

export function show(id: any) {
  const baseUrl = `/inspection/${id}`;
  return api.get(`${baseUrl}`, {});
}

export function add(params: any) {
  const baseUrl = "/inspection";
  return api.create(`${baseUrl}`, params);
}

export function remove(id: Number) {
  const baseUrl = `/inspection/${id}`;
  return api.delete(`${baseUrl}`);
}

export function removeDocument(id: Number) {
  const baseUrl = `/inspection-document/${id}`;
  return api.delete(`${baseUrl}`);
}

export function events() {
  const baseUrl = "/event-inspection";
  return api.get(`${baseUrl}`, {});
}
