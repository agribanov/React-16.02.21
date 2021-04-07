import api from '../../../api';
import { CONTACTS_URI } from '../constants';

export function getList() {
    return api.get(CONTACTS_URI);
}

export function create(data) {
    return api.post(CONTACTS_URI, data);
}

export function update(data) {
    return api.put(`${CONTACTS_URI}/${data.id}`, data);
}

export function remove(id) {
    return api.delete(`${CONTACTS_URI}/${id}`);
}
