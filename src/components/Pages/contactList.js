import React from 'react';
import { connect } from 'react-redux'

function ContactList(props) {
  const arr = props.contacts;
  const listItems = arr.map((val, index) =>
    <div key={ index }>
      { val.firstName + "\n" + val.lastName + " - " + val.phoneNumber }
      <button onClick='updateContact()'>Update</button>
      <button onClick='deleteContact()'>Delete</button>
    </div>
  );
  return <ul>{ listItems }</ul>;
}

function mapStateToProps(state) {
    return {
      contacts: state.contacts
    }
}

export default connect(mapStateToProps)(ContactList)