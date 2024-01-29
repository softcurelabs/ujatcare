import { APICore } from "./apiCore";

const api = new APICore();

// account
export function notice(page: Number = 1) {
  const baseUrl = "/notice";
  return api.get(`${baseUrl}`, { page });
}

export function noticeHighlight(page: Number = 1) {
  const baseUrl = "/notice-highlight";
  return api.get(`${baseUrl}`, { page });
}

export function edit(params: any) {
  const baseUrl = `/notice/${params.id}`;
  return api.update(`${baseUrl}`, params);
}

export function add(params: any) {
  const baseUrl = "/notice";
  return api.create(`${baseUrl}`, params);
}

export function show(id: Number) {
  const baseUrl = `/notice/${id}`;
  return api.get(`${baseUrl}`, {});
}

export function remove(id: Number) {
  const baseUrl = `/notice/${id}`;
  return api.delete(`${baseUrl}`);
}
