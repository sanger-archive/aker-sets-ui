import React from 'react';
import { connect } from 'react-redux';
import { Panel, Heading, Body } from '../components/panel.es6';
import FontAwesome from '../components/font_awesome.es6';

import StamperControl from '../containers/stamper_control.es6'

class ButtonsPanelContainer extends React.Component {
  constructor(props) {
    super(props);
    const firstSetId = props.sets.length!=0 && props.sets[0].id;
    this.state = {newSetName: '', addRemoveMaterialsToSetId: firstSetId};
    this.handleChangeCreateNewSet = this.handleChangeCreateNewSet.bind(this);
    this.handleClickCreateNewSet = this.handleClickCreateNewSet.bind(this);
    this.handleChangeAddRemoveMaterialsFromSet = this.handleChangeAddRemoveMaterialsFromSet.bind(this);
    this.handleClickAddMaterialsToSet = this.handleClickAddMaterialsToSet.bind(this);
    this.handleClickRemoveMaterialsFromSet = this.handleClickRemoveMaterialsFromSet.bind(this);
  }

  handleChangeCreateNewSet(event) {
    this.setState({newSetName: event.target.value});
  }

  handleClickCreateNewSet(event) {
    event.preventDefault();
    this.props.createNewSet(this.state.newSetName);
  }

  handleChangeAddRemoveMaterialsFromSet(event) {
    this.setState({addRemoveMaterialsToSetId: event.target.value});
  }

  handleClickAddMaterialsToSet(event) {
    event.preventDefault();
    this.props.addMaterialsToSet(this.state.addRemoveMaterialsToSetId);
  }

  handleClickRemoveMaterialsFromSet(event) {
    event.preventDefault();
    this.props.removeMaterialsFromSet(this.state.addRemoveMaterialsToSetId);
  }

  render() {
    const { sets, loading, dispatch } = this.props;

    return (
        <Body>
          <form className="form col-md-4" id="create-set">
            <label>
              Create new set:
              <input type="text" style={{marginLeft: '10px'}} className="form-control" placeholder="Set name" onChange={this.handleChangeCreateNewSet} />
            </label>
            <button onClick={this.handleClickCreateNewSet} disabled={loading.creatingSet} type="submit" className="btn btn-primary" id="create-set-btn">Create</button>
            { loading.creatingSet && <FontAwesome icon="spinner fa-spin" size="lg"></FontAwesome> }
          </form>
          <form className="form col-md-4" id="add-remove-materials-from-set">
            <label>
              Select a set:
            </label>
            <ListSets sets={sets} onChange={this.handleChangeAddRemoveMaterialsFromSet} />
            <button id="add-button" onClick={this.handleClickAddMaterialsToSet} disabled={loading.addMaterialsToSet} type="submit" className="btn btn-primary mat-btn">Add Materials To Set</button>
            { loading.addMaterialsToSet && <FontAwesome icon="spinner fa-spin" size="lg"></FontAwesome> }
            <button id="remove-button" onClick={this.handleClickRemoveMaterialsFromSet} disabled={loading.removeMaterialsFromSet} type="submit" className="btn btn-danger mat-btn">Remove Materials From Set</button>
            { loading.removeMaterialsFromSet && <FontAwesome icon="spinner fa-spin" size="lg"></FontAwesome> }
          </form>
          <StamperControl></StamperControl>
        </Body>
    );
  }
}

export default ButtonsPanelContainer;

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
