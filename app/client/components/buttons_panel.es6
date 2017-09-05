import React from 'react';
import { connect } from 'react-redux';
import { Panel, Heading, Body } from './panel.es6';
import { createNewSet, addMaterialsToSet, removeMaterialsFromSet } from '../actions';

import StamperControl from '../containers/stamper_control.es6'


class ButtonsPannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {newSetName: '', addMaterialsToSetId: '', removeMaterialsFromSetId: ''};
    this.handleChangeCreateNewSet = this.handleChangeCreateNewSet.bind(this);
    this.handleClickCreateNewSet = this.handleClickCreateNewSet.bind(this);
    this.handleChangeAddMaterialsToSet = this.handleChangeAddMaterialsToSet.bind(this);
    this.handleClickAddMaterialsToSet = this.handleClickAddMaterialsToSet.bind(this);
    this.handleChangeRemoveMaterialsFromSet = this.handleChangeRemoveMaterialsFromSet.bind(this);
    this.handleClickRemoveMaterialsFromSet = this.handleClickRemoveMaterialsFromSet.bind(this);
  }

  handleChangeCreateNewSet(event) {
    this.setState({newSetName: event.target.value});
  }

  handleClickCreateNewSet(event) {
    event.preventDefault();
    this.props.dispatch(createNewSet(this.props.items, this.state.newSetName))
  }

  handleChangeAddMaterialsToSet(event) {
    this.setState({addMaterialsToSetId: event.target.value});
  }

  handleClickAddMaterialsToSet(event) {
    event.preventDefault();
    this.props.dispatch(addMaterialsToSet(this.props.items, this.state.addMaterialsToSetId))
  }

  handleChangeRemoveMaterialsFromSet(event) {
    this.setState({removeMaterialsFromSetId: event.target.value});
  }

  handleClickRemoveMaterialsFromSet(event) {
    event.preventDefault();
    this.props.dispatch(removeMaterialsFromSet(this.props.items, this.state.removeMaterialsFromSetId))
  }

  render() {
    const { items, sets, dispatch } = this.props;

    return (
      <Panel>
        <Body>
          <form className="form-inline">
            <label>
              Create a set from the results:
              <input type="text" style={{marginLeft: '10px'}} className="form-control" placeholder="set name" onChange={this.handleChangeCreateNewSet} />
            </label>
            <button onClick={this.handleClickCreateNewSet} style={{marginLeft: '10px'}} type="submit" className="btn btn-primary">Create New Set</button>
          </form>
          <form className="form-inline">
            <label>
              Add result materials to an existing set:
            </label>
            <ListSets sets={sets} onChange={this.handleChangeAddMaterialsToSet} />
            <button onClick={this.handleClickAddMaterialsToSet} style={{marginLeft: '10px'}} type="submit" className="btn btn-primary">Add Materials To Set</button>
          </form>
          <form className="form-inline" style={{marginTop: '5px'}}>
            <label>
              Remove result materials from an existing set:
            </label>
            <ListSets sets={sets} onChange={this.handleChangeRemoveMaterialsFromSet} />
            <button onClick={this.handleClickRemoveMaterialsFromSet} style={{marginLeft: '10px'}} type="submit" className="btn btn-primary">Remove Materials From Set</button>
          </form>
          <StamperControl></StamperControl>
        </Body>
      </Panel>
    );
  }
}

ButtonsPannel = connect()(ButtonsPannel);
export default ButtonsPannel;

const ListSets = ({sets, onChange}) => {
  const optionTags = sets.map((set, index) => {
    return <option value={set.id} key={index}>{set.attributes.name}</option>
  });

  return (
    <select onChange={onChange} className="form-control" style={{marginLeft: '10px'}}>
      { optionTags }
    </select>
  );
}


