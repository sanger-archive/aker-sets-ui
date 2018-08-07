import React from 'react';
import { connect } from 'react-redux';
import { createSetOnly } from '../actions/index';
import { withRouter } from 'react-router'

export class AddSetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.value) return;

    this.props.dispatch(createSetOnly(this.state.value.trim()))
      .then((set) => this.props.history.push({ pathname: `/simple/sets/${set.data.id}` }) );

    this.setState({ value: '' })
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="form-group">
          <label className="sr-only" htmlFor="setName">Name</label>
          <input type="text" value={ this.state.value } onChange={ this.handleChange }
            id="setName" className="form-control" placeholder="Set Name" pattern="[A-Za-z0-9:_ '-]*"
            title="Set names may contain letters, numbers, spaces, and the following symbols: ' _ -" />
        </div>
        <button style={{width: '100%'}} type="submit" className="btn btn-primary">Create</button>
      </form>
    );
  }
};

export default withRouter(connect()(AddSetForm));
