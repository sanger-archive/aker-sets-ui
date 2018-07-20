import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Panel, Heading, Body} from './panel';
import FontAwesome from './font_awesome';
import DraggableSelectedSet from '../containers/draggable_selected_set';
import { PaginationLinks } from '../components/search_results_table';
import { fetchPageForBottom } from '../actions/index';

export class BottomSetPanel extends Component {

  constructor() {
    super();
    this.onPaginationClick = this.onPaginationClick.bind(this);
  }

  onPaginationClick(pageNumber) {
    const { dispatch, set } = this.props;
    dispatch(fetchPageForBottom({ setId: set.id, pageNumber }))
  }

  render() {
    const { set, materials } = this.props;

    if (!set || !set.id) {
      return (
        <Panel key='bottom-set-'>
          <Heading title='No set selected'/>
          <Body>Please select a set you wish to view from either the "My Sets" or "All Sets" tabs</Body>
        </Panel>
      );
    }

    let title = set.attributes.name;
    const icon = <FontAwesome icon="lock" style={{"color": "#e61c1c"}} />;

    if (set.attributes.locked) {
      title = <span>{title} {icon}</span>;
    }

    return (
      <Panel key={`bottom-set-${set.id}`}>
        <Heading title={title}></Heading>

        <Body style={{height: '334px', overflowY: 'scroll'}}>
          <DraggableSelectedSet materials={ materials.items } />
        </Body>
        <PaginationLinks
          links={ materials.links }
          meta={ materials.meta }
          onClick={ this.onPaginationClick }
        />
      </Panel>
    );
  }
};

export default connect()(BottomSetPanel);
