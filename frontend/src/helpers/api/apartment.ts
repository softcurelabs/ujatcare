import { APICore } from "./apiCore";

const api = new APICore();

export function edit(params: any) {
    const baseUrl = `/apartment/${params.id}`;
    return api.update(`${baseUrl}`, params);
}

export function add(params: any) {
    const baseUrl = "/apartment";
    return api.create(`${baseUrl}`, params);
}

export function remove(id: Number) {
    const baseUrl = `/apartment/${id}`;
    return api.delete(`${baseUrl}`);
}
