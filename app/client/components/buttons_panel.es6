import React from 'react';
import { connect } from 'react-redux';
import { Panel, Heading, Body } from './panel.es6';
import { createNewSet, addMaterialsToSet } from '../actions';

class ButtonsPannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', setId: ''};
    this.handleChangeCreateNewSet = this.handleChangeCreateNewSet.bind(this);
    this.handleClickCreateNewSet = this.handleClickCreateNewSet.bind(this);
    this.handleClickAddMaterialsToSet = this.handleClickAddMaterialsToSet.bind(this);
    this.handleChangeAddMaterialsToSet = this.handleChangeAddMaterialsToSet.bind(this);
  }

  handleChangeCreateNewSet(event) {
    this.setState({value: event.target.value});
  }

  handleClickCreateNewSet(event) {
    event.preventDefault();
    this.props.dispatch(createNewSet(this.props.items, this.state.value))
  }

  handleChangeAddMaterialsToSet(event) {
    this.setState({setId: event.target.value});
  }

  handleClickAddMaterialsToSet(event) {
    event.preventDefault();
    this.props.dispatch(addMaterialsToSet(this.props.items, this.state.setId))
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
              Add result materials to a set:
            </label>
            <ListSets sets={sets} onChange={this.handleChangeAddMaterialsToSet} />
            <button onClick={this.handleClickAddMaterialsToSet} style={{marginLeft: '10px'}} type="submit" className="btn btn-primary">Add Materials To Set</button>
          </form>

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
      <option value='' key='emptyOption'> </option>
      { optionTags }
    </select>
  );
}


