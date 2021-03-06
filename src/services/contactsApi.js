import axios from "axios";
axios.defaults.baseURL = 'https://6270d0a8e1c7aec428f865ac.mockapi.io/api'
export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
}
export async function deleteContactById(id) {
    return await axios.delete(`/contacts/${id}`);
}
export async function addContactToList(contact) {
    return await axios.post('/contacts', contact);
}