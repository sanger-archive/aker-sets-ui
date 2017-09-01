import React from 'react';
import { connect } from 'react-redux';
import { Panel, Heading, Body } from './panel.es6';
import { createNewSet } from '../actions';

import StamperControl from '../containers/stamper_control.es6'


class ButtonsPannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick(event) {
    event.preventDefault();
    this.props.dispatch(createNewSet(this.props.items, this.state.value))
  }

  render() {
    return (
      <Panel>
        <Body>
          <form className="form-inline">
            <label>
              Create a set from the results:
              <input type="text" style={{marginLeft: '10px'}} className="form-control" placeholder="set name" onChange={this.handleChange} />
            </label>
            <button disabled={this.props.items==0} onClick={this.handleClick} style={{marginLeft: '10px'}} type="submit" className="btn btn-primary">Create New Set</button>
          </form>
          <StamperControl></StamperControl>
        </Body>
      </Panel>
    );
  }
}

ButtonsPannel = connect()(ButtonsPannel);
export default ButtonsPannel;




