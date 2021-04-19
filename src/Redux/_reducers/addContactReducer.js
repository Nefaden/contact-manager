export const initialState = {
    contacts: [
        { id: "0", firstName: "James", lastName: "Smith", phoneNumber: "01 02 03 04 05" },
        { id: "1", firstName: "Thomas", lastName: "Anderson", phoneNumber: "01 02 03 04 05 " }, 
        { id: "2", firstName: "Bruce", lastName: "Wayne", phoneNumber: "01 02 03 04 05" }
        ] 
    };

function nextContactId(contacts) {
    const maxId = contacts.reduce((maxId, contact) => Math.max(contact.id, maxId), -1)
    return maxId + 1
    }

export default function reducer (state = initialState, action) {
    switch(action.type) {
      case 'ADD_CONTACT':
        return {
            ...state,
            contacts: [
                ...state.contacts,
                {
                    id: nextContactId(state.contacts),
                    text: action.payload,
                }
            ]
        }
      default:
        return state;
    }
  }
