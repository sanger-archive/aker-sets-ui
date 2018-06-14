import React from 'react';
import {Panel, Heading, Body} from './panel';
import FontAwesome from './font_awesome';
import DraggableSelectedCollection from '../containers/draggable_selected_collection';
import PaginationContainer from '../containers/pagination_container';
import { getSelectedBottomLinks, getSelectedBottomUrl, getSelectedBottomPage } from '../selectors/index';


const BottomSetPanel = ({ set }) => {
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

      <Body style={{height: '231px', overflowY: 'scroll'}}>
        <DraggableSelectedCollection />
      </Body>
      <PaginationContainer getLinks={getSelectedBottomLinks} getUrl={getSelectedBottomUrl} getPage={getSelectedBottomPage}></PaginationContainer>
    </Panel>
  );
};

export default BottomSetPanel;
