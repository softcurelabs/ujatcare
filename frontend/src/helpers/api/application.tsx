import { APICore } from "./apiCore";

const api = new APICore();

// account
export function list(filter: string, page: Number = 1) {
  const baseUrl = "/application";
  return api.get(`${baseUrl}`, { page, filter });
}

export function edit(params: any) {
  const baseUrl = `/application/${params.id}`;
  return api.update(`${baseUrl}`, params);
}

export function add(params: any) {
  const baseUrl = "/application";
  return api.createWithFile(`${baseUrl}`, params);
}

export function assignFlat(id: Number, params: any) {
  const baseUrl = `/application-to-user/${id}`;
  return api.create(`${baseUrl}`, params);
}

export function archive(id: number) {
    const baseUrl = `/application-archive/${id}`;
    return api.create(`${baseUrl}`, {});
}

export function unarchive(id: number) {
const baseUrl = `/application-unarchive/${id}`;
return api.create(`${baseUrl}`, {});
}

export function remove(id: number) {
const baseUrl = `/application/${id}`;
return api.delete(`${baseUrl}`);
}
