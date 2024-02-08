import { APICore } from "./apiCore";

const api = new APICore();

// account
export function maintanance(page: Number = 1) {
  const baseUrl = "/maintanance";
  return api.get(`${baseUrl}`, { page });
}

export function maintananceAdmin(page: Number = 1) {
  const baseUrl = "/maintanance-admin";
  return api.get(`${baseUrl}`, { page });
}

export function maintananceShow(id: string) {
  const baseUrl = `/maintanance/${id}`;
  return api.get(`${baseUrl}`, {});
}

export function maintananceDashboard() {
  const baseUrl = "/maintanance-dashboard";
  return api.get(`${baseUrl}`, {});
}

export function edit(params: any) {
  const baseUrl = `/maintanance/${params.id}`;
  return api.update(`${baseUrl}`, params);
}

export function add(params: any) {
  const baseUrl = "/maintanance";
  return api.create(`${baseUrl}`, params);
}

export function maintananceAdminEdit(params: any) {
  const baseUrl = `/maintanance-admin/${params.id}`;
  return api.update(`${baseUrl}`, params);
}
