import { v4 as uuid } from 'uuid';

let contacts = {}

export async function getContacts(searchText) {
    return new Promise((resolve, reject) => {
        let result = Object.values(contacts);

        if (searchText !== null)
            result = result.filter(contact => contact.first.includes(searchText));
        console.log('result', result);
        resolve(result);
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
        setTimeout(() => {
            resolve(contacts[id])
        }, 0)
    });
}

export async function updateContact(id, update) {
    return new Promise((resolve, reject) => {
        let contact = contacts[id];
        let newContact = {...contact, ...update}
        contacts = {...contacts, [id]: newContact};
        resolve(true);
    });
}

export async function deleteContact(id) {
    return new Promise((resolve, reject) => {
        delete contacts[id];
        resolve(true);
    });
}