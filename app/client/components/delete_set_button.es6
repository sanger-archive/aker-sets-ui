import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteEntity } from 'redux-json-api';
import { clearSelected, userMessage } from '../actions/index.es6';
import { Link } from 'react-router-dom'

class DeleteSetButton extends Component {

  constructor(props) {
    super(props);

    this.state = { showModal: false };

    this.deleteSet = this.deleteSet.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  deleteSet() {
    const { set, dispatch } = this.props;
    dispatch(deleteEntity(set));

    // Doing this just so we don't continue to try and fetch materials for a Set that no longer exists
    dispatch(clearSelected());
  }

  showModal() {
    this.setState({ showModal: true })
  }

  hideModal() {
    this.setState({ showModal: false })
  }

  render() {
    const modal = (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Delete Set</Modal.Title>
        </Modal.Header>

        <Modal.Body>Are you sure you wish to delete <b>{ this.props.set.attributes.name }</b>?</Modal.Body>

        <Modal.Footer>
          <Button onClick={this.hideModal}>Close</Button>
          {/* We don't want to stay on this Set's URL, let's go Home */}
          <Link onClick={this.deleteSet} className="btn btn-primary" to="/" replace>Confirm</Link>
        </Modal.Footer>
      </Modal.Dialog>
    );

    return (
      <div>
        <button onClick={this.showModal} className="btn btn-xs btn-danger" style={this.props.style}>
            Delete Set
        </button>
        { this.state.showModal && modal }
      </div>
    )
  }
}

export default connect()(DeleteSetButton);

