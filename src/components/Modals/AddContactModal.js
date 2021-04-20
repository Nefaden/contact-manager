import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addContact } from '../../Redux/_actions/addContactAction'

const AddContactModal = ({ closeModal, confirmAction, title, message, props }) => {
    const [contact, setContact] = useState('');

    function handleChange(e) {
      setContact(e.target.value);
    }
      
    function handleSubmit(e) {
      if(contact !== '') {
        props.addContact(contact);
        setContact('');
      }
      e.preventDefault();
    }

    return (
        <div className="modal-content">
        <div className="modal-header">
            <h5
            className="modal-title"
            >{title}</h5>
            <button type="button" className="close" aria-label="Close" onClick={closeModal}>
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div className="modal-body">
            <p>{message}</p>
        </div>
        <form onSubmit={handleSubmit}>
            <input type="text" 
                placeholder="First name" 
                onChange={handleChange} 
                value={contact.firstName} />
            <input type="text" 
                placeholder="Last name" 
                onChange={handleChange} 
                value={contact.lastName} />
            <input type="text" 
                placeholder="Phone number" 
                onChange={handleChange} 
                value={contact.phoneNumber} />
        </form>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancel</button>
            <button type="submit" className="btn btn-primary" onClick={confirmAction}>Confirm</button>
        </div>
        </div>
    )
}

const mapDipatchToProps = {
  addContact
}

export default connect(null, mapDipatchToProps)(AddContactModal)

// export default AddContactModal