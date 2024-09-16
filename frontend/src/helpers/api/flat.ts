import { APICore } from "./apiCore";

const api = new APICore();

// account
export function flats() {
  const baseUrl = "/flats";
  return api.get(`${baseUrl}`, {});
}

export function show(id: number) {
    const baseUrl = `/flat/${id}`;
    return api.get(`${baseUrl}`, {});
  }

export function edit(params: any) {
    const baseUrl = `/flat/${params.id}`;
    return api.update(`${baseUrl}`, params);
}

export function add(params: any) {
    const baseUrl = "/flat";
    return api.create(`${baseUrl}`, params);
}

export function remove(id: Number) {
    const baseUrl = `/flat/${id}`;
    return api.delete(`${baseUrl}`);
}
