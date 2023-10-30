import { v4 as uuid } from 'uuid';

let contacts = {}

export async function getContacts() {
    return new Promise((resolve, reject) => {
        resolve(Object.values(contacts));
    });
}

export async function createContact() {
    return new Promise((resolve, reject) => {
        const contactId = uuid();
        contacts[contactId] = {
            id: contactId,
            first: "Your",
            last: "Name",
            avatar: "https://placekitten.com/g/200/200",
            twitter: "your_handle",
            notes: "Some notes",
            favorite: true,
        }
        resolve(contacts[contactId]);
    });
}

export async function getContact(id) {
    return new Promise((resolve, reject) => {
        resolve(contacts[id])
    });
}

export async function updateContact(id, update) {
    return new Promise((resolve, reject) => {
        contacts = {...contacts, [id]: update};
        resolve(true);
    });
}

export async function deleteContact(id) {
    return new Promise((resolve, reject) => {
        delete contacts[id];
        resolve(true);
    });
}