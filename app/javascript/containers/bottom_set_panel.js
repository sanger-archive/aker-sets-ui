import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Panel, Heading, Body} from '../presentation/panel';
import FontAwesome from '../presentation/font_awesome';
import DraggableSelectedSet from '../containers/draggable_selected_set';
import PaginationLinks from '../presentation/pagination_links';
import { fetchPageForBottom } from '../actions/index';
import ExportButton from '../presentation/export_button';
import { withRouter } from 'react-router';

export class BottomSetPanel extends Component {

  constructor() {
    super();
    this.onPaginationClick = this.onPaginationClick.bind(this);
  }

  onPaginationClick(search) {
    const { dispatch, set } = this.props;
    dispatch(fetchPageForBottom({ setId: set.id, sortBy: 'amount', search }))
  }

  render() {
    const { set, materials, location, history } = this.props;

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
        <Heading title={title}>
          {<ExportButton
            set={set}
            history={history}
            location={{search: '?sortBy=amount'}}
            style={{ float: "right", marginTop: "-1px", marginRight: "3px" }} />}
        </Heading>

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

export default withRouter(connect()(BottomSetPanel));
