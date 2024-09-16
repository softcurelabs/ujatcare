import { APICore } from "./apiCore";

const api = new APICore();

// account
export function user(page: Number = 1) {
  const baseUrl = "/user";
  return api.get(`${baseUrl}`, { page });
}

export function recident(page: Number = 1, filter: string) {
  const baseUrl = "/resident";
  return api.get(`${baseUrl}`, { page, filter });
}

export function sync(id: any) {
  const baseUrl = `/resident/sync/${id}`;
  return api.get(`${baseUrl}`, {});
}

export function occupants() {
  const baseUrl = "/occupants";
  return api.get(`${baseUrl}`, { });
}

export function edit(params: any) {
  const baseUrl = `/user/${params.id}`;
  return api.update(`${baseUrl}`, params);
}

export function reset(params: any) {
  const baseUrl = `/set-password/${params.id}`;
  return api.update(`${baseUrl}`, params);
}
export function permission(params: any) {
  const baseUrl = `/permission/${params.id}`;
  return api.update(`${baseUrl}`, params);
}
export function add(params: any) {
  const baseUrl = "/user";
  return api.create(`${baseUrl}`, params);
}

export function show(id: Number) {
  const baseUrl = `/user/${id}`;
  return api.get(`${baseUrl}`, {});
}

export function remove(id: Number) {
  const baseUrl = `/user/${id}`;
  return api.delete(`${baseUrl}`);
}

export function archive(id: Number, reason: number) {
    const baseUrl = `/user/${id}`;
    return api.update(`${baseUrl}`, {reason: reason});
  }

export function upload(id: Number, data: any) {
  const baseUrl = `/upload/${id}`;

  return api.createWithFile(baseUrl, data);
}

export function uploadDocuments(data: any) {
  const baseUrl = `/user/documents`;
  return api.createWithFile(`${baseUrl}`, data);
}

export function removeDocument(id: Number) {
  const baseUrl = `/user/document/${id}`;
  return api.delete(`${baseUrl}`);
}

export function importUser(data: any) {
  const baseUrl = `/user/import`;

  return api.createWithFile(baseUrl, data);
}

export function createBug(data: any) {
  const baseUrl = `/bug`;

  return api.createWithFile(baseUrl, data);
}
