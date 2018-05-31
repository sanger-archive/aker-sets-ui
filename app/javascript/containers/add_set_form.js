import React from 'react';
import { connect } from 'react-redux';
import { createSetOnly } from '../actions/index';

let AddSetForm = ({ dispatch }) => {
  let input;

  return (
    <form onSubmit={ (e) => {

        e.preventDefault();
        if (!input.value) return;

        dispatch(createSetOnly(input.value.trim()));
        input.value = '';

      }}>

      <div className="form-group">
        <label className="sr-only" htmlFor="setName">Name</label>
        <input ref={(node) => input = node} type="text" className="form-control"
          id="setName" placeholder="Set Name" pattern="[A-Za-z0-9:_ '-]*"
          title="Set names may contain letters, numbers, spaces, and the following symbols: ' _ -"></input>
      </div>
      <button style={{width: '100%'}} type="submit" className="btn btn-primary">Create</button>
    </form>
    );
};

AddSetForm = connect()(AddSetForm);

export default AddSetForm;
