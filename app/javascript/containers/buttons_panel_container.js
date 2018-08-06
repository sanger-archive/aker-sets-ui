import React from 'react';
import { connect } from 'react-redux';
import { Panel, Heading, Body } from '../presentation/panel';
import FontAwesome from '../presentation/font_awesome';
import {SelectDisablingSurroundingButtons} from '../containers/set_selector';
import StamperControl from '../containers/stamper_control'

class ButtonsPanelContainer extends React.Component {
  constructor(props) {
    super(props);
    const firstSetId = props.sets.length!=0 && props.sets[0].id;
    this.state = {newSetName: ''};
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
    this.props.createNewSet(this.state.newSetName.trim());
  }

  handleChangeAddRemoveMaterialsFromSet(optionSelected) {
    const value = optionSelected ? optionSelected.value : null
    this.setState({addRemoveMaterialsToSetId: value, selectedOptionForModifyMaterials: optionSelected});
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
          <form className="form col-md-4" id="create-set" onSubmit={this.handleClickCreateNewSet}>
            <label>
              Create new set:
            </label>
              <input type="text" className="form-control" placeholder="Set name" pattern="[A-Za-z0-9:_ '-]*"
              title="Set names may contain letters, numbers, spaces, and the following symbols: ' _ -" onChange={this.handleChangeCreateNewSet} />
            <button disabled={loading.creatingSet} type="submit" className="btn btn-primary set-btn">Create</button>
            { loading.creatingSet && <FontAwesome icon="spinner fa-spin" size="lg"></FontAwesome> }
          </form>
          <form className="form col-md-offset-3 col-md-5" id="add-remove-materials-from-set">
            <label>
              Select a set:
            </label>
            <span className="text-muted pull-right">Must be unlocked and have been created by you</span>
            <SelectDisablingSurroundingButtons sets={sets} onChange={this.handleChangeAddRemoveMaterialsFromSet} selectedOption={this.state.selectedOptionForModifyMaterials} />
            <div className="btn-toolbar">
            <button id="add-button" onClick={this.handleClickAddMaterialsToSet} disabled={loading.addMaterialsToSet} type="submit" className="btn btn-primary set-btn">Add Materials To Set</button>
            { loading.addMaterialsToSet && <FontAwesome icon="spinner fa-spin" size="lg"></FontAwesome> }
            <button id="remove-button" onClick={this.handleClickRemoveMaterialsFromSet} disabled={loading.removeMaterialsFromSet} type="submit" className="btn btn-danger set-btn">Remove Materials From Set</button>
            { loading.removeMaterialsFromSet && <FontAwesome icon="spinner fa-spin" size="lg"></FontAwesome> }
            </div>
          </form>
          {/* <StamperControl></StamperControl> */}
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
    <select onChange={onChange} className="form-control">
      { optionTags }
    </select>
  );
}
