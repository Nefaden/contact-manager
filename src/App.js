import React, { Component } from 'react'
import { connect } from 'react-redux'

import ModalRoot from './ModalRoot'
import ContactList from './components/Pages/contactList';

import './App.css'

import { showModal, hideModal } from './Redux/_actions/modalAction';

const MESSAGE = "A message should be here"

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({ modalProps, modalType }))
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: ''
    }
    this.closeModal = this.closeModal.bind(this);
    this.openConfirmModal = this.openConfirmModal.bind(this);
    this.openAddContactModal = this.openAddContactModal.bind(this);
    this.showInput = this.showInput.bind(this);
  }

  closeModal() {
    this.props.hideModal()
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  showInput() {
    const { address } = this.state
    const message = address ? `Address: ${address}` : 'No address entered'
    this.props.showModal({
      open: true,
      title: 'Prompt Modal',
      message,
      closeModal: this.closeModal
    }, 'alert')
  }

  openConfirmModal() {
    this.props.showModal({
      open: true,
      title: 'Confirm Modal',
      message: MESSAGE,
      confirmAction: this.closeModal,
      closeModal: this.closeModal
    }, 'confirm')
  }
  
  openAddContactModal() {
    this.props.showModal({
      open: true,
      title: 'Add Contact Modal',
      message: MESSAGE,
      confirmAction: this.closeModal,
      closeModal: this.closeModal
    }, 'add')
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Contact Manager</h1>
        </header>
        <div className="container">
          <div className="modal-types row d-flex justify-content-center align-items-center">
            <div className="col">
              <button
                className="btn btn-outline-primary btn-block"
                onClick={this.openAddContactModal}
              >Add new contact</button>
            </div>
          </div>
        </div>
        <ContactList />
        <ModalRoot hideModal={this.props.hideModal} />
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(App)