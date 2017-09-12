import React from 'react';
import { connect } from 'react-redux';
import { Panel, Heading, Body } from '../components/panel.es6';
import FontAwesome from '../components/font_awesome.es6';

import StamperControl from '../containers/stamper_control.es6'

class ButtonsPanelContainer extends React.Component {
  constructor(props) {
    super(props);
    const firstSetId = props.sets.length!=0 && props.sets[0].id;
    this.state = {newSetName: '', addMaterialsToSetId: firstSetId, removeMaterialsFromSetId: firstSetId};
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
    this.props.createNewSet(this.state.newSetName);
  }

  handleChangeAddMaterialsToSet(event) {
    this.setState({addMaterialsToSetId: event.target.value});
  }

  handleClickAddMaterialsToSet(event) {
    event.preventDefault();
    this.props.addMaterialsToSet(this.state.addMaterialsToSetId);
  }

  handleChangeRemoveMaterialsFromSet(event) {
    this.setState({removeMaterialsFromSetId: event.target.value});
  }

  handleClickRemoveMaterialsFromSet(event) {
    event.preventDefault();
    this.props.removeMaterialsFromSet(this.state.removeMaterialsFromSetId);
  }

  render() {
    const { sets, loading, dispatch } = this.props;

    return (
      <Panel>
        <Body>
          <form className="form-inline" id="create-set">
            <label>
              Create a set from the results:
              <input type="text" style={{marginLeft: '10px'}} className="form-control" placeholder="Set name" onChange={this.handleChangeCreateNewSet} />
            </label>
            <button onClick={this.handleClickCreateNewSet} disabled={loading.creatingSet} style={{marginLeft: '10px'}} type="submit" className="btn btn-primary">Create New Set</button>
            { loading.creatingSet && <FontAwesome icon="spinner fa-spin" size="lg"></FontAwesome> }
          </form>
          <form className="form-inline" id="add-materials-to-set">
            <label>
              Add result materials to an existing set:
            </label>
            <ListSets sets={sets} onChange={this.handleChangeAddMaterialsToSet} />
            <button onClick={this.handleClickAddMaterialsToSet} disabled={loading.addMaterialsToSet} style={{marginLeft: '10px'}} type="submit" className="btn btn-primary">Add Materials To Set</button>
            { loading.addMaterialsToSet && <FontAwesome icon="spinner fa-spin" size="lg"></FontAwesome> }
          </form>
          <form className="form-inline" style={{marginTop: '5px'}} id="remove-materials-from-set">
            <label>
              Remove result materials from an existing set:
            </label>
            <ListSets sets={sets} onChange={this.handleChangeRemoveMaterialsFromSet} />
            <button onClick={this.handleClickRemoveMaterialsFromSet} disabled={loading.removeMaterialsFromSet} style={{marginLeft: '10px'}} type="submit" className="btn btn-primary">Remove Materials From Set</button>
            { loading.removeMaterialsFromSet && <FontAwesome icon="spinner fa-spin" size="lg"></FontAwesome> }
          </form>
          <StamperControl></StamperControl>
        </Body>
      </Panel>
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


