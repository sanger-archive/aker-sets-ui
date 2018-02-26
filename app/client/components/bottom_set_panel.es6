import React from 'react';
import {Panel, Heading, Body} from './panel.es6';
import FontAwesome from './font_awesome.es6';
import DraggableSelectedCollection from '../containers/draggable_selected_collection.es6';
import PaginationContainer from '../containers/pagination_container.es6';
import { getSelectedBottomLinks, getSelectedBottomUrl, getSelectedBottomPage } from '../selectors/index.es6';


const BottomSetPanel = ({ set }) => {
  if (!set || !set.id) {
    return (
      <Panel key='bottom-set-'>
        <Heading title='No set selected'/>
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
