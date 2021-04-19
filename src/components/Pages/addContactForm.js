import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addContact } from '../../Redux/_actions/addContactAction'

function AddContactForm(props) {
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
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Add new contact" 
        onChange={handleChange} 
        value={contact} />
      <button type="submit">Add</button>
    </form>
  );
}

const mapDipatchToProps = {
  addContact
}

export default connect(null, mapDipatchToProps)(AddContactForm)