import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Panel, Heading, Body} from '../presentation/panel';
import { MaterialTable } from '../presentation/material_table';
import DroppableMaterialTable from '../presentation/droppable_material_table';
import PaginationLinks from '../presentation/pagination_links';
import ExportButton from '../presentation/export_button';
import { getSelectedTop } from '../selectors/index';
import FontAwesome from '../presentation/font_awesome';
import { select } from '../actions/browser';
import { fetchPageForTop, removeMaterialsFromSet, appendMaterialsToSet } from '../actions/index';
import { clearSelection } from '../actions/browser';
import { readEndpoint } from 'redux-json-api';
import DeleteSetButton from '../containers/delete_set_button';

class SetPanel extends Component {

  componentDidMount() {
    this.props.fetchPage();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.set_uuid != prevProps.match.params.set_uuid || this.props.location.search != prevProps.location.search) {
      this.props.fetchPage();
    }
  }

  render() {
    return <SetPanelComponent {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    set: getSelectedTop(state),
    materials: state.materials['top'],
    user_email: state.userEmail
  };
};

const mapDispatchToProps = (dispatch, { match, location }) => {
  return {
    fetchPage() {
      dispatch(select(match.params.set_uuid, 'top'));
      return dispatch(fetchPageForTop({ setId: match.params.set_uuid, search: location.search }));
    },
    onRemove(material) {
      const set_id = match.params.set_uuid;
      return dispatch(removeMaterialsFromSet(material, { id: set_id }))
        .then(() => { return dispatch(readEndpoint(`sets/${set_id}`))})
        .then(() => { return dispatch(fetchPageForTop({ setId: set_id, search: location.search })) });
    },
    onAdd(materials) {
      const set_id = match.params.set_uuid
      return dispatch(appendMaterialsToSet(materials, { id: set_id }))
        .then(() => { return dispatch(clearSelection()) })
        .then(() => { return dispatch(fetchPageForTop({ setId: set_id, search: location.search })) });
    }
  }
}

export const SetPanelComponent = ({ set, user_email, materials, match, location, history, onAdd, onRemove }) => {
  if (!set || !set.id) {
    return (
      <Panel key='set-'>
        <Heading title='No set selected'/>
        <Body>Please select a set you wish to manage from the "My Created Sets" tab</Body>
      </Panel>
    );
  }

  let setName = set.attributes.name;

  // Delete button should only show up for unlocked sets that belong to the logged in user
  let deleteable = (user_email == set.attributes.owner_id && !set.attributes.locked);

  let icon = <FontAwesome icon="lock" style={{"color": "#e61c1c"}} />;

  if (set.attributes.locked) {
    setName = <span>{setName} {icon}</span>;
  }

  return (
      <Panel key={`set-${set.id}`}>
        <Heading title={setName}>
          { deleteable && <DeleteSetButton set={set} style={{ "float": "right" }} /> }
          <ExportButton
            set={set}
            history={history}
            location={location}
            style={{ float: "right", marginTop: "-1px", marginRight: "3px" }} />
        </Heading>

        <Body style={{height: '334px', overflowY: 'scroll'}}>
          { set.attributes.locked ?
            <MaterialTable removeable={false} set={set} materials={materials.items} /> :
            <DroppableMaterialTable
              removeable={true}
              set={set}
              materials={materials.items}
              onAdd={onAdd}
              onRemove={onRemove} /> }
        </Body>
        <PaginationLinks
          route={true}
          links={materials.links}
          meta={materials.meta}
          location={location}
        />
      </Panel>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SetPanel);
