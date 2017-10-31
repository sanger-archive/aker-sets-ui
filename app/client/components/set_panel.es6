import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {Panel, Heading, Body} from './panel.es6';
import LockedSelectedSet from '../containers/locked_selected_set.es6';
import DroppableSelectedSet from '../containers/droppable_selected_set.es6';
import PaginationContainer from '../containers/pagination_container.es6';
import { getSelectedTop, getSelectedTopLinks, getSelectedTopUrl, getSelectedTopPage } from '../selectors/index.es6';
import FontAwesome from '../components/font_awesome.es6';
import { select, fetchFirstPageSetAndMaterials } from '../actions/index.es6';

class SetPanel extends Component {

  componentDidMount() {
    this.props.dispatch(select(this.props.match.params.set_uuid, 'top'))
    this.props.dispatch(fetchFirstPageSetAndMaterials(this.props.match.params.set_uuid))
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.set_uuid != prevProps.match.params.set_uuid) {
      this.props.dispatch(select(this.props.match.params.set_uuid, 'top'))
      this.props.dispatch(fetchFirstPageSetAndMaterials(this.props.match.params.set_uuid))
    }
  }

  render() {
    return <SetPanelComponent {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    set: getSelectedTop(state)
  };
};

export const SetPanelComponent = (props) => {
  let set = props.set;

  if (!set || !set.id) {
    return (
      <Panel key='set-'>
        <Heading title='No set selected'/>
      </Panel>
    );
  }

  let setName = set.attributes.name;

  let icon = <FontAwesome icon="lock" style={{"color": "#e61c1c"}} />;

  if (set.attributes.locked) {
    setName = <span>{setName} {icon}</span>;
  }

  return (
      <Panel key={`set-${set.id}`}>
        <Heading title={setName}></Heading>

        <Body style={{height: '334px', overflowY: 'scroll'}}>
          { set.attributes.locked ? <LockedSelectedSet set={set} /> : <DroppableSelectedSet set={set} /> }
        </Body>
        <PaginationContainer getLinks={ getSelectedTopLinks } getUrl={getSelectedTopUrl} getPage={getSelectedTopPage}></PaginationContainer>
      </Panel>
  );
};

export default withRouter(connect(mapStateToProps)(SetPanel));
