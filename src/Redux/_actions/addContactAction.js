export function addContact(contact) {
    return {
        type: 'ADD_CONTACT',
        payload: {
            id: contact.id,
            firstName: contact.firstName,
            lastName: contact.lastName,
            phoneNumber: contact.phoneNumber
        }
    }
}